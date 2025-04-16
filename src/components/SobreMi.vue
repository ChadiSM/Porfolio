<template>
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

</head>

  <div class="container">
    <!-- Parte Izquierda: Habilidades con flechas -->
    <div class="skills-container">
  <div class="skill-item" v-for="(skill, index) in skills" :key="index">
  
    <img
      :src="skill.icon"
      :alt="skill.name"
      class="skill-icon"
    />
  
  </div>
</div>

 
    <!-- Parte Derecha: Cuadro LED con texto -->
    <div class="about-container ">
      <div class="dynamic-border">
        <div class="about-content">
          
          <p>
            En mi camino nunca creí que acabaría en el mundo de la programación, un grado superior y algunos años 
            después te quiero enseñar lo que he conseguido hasta ahora y lo que iré consiguiendo.
          </p>
          <p>Me resulta bastante reconfortante todo el proceso desde el nacimiento de una idea hasta el mantenimiento
            y mejora de la misma. 
            </p>
            <p>
              El frontend me daba bastante miedo porque el diseño creí que no era para mí
            un grado superior y unos años después te quiero enseñar mis avances.
            </p>
          <p>
            Ahora bien, la parte del backend del no entender por qué pasa lo que pasa en un crud, un login, una conexión de la 
            base de datos también creí que no era para mí. 
          </p>
           
          <p>Me gustan las cosas que no están hechas para mi porque me suelen 
            entretener, en la programación encontré un nuevo hobbie, un hobbie al que espero dedicarme </p>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>

import jsIcon from "../assets/icons/javascript.svg";
import AnIcon from "../assets/icons/angular.svg";
import VuIcon from "../assets/icons/vue.svg";
import PyIcon from "../assets/icons/python.svg";
import LaIcon from "../assets/icons/laravel.png";
import DjIcon from "../assets/icons/django.svg";
import GitIcon from "../assets/icons/github.svg";
import PhIcon from "../assets/icons/php.png";


export default {
  data() {
    return {
      // Lista de habilidades
      skills: [
        { name: "Php", icon: PhIcon },
        { name: "Angular", icon: AnIcon },
        { name: "Laravel", icon: LaIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Vue.js", icon: VuIcon },
        { name: "Python", icon: PyIcon },
        { name: "Django", icon: DjIcon },
        { name: "Git", icon: GitIcon },
      ],
    };
  },
  mounted() {
    // Intersection Observer logic
    const icons = document.querySelectorAll(".skill-icon");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll");
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    icons.forEach((icon) => {
      observer.observe(icon); // Start observing each icon
    });
  },
};


  
</script>


<style scoped>
/* delay iconos */
.animate-on-scroll {
  animation: shakeX 1.5s ease-in-out; /* Example animation */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}



/* Contenedor Principal */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 40px;
  background-image: linear-gradient(-15deg, #0f2c30 0%, #7b8c94 50%, #f4f8fa 100%);
  position: relative; /* Mantiene flexibilidad en diseño */
  
}

/* Parte Izquierda: Contenedor de Habilidades */
.skills-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 80px; /* Espacio entre las flechas */
  width: 40%; /* Adjust width as needed */
  margin: -50px; 
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 100px; /* Espacio entre la flecha y el texto */
  margin:  auto; /* Centers horizontally */
}

.skill-arrow {
  width: 80px;
  height: 70px;
}

.skill-text {
  font-size: 1.9rem;
  font-weight: bold;
  color: #280d9e;
}


/* Animación de Rebote */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Parte Derecha: Cuadro LED */
.about-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 400px;
  
  
}

.dynamic-border {
  position: relative;
  width: 100%;
  max-width: 985px;
  height:  auto;
  padding: 40px;
  border-radius: 15px;
  box-sizing: border-box;
}

.dynamic-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 45px;

  /* Sombra más suave y expandida */
  box-shadow: 0 0 100px rgba(19, 32, 105, 0.2); 

  /* Colores más suaves (puedes ajustar los hex para que se noten menos) */
  background: linear-gradient(90deg, #bfcfcf, #0c243b, #0d0ab4); 
  background-size: 200% 100%;
  animation: move-border 3s linear infinite;
  z-index: 1;
  opacity: 0.3; /* añade opacidad general para suavizarlo aún más */
}

.about-content {
  position: relative;
  z-index: 2;
  background-color: linear-gradient(90deg, #9caaaa, #405d7c, #051618);
  padding: 40px;
  /* color: rgb(50, 8, 109); */
  color: #f1f1f1; /* gris muy claro que resalta en fondos oscuros y medios */
  font-family: 'Poppins', sans-serif;
  
  border-radius: 10px;
}

/* Animación del LED */
@keyframes move-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Media Queries para Responsividad */
@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
    height: auto;
    padding: 20px;
  }

  .skills-container {
    flex: 1;
    align-items: center;
    gap: 40px;
  }

  .skill-item {
    gap: 50px;
  }

  .skill-arrow {
    width: 60px;
    height: 50px;
  }

  .skill-text {
    font-size: 1.5rem;
  }

  .center-arrow {
    position: relative;
    left: 50%;
    top: auto;
    transform: translate(-50%, 0);
    margin: 20px 0;
  }

  .center-arrow img {
    width: 100px;
    height: 100px;
  }

  .about-container {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }

  .dynamic-border {
    width: 90%;
    max-width: 450px;
    padding: 20px;
  }

  .about-content {
    padding: 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .skills-container {
    gap: 20px;
  }

  .skill-arrow {
    width: 50px;
    height: 40px;
  }

  .skill-text {
    font-size: 1.2rem;
  }

  .center-arrow img {
    width: 80px;
    height: 80px;
  }

  .dynamic-border {
    width: 100%;
    max-width: 350px;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .skills-container {
    align-items: center;
    gap: 10px;
  }

  .skill-arrow {
    width: 40px;
    height: 30px;
  }

  .skill-text {
    font-size: 1rem;
  }

  .center-arrow img {
    width: 60px;
    height: 60px;
  }

  .dynamic-border {
    padding: 10px;
  }

  .about-content {
    font-size: 0.8rem;
  }
}
</style>

