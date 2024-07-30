
<template>
  <NavBarreBenin />

  <div v-if="isCategory" class="mt-[5%] mb-[2%]
  
  ">
     <!-- Afficher les articles de la catégorie -->
     <ContentList :path="categoryPath" :query="query">
        <template #default="{ list }">
          <div class="mt-[16%] 
          sm:w-[80%] sm:mx- sm:bg- sm:mt-[20%] sm:pt-10
          md:w-[60%] md:mx-auto md:bg- md:mt-[15%]  md:pt-10
          lg:w-[58%] lg:mx-auto lg:bg- lg:mt-[15%]  lg:pt-1
          xl:w-[58%] xl:h-auto xl:mx-auto xl:bg- xl:mt-[15%]  xl:pt-1
          2xl:w-[75%] 2xl:h-auto 2xl:mx-auto 2xl:bg- 2xl:mt-[15%]  2xl:pt-1
          ">
    <div v-for="(benin, index) in list" :key="index" class="bg-white rounded-2xl mb-1 border-2 border-[#aaba] my-4">
        <div class="h-[320px] sm:h-[200px] md:h-[250px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]">
            <img :src="benin.thumbnail" alt="" class="w-full h-full object-cover rounded-2xl">
        </div>
        <h2 class="font-bold text-2xl ml-5 sm:text-[1rem]">
            <NuxtLink v-if="benin._path" :to="'/benin/' + benin._path.replace('/benin/', '')">{{ benin.title }}</NuxtLink>
            <span v-else class="sm:text-[1rem]">{{ benin.title }}</span>
        </h2>
        <p v-if="benin.description" class="ml-2 sm:text-[1rem]">{{ benin.description }}</p>
        <p class="ml-2">{{ formatDate(benin.date) }}</p>
    </div>
    </div>

          
          
        </template>

        <template #not-found>
          <p class="mt-[50%]">Aucun article trouvé</p>
        </template>
      </ContentList>
  </div>
  <div v-else class="bg-white px-4 mb-[2%] 
      sm:w-[80%] sm:mt-[35%] sm:px-2 sm:bg-white
      md:w-[55%] md:mx-auto md: md:justify-center md:mt-[20%] md:bg-white
      lg:w-[60%] lg:mx-auto lg: lg:justify-center lg:mt-[15%] lg:bg-white
      xl:w-[65%] xl:mx-auto xl: xl:justify-center xl:mt-[15%] xl:bg-white
      2xl:w-[70%] 2xl:mx-auto 2xl: 2xl:justify-center 2xl:mt-[15%] 2xl:bg-white
  ">
    <ContentDoc v-slot="{doc}" tag="article" :path="path" >
       <div class="text-center  mt-[16%]  ">
         <h1 class="text-4xl font-semibold sm:text-[1.5rem]">{{ doc.title }}</h1>
         <img :src="doc.thumbnail" alt="" class="w-full  object-cover">
       </div>
        
        <!-- Contenu du blog -->
        <ContentRenderer :value="doc" class="content"/>
        <p class="text-gray-500 text-sm mt-2">
              {{ doc.date  }}
          </p>
      
    </ContentDoc>
  </div>


</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useDateFormat } from '@vueuse/core'
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute();

const slug = route.params.slug as string[]
const path = `/benin/${slug.join('/')}`
const isCategory = slug.length === 1 // Si le slug a une longueur de 1, c'est une catégorie

const categoryPath = `/benin/${slug[0]}`
const query: QueryBuilderParams = {
  path: categoryPath,
  sort: [{ date: -1 }]
}

function formatDate(date: string) {
  return useDateFormat(date, "YYYY-MM-DD").value
}

</script>




<style>
.content p:not(:last-child){
  @apply text-[1.5rem] sm:text-[1rem];
}

.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),

.content table:not(:last-child) {
  @apply mb-4 ;
  }

  
  .content h1 {
    @apply text-[3rem] font-bold sm:text-[1.5rem] md:text-[1.75rem];
   
}

.content h2 {
    @apply text-[2.5rem] font-bold sm:text-[1.25rem] md:text-[1.1rem];
}

.content h3 {
    @apply text-[2rem] font-bold sm:text-[1rem] md:text-[1rem];
}

.content h4 {
    @apply text-[2rem] font-bold sm:text-[0.75rem] md:text-[0.75rem];
}

.content h5 {
    @apply text-base font-bold sm:text-[0.70rem] md:text-[0.7rem];
}

.lien {
  color: blue
}


</style>
