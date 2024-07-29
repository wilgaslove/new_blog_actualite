<template>
  <!-- Utilisation du module marquee de nuxt: npx nuxi@latest module add marquee -->
  <div class="barrdefillante">
    <marquee behavior="scroll" direction="left" class="text-black bg-white marquee fixed  left-0 right-0 py-4 text-lg  font-bold
    sm:top-[8%]
    md:top-[7%]
    lg:top-[7%]
    xl:top-[7%]
    2xl:top-[7%]" style="width: 100vw;">
      <p>Wilgas ADJOVI entrepreneur, blogueur et développeur;  vous invite à rejoindre son équipe pour des aventures fabuleuses. Contact : (+229) 95-47-92-36.</p>

      <p>Dr Love en promotion des PC neufs et occasion à l'état neuf. Contact : (+229) 95-47-92-36.</p>

      <p>Highfive University est l'une des meilleures écoles de codage au Bénin, formant les élites d'aujourd'hui et de demain ! Rejoignez-nous pour un avenir garanti. Contact : highfiveuniversity.bj/Contact</p>

      <p>Prochaine session, les inscriptions: 15 juillet 2024. Date de démarrage du concours : 15 août 2024.</p>
      
      <p>Vente flash d'ordinateurs neufs chez le groupe Soldat-du-Christ du 1er au 15 juillet 2024. Contact : (+229) 95-47-92-36.</p>


      <p>Venez célébrer Christ avec nous lors de nos deux cultes dimanche prochain à la Chapelle Internationale des Signes et des Merveilles (CISIM) Cotonou. Soyez bénis. Amen ! Contact : 95 45 55 45.</p>
      
    </marquee>
  </div>

  <div class="absolute defillantephoto">
    <marquee behavior="scroll" direction="left" 
    class="text-black  marquee fixed font-bold  fixed bottom-[8%]  left-[80%]  text-lg text-white 
      h-[30%] w-[20%] sm:bottom-[-7%]  2xl:left-[70%]  xl:left-[70%] " >
      <img src="assets\img\logo.827ea6ee.png" alt="image 1" class=" object-cover imge w-full h-full">
      <img src="assets\img\image9.a7c463dd.webp" alt="image 2" class=" object-cover imge w-full h-full">
      <img src="assets\img\téléchargement.png" alt="image 3" class=" object-cover imge w-full h-full">
      
    </marquee>
  </div>
</template>

<style>
/* Affiche les paragraphes en ligne */
marquee p {
  display: inline-block;
  margin-right: 4rem;
}

.imge {
  display: inline-block;
  margin-right: 2rem;
  
}
</style>
