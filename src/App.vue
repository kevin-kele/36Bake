<template>
  <div id="app">
      <Slide right>
        <router-link to="/">
            <a>
              <span>
                Accueil
              </span>
            </a>
      </router-link>
      <router-link to="/">
            <a>
              <span>
                A propos de nous
              </span>
            </a>
      </router-link>
      
    </Slide>
    <router-view/>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'accueil',
  components: {
        Slide
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("assets/bureau.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.bm-burger-bars {
    background-color: #ffffff;
}
</style>
