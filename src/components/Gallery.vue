<template>
  <main class="gallery">
    <div class="side-menu">
        <div class="category">
            <span>Schilderijen</span>
            <ul>
              <li>Portretten</li>
              <li>Landschappen</li>
              <li>Dieren</li>
              <li>Abstract</li>
              <li>Divers</li>
            </ul>
        </div>
        <div class="category">
            <span>Tekeningen</span>
            <ul>
              <li>Landschappen</li>
              <li>ZWARTWIT</li>
              <li>DIEREN</li>
              <li>Divers</li>
            </ul>
        </div>
    </div>
    <n-image-group>
      <n-space  >
      <div v-for="item in list" :key="item.name">
      <n-image
          width="200"
          v-bind:src="item.url"
          alt=item.name
        />
      </div>
        
      </n-space>
    </n-image-group>
  </main>
</template>


<script lang="js">
import json from '../router/landschappen.json';

const list = [
    {
        url: 'https://fabrice.nu/images/2011_steen11_objekt_3D-117.JPG',
        name: "iets"
    },
     {
        url: "https://fabrice.nu/images/igallery/resized/1-100/1988_02_3D_object-91-100-100-80-c.jpg",
        name: "anders"
    },
     {
        url: "https://fabrice.nu/images/igallery/resized/201-300/2001_035_ker_3D-262-100-100-80-c.JPG",
        name: "dan"
    },
     {
        url: "https://fabrice.nu/images/igallery/resized/201-300/2001_038_ker_3D-263-100-100-80-c.JPG",
        name: "sometdihing"
    },
    {
        url: "https://fabrice.nu/images/igallery/resized/201-300/2001_038_ker_3D-263-100-100-80-c.JPG",
        name: "sometdihing"
    },
    
]
export default {
  name: "GalleryList", 
  data: () => ({
    list: json
  }),
  methods:{
    readList(){
        console.log(list)
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery{
    margin: 32px;
    display: flex;
    gap: 4rem;
  align-content: center;
  align-items: center;
}
.side-menu{
  .category{
    
    margin: 1rem;
    span{
      text-transform: uppercase;
      font-weight: 600;
    }
    
    ul li{
      list-style: none;
      text-align: left;
      padding-left: 5px;
      border-left: 2px solid grey;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      
        &:hover{
        color: green;
        cursor: pointer;
        border-left: 4px solid green;
      }
    }
    
  }
}
</style>