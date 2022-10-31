<template>  
  <main>
      <div class="nav-bar">
        <div class="logo">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        
        <div class="menu">
            <div class="menu-item" @click="$router.push('/')"> Kunst</div>
            <div class="menu-item" @click="$router.push('/about')"> Over Fabrice</div>
            <div class="menu-item" @click="$router.push('publicaties')"> Publicaties</div>
            <div class="menu-item" @click="$router.push('/selling')"> Verkoop</div>
        </div>
      </div>
  </main>
</template>
<style scoped>
  .nav-bar{
    display: flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
   .nav-bar .logo{
      margin-left: 3rem;
      margin-top: 1rem;
   }
      .logo img{
        max-height: 48px;
      }
  
  .menu{
    display: flex;
    flex-direction: row;
    gap: 3rem;
    margin-right: 10rem;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
 .menu   .menu-item:hover{
      cursor:pointer;
      color: rgba(240,100,100,0.5);
    }

</style>

<script lang="js">
  export default{
    name: "NavBar", 
  }
</script>
