<template>
  <NavbarreComponent />

  <div>
    <ContentList path="/literature"  :query="query" >
       <template #default="{list}">
        <div class="mt-[17%] mb-[20%]
        sm:mt-[35%] sm:mb-[15%]
        md:my-[20%]
        lg:my-[20%]
        xl:my-[15%]
        2xl:my-[15%]


        ">
          <div v-for="(literature, index) in list" :key="index" class="shadow-md rounded-2xl round-2xl mb-1 border-2 border-[#aaba] 
          sm:w-[75%] sm:h-[20%]  sm:mx-
          md:w-[55%] md:h-[20%]  md:mx-auto
          lg:w-[55%] lg:h-[20%]  lg:mx-auto
          xl:w-[55%] xl:h-[20%]  xl:mx-auto
          2xl:w-[75%] 2xl:h-[20%]  2xl:mx-auto

          ">
            <div class="h-[320px] sm:h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px]">
              <img :src=" literature.thumbnail" alt="" class="w-full h-full object-cover rounded-2xl">
            </div>
            <h2 class="font-bold text-2xl">
              <NuxtLink :to="'/literature/' + literature.slug">{{ literature.title }}</NuxtLink>
            </h2>
            <p v-if="literature.description">{{ literature.description }}</p>
            <p>{{ formatDate(literature.date) }}</p>
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

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { 
  path: '/literature', 
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