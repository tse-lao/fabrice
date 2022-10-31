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
   
    
    <div class="gallery">
      <GalleryElement galleryID="my-test-gallery"  :images="list" />
    </div>

        
  </main>
</template>


<script lang="js">
import GalleryElement from "../components/GalleryElement.vue";
import json from '../router/landschappen.json';


const list = [
    {
        source: 'https://fabrice.nu/images/2011_steen11_objekt_3D-117.JPG',
        thumbnail: 'https://fabrice.nu/images/2011_steen11_objekt_3D-117.JPG',
        title: "iets"
    },
     {
        source: "https://fabrice.nu/images/igallery/resized/1-100/1988_02_3D_object-91-100-100-80-c.jpg",
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
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
          width: 1875,
          height: 2500,
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
          width: 1669,
          height: 2500,
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
          width: 2500,
          height: 1666,
        },
    
]
export default {
  name: "GalleryList", 
  components:  {GalleryElement},
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

<style scoped>
.gallery{
    margin: 32px;
    display: flex;
    gap: 4rem;
  align-content: flex-start;
  align-items: flex-start;
}
.side-menu
  .category{
    
    margin: 1rem;
    
  }
   .category span{
      text-transform: uppercase;
      font-weight: 600;
    }
    
  .category  ul li{
      list-style: none;
      text-align: left;
      padding-left: 5px;
      border-left: 2px solid grey;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
  }
        ul li:hover{
        color: green;
        cursor: pointer;
        border-left: 4px solid green;
      }
</style>