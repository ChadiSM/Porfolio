<template>
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
   <link href="https://cdn.jsdelivr.net/gh/vaibhav111tandon/vov.css@latest/vov.css" rel="stylesheet" type="text/css">

 <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</head>
 

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">



 <ul>
  <li>   <a class="animate__animated animate__rotateInDownLeft fade-out" style="animation-delay: 0.5s; color:#007bff;" >Mi</a></li>
  <li>  <a class="animate__animated animate__rotateInDownLeft fade-out " style="animation-delay: 1s; color:#007bff;"  >Portfolio,</a></li>
  <li>    <a class="animate__animated animate__rotateInDownLeft fade-out" style="animation-delay: 1.5s; color:#007bff;" >Bienvenido</a></li>
</ul>



   <section class="hero-section">
    <div class="card-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="card" 
        @click="openModal(project.youtubeId)"
      >
        <div 
          class="card__background" 
          :style="{ 
            backgroundImage: `url(https://img.youtube.com/vi/${extractYouTubeId(project.youtubeId)}/maxresdefault.jpg)` 
          }"
        ></div>
        <div class="card__content">
          
          <div class="tags">
            
          </div>
          <div class="play-icon"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal para YouTube -->
  <div v-if="showModal" class="youtube-modal" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">×</button>
      <div id="player"></div> <!-- Contenedor para el reproductor -->
    </div>
  </div>

  <div class="introduccion-container">
    <SobreMi />
  </div>
  


</template>





<script>
import SobreMi from './SobreMi.vue';
import Botones from './botones.vue';
import { usePlayer  } from '@vue-youtube/core'


export default {
  data() {
    return {
      showModal: false,
      currentVideoId: null,
      projects: [
        {
          title: "Django",
          description: "Descripción breve del proyecto.",
          tags: ["Vue", "Firebase"],
          youtubeId: "https://youtu.be/faZRumIpTHI",
          
        },
        {
          title: "LaravelVue",
          description: "Descripción breve del proyecto.",
          tags: ["Vue", "Firebase"],
          youtubeId: "https://www.youtube.com/watch?v=9be4WPRtAxk"
        },
        {
          title: "Django",
          description: "Descripción breve del proyecto.",
          tags: ["Vue", "Firebase"],
          youtubeId: "https://youtu.be/-73VSNBKe88"
        },
        {
          title: "DjangoReact",
          description: "Descripción breve del proyecto.",
          tags: ["Vue", "Firebase"],
          youtubeId: "https://www.youtube.com/watch?v=PJMv7MArwKw"
        },
        // otros proyectos
      ]
    };
  },
  components: {
    SobreMi,
  },
   methods: {
    // Extrae el ID de YouTube desde una URL
    extractYouTubeId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    },
    mounted() {
  if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = () => this.loadYouTubePlayer();
    document.body.appendChild(script);
  } else {
    this.loadYouTubePlayer();
  }
  this.$nextTick(() => {
    const player = usePlayer('player');
    player.value?.setPlaybackQuality('hd1080');
  });
},
    openModal(videoId) {
      this.currentVideoId = videoId;
      this.showModal = true;
      this.$nextTick(() => {
        this.loadYouTubePlayer();
      });
    },
    closeModal() {
      this.showModal = false;
    },
    loadYouTubePlayer() {
  if (!this.currentVideoId) return; // Verifica que haya un ID de video.

  const player = new YT.Player('player', {
    videoId: this.extractYouTubeId(this.currentVideoId),
    events: {
      'onReady': this.onPlayerReady,
      'onStateChange': this.onPlayerStateChange
    }
  });
},
  onPlayerReady(event) {
    event.target.playVideo();
  },
  onPlayerStateChange(event) {
    // manejar el estado del reproductor
  }

  }
};
</script>

<style scoped>





:root{
  --background-dark: #edeff3;
  --text-light: rgba(255,255,255,0.6);
  --text-lighter: rgba(255,255,255,0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 100vh;
}

*{
  
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
  
}





.hero-section {
  align-items: center;  /* Centra verticalmente */
  justify-content: center;  /* Centra horizontalmente */
  display: flex;
  flex-direction: column;  /* Centra los elementos en una sola columna */
  min-height: 100vh;  /* Usa un 70% de la altura total del viewport */
  background-image: linear-gradient(15deg,#f4f8fa 0%, #7b8c94 50%, #0f2c30 100%);
  width: 100vw;
  padding: var(--spacing-xxl) var(--spacing-l);
}



.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100vw;
} 

@media (max-width: 600px) {
  .card {
    height: 180px;
  }
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(4, 1fr); 
  }
}

 .card{
  list-style: none;
  position: relative;
} 

.card {
  position: relative;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

/* animacion cartas */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  opacity: 0;  
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2s;  
  filter: 200ms linear,
  
} 



.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content{
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category{
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}
/* estilos menu izquierda */

.menu{

    gap: 50px;
    margin: 0;
    display: flex;
    flex-direction: column;
    /* Works well with 100% width  */
     top: 27%; /* Centrado verticalmente */
    left: -11%; /* Centrado horizontalmente */
    width: 32.05em;
    font-size: 1.5em;
    padding: 0 2.85em;
    position: absolute;
    background-color: var(--bgColorMenu);


  stroke: #000; /* Establece un color base para las líneas del ícono */
  stroke-width: 2px; /* Ancho de las líneas de los íconos */
  fill: none; /* Asegúrate de que las áreas internas no tengan color de relleno */
  transition: stroke 0.3s ease; /* Transición suave para el cambio de color de las líneas */
    
}

.menu__item{
    
    all: unset;
    flex-grow: 1;
    z-index: 100;
    display: flex;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    align-items: center;
    will-change: transform;
    justify-content: center;
    padding: 0.55em 0 0.85em;
    transition: transform var(--timeOut , var(--duration));
     animation: fadeIn 2s forwards;
     
}

/* Efecto hover */
.menu__item:hover {
   stroke: #050302;
}



/* Animación de fade-in */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Personalizar el delay para cada ítem */
.menu__item:nth-child(1) {
  animation-delay: 2.4s; /* Retraso de 0.3 segundos */
}

.menu__item:nth-child(2) {
  animation-delay: 2.6s; /* Retraso de 0.6 segundos */
}

.menu__item:nth-child(3) {
  animation-delay:2.8s; /* Retraso de 0.9 segundos */
}

.menu__item:nth-child(4) {
  animation-delay: 3s; /* Retraso de 1.2 segundos */
}



.menu__item::before{
    
    content: "";
    z-index: -1;
    width: 4.2em;
    height: 4.2em;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    transition: background-color var(--duration), transform var(--duration);
    
}


.menu__item.active {

    transform: translate3d(0, -.8em , 0);

}

.menu__item.active::before{
    
    transform: scale(1);
    background-color: var(--bgColorItem);

}

.icon{
    
    width: 2.6em;
    height: 2.6em;
    stroke: white;
    fill: transparent;
    stroke-width: 1pt;
    stroke-miterlimit: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 400;
    
}

.menu__item.active .icon {

    animation: strok 1.5s reverse;
    
}

@keyframes strok {

    100% {

        stroke-dashoffset: 400;

    }

}

.menu__border{

    left: 0;
    bottom: 99%;
    width: 10.9em;
    height: 2.4em;
    position: absolute;
    clip-path: url(#menu);
    will-change: transform;
    background-color: var(--bgColorMenu);
    transition: transform var(--timeOut , var(--duration));
    
}

/* lineas para el texto incial presentacion */


ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
   justify-content: space-evenly;
}

ul li {
  list-style: none;
  
}

ul li a {
  position: relative;
  text-transform: uppercase;
  padding: 10px 20px;
  text-decoration: none;
  color: #360606;
  font-weight: bold;
  transition: color 0.3s ease;
}

ul li a:hover {
  color: #520a05;
}


.fade-out {
  animation: fadeOutAndHide 1s ease forwards; /* Animation duration and fill mode */
}

@keyframes fadeOutAndHide {
  0% {
    opacity: 1;
    visibility: visible; /* Start visible */
  }
  100% {
    opacity: 0;
    visibility: hidden; /* End invisible */
  }
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.card:hover .play-icon {
  opacity: 1;
  color: red; /* YouTube red */
}

/* Estilos para el modal */
.youtube-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 800px;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

/* Asegúrate de que las cards sean clickeables */
.card {
  cursor: pointer;
}


</style>
