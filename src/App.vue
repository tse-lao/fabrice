<template>
<div class="main">
  <div class="navigation">
    <Menu />
  </div>
  <div class="content">
       <router-view />
  </div>

</div>
 
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,

  }
}
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.1em;
  font-size: 12px;
}
.background-image{
    position: fixed;
    left: 0px;
    opacity: 0.3;
    top: 0;
    
    z-index: -10000;
}
 .background-image   img{
        height: 20vw;
        border-radius: 0px 0px 3000px 300px;
    }

.logo-header{
  max-height: 64px;
  margin-bottom: 24px;
  padding: 32px;
}
.main{
  display: flex;
  flex-direction: column;
}
.content{
  flex: 3;
}
</style>
