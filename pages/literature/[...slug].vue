<template>

<NavBarreComponent />
  <div class="mt-[15%]  rounded-2xl
  sm:mt-[30%] sm:mx-auto   sm:pt-10
  md:mt-[18%] md:mx-[20%]  md:pt-10
  lg:mt-[15%] lg:mx-[20%]  lg:pt-4
  xl:mt-[15%] xl:mx-[20%]  xl:pt-4
  2xl:mt-[15%] 2xl:mx-auto 2xl:pt-4 2xl:w-[75%] 
  ">

     <div class="bg-white px-4 text-slate-800 dark:text-gray-200 dark:bg-slate-500 pr-4 ">
       <ContentDoc v-slot="{doc}" tag="article" :path="path" >
        <!--En-tête du blog-->
        <div class=" p-5">
          <h1 class="text-xl font-semibold sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.5rem] ">{{ doc.title }}</h1>
          <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%] md:w-[150%] ">
        </div>
       
        <p class="text-gray-500 text-sm mt-2 pl-[5px]">
          {{ doc.date  }}
        </p>
          <!-- Contenu du blog -->
          <ContentRenderer :value="doc" class="content mb-[10%] pl-[5px] "/>
       
       
           </ContentDoc>
     </div>
  </div>
  
</template>

<script lang="ts" setup>
const route = useRoute();

const path = useRoute().fullPath ;


</script>

<style>
.content img {
  /* @apply lg:w-[200%]; */
}
.content p:not(:last-child){
  @apply text-[1.5rem] sm:text-[1rem] md:text-[1.3rem];
}
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child) {
  @apply md:text-[2rem]
}
.content h2:not(:last-child){
  @apply md:text-[1.75rem]
}
.content h3:not(:last-child) {
  @apply md:text-[1.60rem]
}
.content h4:not(:last-child){
  @apply md:text-[1.4rem]
}
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
  }


.content h1 {
    @apply text-[3rem] font-bold sm:text-[1.5rem] md:text-[1.7rem];
   
}

.content h2 {
    @apply text-[2.5rem] font-bold sm:text-[1.25rem] md:text-[1.5rem];
}

.content h3 {
    @apply text-[2rem] font-bold sm:text-[1rem] md:text-[1.2rem] ;
}

.content h4 {
    @apply text-[2rem] font-bold sm:text-[0.75rem] md:text-[0.8rem];
}

.content h5 {
    @apply text-base font-bold sm:text-[0.70rem] md:text-[0.75rem];
}

.lien {
  color: blue
}


</style>