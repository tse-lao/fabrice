<template>
    <div :id="galleryID">
      <a
        v-for="(image, key) in imagesData"
        :key="key"
        :href="image.url"
        data-pswp-width="500"
        data-pswp-height="600"
        target="_blank"
        rel="noreferrer"
      >
        <img class="thumbnail" :src="image.url" alt="" />
      </a>
    </div>
  </template>
  
  <script>
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
  
  export default {
    name: 'SimpleGallery',
    props: {
      galleryID: String,
      images: Array,
    },
    setup(props) {
      return {
        imagesData: props.images,
      };
    },
    mounted() {
      if (!this.lightbox) {
        this.lightbox = new PhotoSwipeLightbox({
          gallery: '#' + this.$props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
        });
        this.lightbox.init();
      }
    },
    unmounted() {
      if (this.lightbox) {
        this.lightbox.destroy();
        this.lightbox = null;
      }
    },
    methods: {
        randomHeight(){
            return Math.random()* 500;
        },
        randomWidth(){
            return Math.random()* 500;
        }
    },
  };
  </script>
  
  <style scoped>
  .thumbnail{
    width: 20%;
  }
  </style>