<template>
  <div class="bg-gray-100 dark:bg-black">
    
    <div class="max-w-4xl px-4 mx-auto">
      <NuxtLayout >
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWrVoT6Baze9ibdt3EXwbnO4KwEV0XSzM",
  authDomain: "new-blog-pub.firebaseapp.com",
  projectId: "new-blog-pub",
  storageBucket: "new-blog-pub.appspot.com",
  messagingSenderId: "135507123727",
  appId: "1:135507123727:web:bcd2d5818bf3280ab1cd7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

</script>
<style>

</style>