<template>
  <div>
    <v-layout row justify-center>
      <v-dialog
        v-model="isOpenDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        :persistent="true"
      >
        <v-card>
          <div class="image-box-dialog" v-touch:swipe.bottom="closeDialog">
            <div class="close-btn" @click="closeDialog">
              <img
                src="../assets/close-btn.png"
                alt=""
              />
            </div>

            <v-carousel
              hide-delimiters
              prev-icon="prev-btn-icon"
              next-icon="next-btn-icon"
              height="70vh"
              v-bind:cycle="false"
              v-model="indexChild"
              @setCurrentImage="setCurrentImage(indexImage)"
              v-touch:swipe.left="swipeLeft"
              v-touch:swipe.right="swipeRight"
            >
              <v-carousel-item
                v-for="(item) in listImages"
                :key="item.id"
              >
							<!-- <img :src="item.src" /> -->
							<!-- <image-zoom
                :regular="item.src" 
                :click-zoom="true"
                img-class="zoom-image"
              >				
							</image-zoom> -->
              <InnerImageZoom
                :src="item.src"
                className="zoom-image"
                moveType="drag"
                :zoomScale="2"
                :hideHint="true"
                :afterZoomOut="() => isZoom = false"
                :afterZoomIn="() => isZoom = true"
              />
							</v-carousel-item>
            </v-carousel>

            <div class="total-image-field">
              <div class="total-image"><span>{{indexChild + 1}}</span> / <span>{{ listImages.length }}</span></div>
            </div>

            <div class="others-image-container">
              <div class="others-image">
								<div class="image-item" v-for="(item, index) in listImages" 
                  :key="item.id" 
                  @click="setCurrentImage(index)"
                >
									<img 
                    v-bind:src="item.src" 
                    v-bind:class="{ 'image-item-selected': index === indexChild }"
                    alt=""
                  >
								</div>
								<!-- <div class="image-item" v-for="(item) in listImages" :key="item.id">
									<img v-bind:src="item.src" alt="">
								</div> -->
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import InnerImageZoom from 'vue-inner-image-zoom';

export default {
  name: "ImageBoxComponent",
  components: {
    InnerImageZoom
	},

  props: {
    isOpenDialog: Boolean,
    listImages: Array,
    indexImage: Number
  },

  data() {
    return {
      indexChild: this.indexImage,
      isZoom: false,

      options: {
        index: this.indexImage,
        closeOnScroll: false,
        pinchToClose: false,
      },
    };
  },

  methods: {
    closeDialog() {
      this.$emit('closeDialog', false);
    },

    setCurrentImage(index) {
      this.$emit('setCurrentImage', index);
      this.indexChild = index;
    },

    swipeLeft() {
      this.indexChild = (this.indexChild + 1) > (this.listImages.length - 1) ? 0: (this.indexChild + 1);
    },

    swipeRight() {
      this.indexChild = (this.indexChild - 1) < 0 ? (this.listImages.length - 1): (this.indexChild - 1);
    }
  },

  watch: {
    indexChild() {
      this.$emit('setCurrentImage', this.indexChild);

      this.$nextTick(() => {
        var el = this.$el.getElementsByClassName("image-item-selected")[0];
        el.scrollIntoView();
      });
    },

    // isZoom(newVal) {
    //   console.log('newVal', newVal);
    //   if(newVal) {
    //     this.$nextTick(() => {
    //       var el = this.$el.getElementsByClassName("iiz__zoom-img")[0];
    //       el.addEventListener()
    //     })
    //   }
    // }
  }
};
</script>

<style>
.image-box-dialog {
  height: 100vh;
  width: 100%;
  background-color: black;
  padding: 32px 16px;
}

.close-btn {
  width: 28px;
  height: 28px;
	margin-bottom: 24px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
}

.close-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.prev-btn-icon {
  width: 40px;
  height: 40px;
  background-position: 47% center;
  background-color: rgba(25, 25, 25, 0.5);
  background-image: url("../assets/prev-icon.png");
  border-radius: 50%;
}

.next-btn-icon {
  width: 40px;
  height: 40px;
  background-position: 53% center;
  background-color: rgba(25, 25, 25, 0.5);
  background-image: url("../assets/next-icon.png");
  border-radius: 50%;
}

.zoom-image img.iiz__img {
  height: 70vh !important;
  width: 100vh;
  object-fit: contain;
}

.total-image-field {
  text-align: center;
}

.total-image {
  margin: 10px auto;
  width: fit-content;
  background-color: #222222;
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 2px 13px;

  border-top-left-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
}

.others-image-container {
  /* padding: 0px 20px; */
  text-align: center;
}
.others-image-container .others-image {
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 12px;
}
.others-image-container .image-item {
  width: 56px;
  height: 56px;
  margin-right: 8px;
  /* display: inline-block; */
  display: inline-grid;
  align-items: center;
  vertical-align: middle;
  overflow-y: hidden;
  border-radius: 5px;
}

.others-image-container .image-item img {
  /* width: 100%; */
  width: 56px;
  height: 56px;
  object-fit: cover;
  /* height: 100%; */
	/* border-radius: 5px; */
}

.v-window-item {
	text-align: center;
}

.image-item-selected {
	border: 2px solid #00BCC3;
  border-radius: 5px;
}
</style>

<style scoped>
/* Custom scroll bar */
/* width */
::-webkit-scrollbar {
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222222;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4E4E4E;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>