<template>
  <NavBenin /> 
  <div >
    <ContentList path="/benin" :query="query">
      <template #default="{list}">
        <div class="mar_top 
       
        ">
          <div v-for="(benin, index) in list" :key="index"  class="bg-white shadow-md round-2xl mb-1 border-2 border-[#aaba]
          ">
            <div class="h-[30px] 
            sm:h-[20%]
            md:h-[25%]
            lg:h-[25%]
            xl:h-[25%]
            2xl:h-[25%]
            ">
              <img :src="benin.thumbnail" alt="" class="w-full  object-cover">
            </div>
            <h2 class="font-bold text-2xl ml-2 
            ">
              <NuxtLink v-if="benin._path" :to="'/benin/'  +  benin._path.replace('/benin/', '')" class="">{{ benin.title }}</NuxtLink>
              <span v-else>{{ benin.title }}</span> 
            </h2>
            <p v-if="benin.description" class="ml-2" >{{ benin.description }}</p>
            <p class="ml-2" >{{ formatDate(benin.date) }}</p>
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
import type { QueryBuilderParams } from '@nuxt/content'
import { useDateFormat } from '@vueuse/core'

const query: QueryBuilderParams = {
  path: '/benin',
  sort: [{date: -1}]
}

function formatDate(date:string) {
  return useDateFormat(date, "YYYY-MM-DD");
}
</script>

<style scoped>
.mar_top{
  margin-top: 50%;
}
</style>