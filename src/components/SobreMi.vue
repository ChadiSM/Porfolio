<template>
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
              El frontend me daba bastante miedo porque el diseño creí que no era para mí.
            </p>
            <p>Un grado superior y unos años después te quiero enseñar mis avances.</p>
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
  animation: shakeX 1.5s ease-in-out;
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
  align-items: flex-start;
  flex-wrap: wrap;
  
  height: 100vh;
  width: 100vw;
  
  padding: 0 0px;
  margin: 0;
  background-image: linear-gradient(-15deg, #0f2c30 0%, #7b8c94 50%, #f4f8fa 100%);
  position: relative;
  
}

/* Parte Izquierda: Contenedor de Habilidades */
.skills-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  width: 35rem;
 /*  margin: -90px; */
  height: 45.6rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 100px;
  margin: auto;
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

/* Parte Derecha: Cuadro LED */
.about-container {
  display: flex;
  
  align-items: center;
  width: 55%;
  margin: 0; /* Eliminamos el margin de 400px */
}

.dynamic-border {
  position: relative;
  width: 100%;
  max-width: 985px;
  height: auto;
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
  box-shadow: 0 0 100px rgba(19, 32, 105, 0.2);
  background: linear-gradient(90deg, #bfcfcf, #0c243b, #0d0ab4);
  background-size: 200% 100%;
  animation: move-border 3s linear infinite;
  z-index: -1;
}

/* Contenido dentro del LED */
.about-content {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  .skills-container {
    width: 100%;
    align-items: center;
    margin: 0;
    gap: 40px;
  }

  .skill-item {
    gap: 40px;
  }

  .about-container {
    margin: 40px 0;
    justify-content: center;
  }

  .dynamic-border {
    padding: 20px;
  }

  .about-content {
    font-size: 1rem;
  }

  .skill-text {
    font-size: 1.4rem;
  }
}
/* RESPONSIVE: solo apilamos en móviles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .skills-container {
    width: 100%;
    align-items: center;
    gap: 30px;
  }

  .about-container {
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }

  .skill-item {
    gap: 30px;
  }

  .skill-text {
    font-size: 1.4rem;
  }

  .about-content {
    font-size: 1rem;
  }
}
</style>
