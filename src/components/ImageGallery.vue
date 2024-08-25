<template>
  <div class="modal-overlay" @click="closeGallery"></div>
  <div class="modal">
    <header class="modal-header">
      <h2>GALLERY IN MODAL</h2>
      <button class="close-btn" @click="closeGallery">✕</button>
    </header>
    <div class="modal-subheader">
      <img
        src="https://picsum.photos/favicon.ico"
        alt="Site Logo"
        class="site-logo"
      />
      <span>picsum.photos</span>
    </div>
    <div class="carousel">
      <img
        v-if="images.length > 0"
        :src="images[currentIndex].download_url"
        :alt="images[currentIndex].author"
        :width="images[currentIndex].width"
        :height="images[currentIndex].height"
      />
      <div class="controls">
        <button class="primary arrow" @click="prevImage">❮</button>
        <button class="primary arrow" @click="nextImage">❯</button>
      </div>
      <div class="author-info">
        <span>Autor: {{ images[currentIndex].author }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ImageModel } from "@/services/imageService";

export default defineComponent({
  name: "ImageGallery",
  props: {
    images: {
      type: Array as () => ImageModel[],
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const currentIndex = ref(0);

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };

    const prevImage = () => {
      currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length;
    };

    const closeGallery = () => {
      emit("close");
    };

    return {
      currentIndex,
      nextImage,
      prevImage,
      closeGallery,
    };
  },
});
</script>

<style scoped lang="scss">
$modal-width: 500px;
$border-radius: 10px;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  z-index: 999;
}

.modal {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: $modal-width;
  width: 100%;
  overflow: hidden;

  &-header {
    @include flex-center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: var(--main-color);
    color: var(--background-color);

    .close-btn {
      @include flex-center;
      border-radius: 50%;
      cursor: pointer;
      width: 30px;
      height: 30px;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  &-subheader {
    @include flex-center;
    justify-content: flex-start;
    padding: 0 20px 10px;
    background-color: var(--main-color);

    .site-logo {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      fill: var(--background-color);
    }

    span {
      color: var(--background-color);
    }
  }
}

.carousel {
  position: relative;
  text-align: center;

  img {
    height: 400px;
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    object-position: center;
  }

  .controls {
    position: absolute;
    top: calc(50% - 25px);
    left: 20px;
    right: 20px;
    @include flex-center;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .arrow {
    border: none;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .author-info {
    @include flex-center;
    justify-content: flex-start;
    background-color: var(--panel-background-color);
    padding: 10px 15px 15px;

    span {
      color: var(--focus-color);
      border: 1px solid var(--focus-color);
      text-align: start;
      padding: 10px;
    }
  }
}
</style>
