<template>
  <div>
    <v-layout row justify-center>
      <v-dialog
        v-model="isOpenDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <div class="image-box-dialog">
            <div class="close-btn" @click="closeDialog">
              <img
                src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png"
                alt=""
              />
            </div>

            <v-carousel
              hide-delimiters
              prev-icon="<"
              next-icon=">"
              height="70vh"
              v-bind:cycle="false"
              v-model="indexChild"
              :touchless="isZoom"
              @setCurrentImage="setCurrentImage(indexImage)"
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
                  v-bind:class="{ 'image-item-selected': index === indexChild }"
                  @click="setCurrentImage(index)"
                >
									<img v-bind:src="item.src" alt="">
								</div>
								<!-- <div class="image-item" v-for="(item) in listImages" :key="item.id">
									<img v-bind:src="item.src" alt="">
								</div> -->
              </div>
            </div>

						<!-- <image-zoom 
								regular="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png" 
								zoom="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png" 
								:zoom-amount="3" 
								img-class="img-fluid"
								alt="Sky">				
						</image-zoom> -->
          </div>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
// import imageZoom from 'vue-image-zoomer';
import InnerImageZoom from 'vue-inner-image-zoom';

export default {
  name: "ImageBoxComponent",
  components: {
		// imageZoom: imageZoom,
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
      isZoom: false
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

    testZoomout() {
      console.log('testZoomout');
    }
  },

  watch: {
    indexImage() {
      this.$emit('setCurrentImage', this.indexImage);
    }
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
}

.close-btn img {
  width: 100%;
  height: 100%;
}

.zoom-image {
  height: 70vh !important;
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
  width: 100%;
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

/* Custom scroll bar */
/* width */
::-webkit-scrollbar {
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
