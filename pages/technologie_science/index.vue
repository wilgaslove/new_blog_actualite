<template>
  <NavBarreComponent />
  <div>
    <ContentList path="/technologie_science"  :query="query" >
       <template #default="{list}">
        <div class="
         mt-[17%] 
        sm:mt-[35%] 
        md:mt-[25%]
        lg:mt-[20%]
        xl:mt-[15%]
        2xl:mt-[15%]
        sm:pt-4
        md:pt-4
        lg:pt-4
        xl:pt-4
        2xl:pt-4


        ">
          <div v-for="(technologie_science, index) in list" :key="index" class="shadow-md round-2xl mb-1 border-2 border-[#aaba]  rounded-2xl
          sm:w-[90%] sm:h-[20%]  sm:mx-auto
          md:w-[55%] md:h-[20%]  md:mx-auto
          lg:w-[55%] lg:h-[20%]  lg:mx-auto
          xl:w-[55%] xl:h-[20%]  xl:mx-auto
          2xl:w-[75%] 2xl:h-[20%]  2xl:mx-auto

          ">
            <div class="h-[320px] sm:h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px] ">
              <img :src=" technologie_science.thumbnail" alt="" class="w-full h-full object-cover rounded-2xl">
            </div>
            <h2 class="font-bold text-2xl pl-[5px]">
              <NuxtLink :to="'/technologie_science/' + technologie_science.slug">{{ technologie_science.title }}</NuxtLink>
            </h2>
            <p v-if="technologie_science.description" class="pl-[5px]" >{{ technologie_science.description }}</p>
            <p class="pl-[5px]" >{{ formatDate(technologie_science.date) }}</p>
          </div>
        </div>
      
       </template>

       <template #not-found>
        <p  class="mt-[50%]">Aucun article trouvé</p>
       </template>
    </ContentList>
  </div>
  
</template>

<script lang="ts" setup>

// import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { 
  path: '/technologie_science', 
  sort: [{ date: -1 }] 
  // limit: 5,
}

function formatDate(date:string) {
  return useDateFormat(date, "YYYY-MM-DD") ;
}
</script>

<style>
.article{
  margin-top: 10rem;
}

</style>