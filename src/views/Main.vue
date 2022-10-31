<template>
<div class="main-template">
  <div class="content">
    <Gallery />
  </div>
</div>

</template>

<script>

import Gallery from '../components/Gallery.vue';

export default {
    components: {
      Gallery
    },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-template{
    display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navigation{
    flex: 1;
    max-width: 300px;
    
}
</style>
