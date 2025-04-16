<template>

    <div class="container">
  <div class="radio-btn-group">
    <input type="radio" name="stagger-radio-group" value="1" id="input-one" />
    <label for="input-one">
      <span>Habilidades</span>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g class="pink">
          <rect x="-101%" y="0" width="100%" height="5" />
          <rect x="-101%" y="5" width="100%" height="5" />
          <rect x="-101%" y="10" width="100%" height="5" />
          <rect x="-101%" y="15" width="100%" height="5" />
          <rect x="-101%" y="20" width="100%" height="5" />
          <rect x="-101%" y="25" width="100%" height="5" />
          <rect x="-101%" y="30" width="100%" height="5" />
          <rect x="-101%" y="35" width="100%" height="5" />
          <rect x="-101%" y="40" width="100%" height="5" />
          <rect x="-101%" y="45" width="100%" height="5" />
        </g>

        <g class="blue">
          <rect x="101%" y="0" width="100%" height="5" />
          <rect x="101%" y="5" width="100%" height="5" />
          <rect x="101%" y="10" width="100%" height="5" />
          <rect x="101%" y="15" width="100%" height="5" />
          <rect x="101%" y="20" width="100%" height="5" />
          <rect x="101%" y="25" width="100%" height="5" />
          <rect x="101%" y="30" width="100%" height="5" />
          <rect x="101%" y="35" width="100%" height="5" />
          <rect x="101%" y="40" width="100%" height="5" />
          <rect x="101%" y="45" width="100%" height="5" />
        </g>
      </svg>
    </label>
  </div>

  <div class="radio-btn-group">
    <input type="radio" name="stagger-radio-group" value="2" id="input-two" />
    <label for="input-two">
      <span>Pasado</span>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g class="pink">
          <rect x="-101%" y="0" width="100%" height="5" />
          <rect x="-101%" y="5" width="100%" height="5" />
          <rect x="-101%" y="10" width="100%" height="5" />
          <rect x="-101%" y="15" width="100%" height="5" />
          <rect x="-101%" y="20" width="100%" height="5" />
          <rect x="-101%" y="25" width="100%" height="5" />
          <rect x="-101%" y="30" width="100%" height="5" />
          <rect x="-101%" y="35" width="100%" height="5" />
          <rect x="-101%" y="40" width="100%" height="5" />
          <rect x="-101%" y="45" width="100%" height="5" />
        </g>

        <g class="blue">
          <rect x="101%" y="0" width="100%" height="5" />
          <rect x="101%" y="5" width="100%" height="5" />
          <rect x="101%" y="10" width="100%" height="5" />
          <rect x="101%" y="15" width="100%" height="5" />
          <rect x="101%" y="20" width="100%" height="5" />
          <rect x="101%" y="25" width="100%" height="5" />
          <rect x="101%" y="30" width="100%" height="5" />
          <rect x="101%" y="35" width="100%" height="5" />
          <rect x="101%" y="40" width="100%" height="5" />
          <rect x="101%" y="45" width="100%" height="5" />
        </g>
      </svg>
    </label>
  </div>

  <div class="radio-btn-group">
    <input type="radio" name="stagger-radio-group" value="3" id="input-three" />
    <label for="input-three">
      <span>Futuro</span>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g class="pink">
          <rect x="-101%" y="0" width="100%" height="5" />
          <rect x="-101%" y="5" width="100%" height="5" />
          <rect x="-101%" y="10" width="100%" height="5" />
          <rect x="-101%" y="15" width="100%" height="5" />
          <rect x="-101%" y="20" width="100%" height="5" />
          <rect x="-101%" y="25" width="100%" height="5" />
          <rect x="-101%" y="30" width="100%" height="5" />
          <rect x="-101%" y="35" width="100%" height="5" />
          <rect x="-101%" y="40" width="100%" height="5" />
          <rect x="-101%" y="45" width="100%" height="5" />
        </g>

        <g class="blue">
          <rect x="101%" y="0" width="100%" height="5" />
          <rect x="101%" y="5" width="100%" height="5" />
          <rect x="101%" y="10" width="100%" height="5" />
          <rect x="101%" y="15" width="100%" height="5" />
          <rect x="101%" y="20" width="100%" height="5" />
          <rect x="101%" y="25" width="100%" height="5" />
          <rect x="101%" y="30" width="100%" height="5" />
          <rect x="101%" y="35" width="100%" height="5" />
          <rect x="101%" y="40" width="100%" height="5" />
          <rect x="101%" y="45" width="100%" height="5" />
        </g>
      </svg>
    </label>
  </div>
</div>
</template>

<script>
import { gsap } from "gsap"; // Si estás usando gsap como un módulo npm

export default {
  name: "Botones",
  mounted() {
    // Ejecuta el código cuando el componente esté completamente montado en el DOM
    const radioBtnGroups = this.$el.querySelectorAll(".radio-btn-group");
    new RadioButtonEffect(radioBtnGroups);
  },
};

// Clase personalizada
class RadioButtonEffect {
  constructor(radioBtnGroups) {
    this.previousRadioBtn = null;

    radioBtnGroups.forEach((group) => {
      const radioBtn = group.querySelector("input[type='radio']");

      radioBtn.addEventListener("change", () => {
        const nodes = this.getNodes(radioBtn);

        if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
          this.changeEffect(this.getNodes(this.previousRadioBtn), false);
        }

        this.changeEffect(nodes, true);
        this.previousRadioBtn = radioBtn;
      });
    });
  }

  getNodes(radioBtn) {
    const container = radioBtn.closest(".radio-btn-group");
    return [
      this.shuffleNodes(container.querySelectorAll(".blue rect")),
      this.shuffleNodes(container.querySelectorAll(".pink rect")),
    ];
  }

  shuffleNodes(nodeList) {
    return Array.from(nodeList).sort(() => Math.random() - 0.5);
  }

  changeEffect(nodes, isChecked) {
    gsap.to(nodes[0], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "-100" : "100",
      stagger: 0.012,
      overwrite: true,
    });

    gsap.to(nodes[1], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "100" : "-100",
      stagger: 0.012,
      overwrite: true,
    });
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,500&display=swap");

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  
}

body {
  background-image: linear-gradient(15deg, #f4f8fa 0%, #0f2c30 150%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.radio-btn-group {
  margin: 15px; /* Espaciado entre los botones */
  position: relative;
  width: 120px; /* Aumentar el ancho del botón */
  height: 60px; /* Aumentar la altura del botón */
}

input[type="radio"] {
  opacity: 0;
  position: absolute;
}

input[type="radio"]:checked + label::before {
  box-shadow: 0 0 25px 2px #0763f7;
}

input[type="radio"]:checked + label span {
  color: #c40a35;
}

input[type="radio"]:focus + label::before {
  box-shadow: 0 0 25px 2px #0763f7;
}

label {
   color: rgb(5, 5, 5);
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-style: italic;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Mono", monospace;
  height: 50px;
  padding: 0 30px;
  position: relative;

}

label::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3249df;
  border-radius: 35px; /* Borde más redondeado */
  transform: skew(-15deg);
  transition: box-shadow 700ms;
}

label span {
  z-index: 1;
  position: relative;
  transition: color 350ms;
}

label svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 35px; /* Alineado con el botón */
  transform: skew(-15deg); /* Misma inclinación */
}
label svg .blue rect {
  fill: #05eafa;
  shape-rendering: crispEdges;
  mix-blend-mode: color-dodge;
}

label svg .pink rect {
  fill: #ff6bd3;
  shape-rendering: crispEdges;
}


</style>