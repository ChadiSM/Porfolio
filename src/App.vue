<script setup>

import Introduccion from './components/Introduccion.vue'

import Botones from './components/botones.vue';
</script>

<template>
<head>
  <meta charset="UTF-8" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/gh/vaibhav111tandon/vov.css@latest/vov.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <link 
  rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
>
</head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div class="about-container">
    <div class="dynamic-border">
      <div class="about-content">
         
      </div>
    </div>
  </div>
 
<router-view></router-view>
</template>

<style >



html{
  
  height: 100vh;
  background-image: linear-gradient(15deg,#7b8c94 0%, #7b8c94 50%, #0f2c30 100%);
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5); /* Sombra que simula el borde LED */
  z-index: 4;
  overflow-x: hidden;
}








</style>

 