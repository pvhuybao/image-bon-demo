<template>
  <div>
    MainMenu
    <br/><br/>
    <button @click="openDialog"> Open dialog </button>
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
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/200/209200/209200_431987_default_20210705093720_m7aUYmLM_l.jpg",
        },
        {
          id: '222',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/200/209200/209200_431987_front_20210705093721_FdDORuJR_l.jpg",
        },
        {
          id: '333',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/200/209200/209200_431987_back_20210705093722_8oOIJahu_l.jpg",
        },
        {
          id: '444',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/200/209200/209200_431987_right_20210705093722_4Tar5SOC_l.jpg",
        },
        {
          id: '555',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/200/209200/209200_431987_left_20210705093723_aq4MDQJs_l.jpg",
        },
        {
          id: '666',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/195/209195/209195_432722_default_20210705091240_PAH0PDft_l.jpg",
        },
        {
          id: '777',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/195/209195/209195_432722_front_20210705091242_aAHIJF1h_l.jpg",
        },
        {
          id: '888',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/195/209195/209195_432722_back_20210705091243_4sETFFPu_l.jpg",
        },
        {
          id: '999',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/195/209195/209195_432722_right_20210705091244_qCAfWAAj_l.jpg",
        },
        {
          id: '121212',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/195/209195/209195_432722_left_20210705091245_S73HiGmA_l.jpg",
        },
        {
          id: '131313',
          src: "https://s3.ap-southeast-1.amazonaws.com/okxe.2019/products/193/209193/209193_1613_default_20210705090715_PvvFe5QE_l.jpg",
        },
        {
          id: '141414',
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        }
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
