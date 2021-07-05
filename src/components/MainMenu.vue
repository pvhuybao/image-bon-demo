<template>
  <div>
    MainMenu
    <br/><br/>
    <button @click="openDialog"> Open dialog outside </button>
    <ImageBoxComponent 
      @setCurrentImage="setCurrentImage"
      :indexImage="indexImage" 
      :listImages="listImages" 
      :isOpenDialog="isOpenDialog" 
      @closeDialog="closeDialog" 
    />
  </div>
</template>

<script>
import ImageBoxComponent from './ImageBoxComponent';

export default {
  name: 'MainMenu',
  components: {
    ImageBoxComponent
  },

  data() {
    return {
      isOpenDialog: false,
      indexImage: 3,
      listImages: [
        {
          id: '111',
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          id: '222',
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          id: '333',
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          id: '444',
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          id: '555',
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          id: '666',
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          id: '777',
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          id: '888',
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          id: '999',
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          id: '121212',
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          id: '131313',
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
      ],
    }
  },

  methods: {
    openDialog() {
      this.isOpenDialog = true;
    },

    closeDialog(value) {
      this.isOpenDialog = value;
    },

    setCurrentImage(value) {
      this.indexImage = value;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
