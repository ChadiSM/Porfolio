<template>
    <section>
  <blockquote class="speech bubble"> <em>Hola, soy Chadi. Bienvenido a mi portfolio?</em></blockquote>
</section>

</template>

<style scoped>

section { 
  min-height: 100vh; 
  display: flex;
  justify-content: center;
  align-content: center;
}
section { 
  padding: 3rem; 
}

blockquote.bubble { 
	background-position: center;
  background-repeat: no-repeat !important;
	background-size: 100% 100%;
  margin: 0 auto;
	text-align: center;
	height: 0;
	box-sizing: content-box;
	line-height: 1;
}
blockquote.speech {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/speech-bubble.svg); 
  width: 55%;
  padding-top: 16%;
	padding-bottom: 40%;
}

</style>