<template>
<div>
  <NavBar />
  <div id="app">
    <Nuxt />
  </div>
</div>
</template>
<style scoped>
#app {
  margin-top: 100px;
}

@font-face {
  font-family: "Futura Heavy";
  src: local("Futura Heavy"),
    url(../assets/fonts/Futura_heavy.ttf) format("truetype");
}

@font-face {
  font-family: "Futura Light";
  src: local("Futura Light"),
    url(../assets/fonts/futura_light.ttf) format("truetype");
}

@font-face {
  font-family: "Sabon";
  src: local("Sabon"),
    url(../assets/fonts/Sabon.ttf) format("truetype");
}

@font-face {
  font-family: "Super Retro M54";
  src: local("Super Retro M54"),
    url(../assets/fonts/Super_Retro.ttf) format("truetype");
}
</style>
