<template>
  <main>
    <section class="container">
      <div>
        <img :src="sixtagon" alt="Sixtagon" />
      </div>
      <Article @showGallery="loadGallery" />
    </section>

    <ImageGallery v-if="showGallery" :images="images" @close="closeGallery" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Article from "@/components/Article.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { getImages, ImageModel } from "@/services/imageService";

export default defineComponent({
  name: "Main",
  components: {
    Article,
    ImageGallery,
  },
  setup() {
    const sixtagon = new URL("@/assets/sixtagon.svg", import.meta.url).href;
    const showGallery = ref(false);
    const images = ref<ImageModel[]>([]);

    const loadGallery = async () => {
      if (images.value.length === 0) {
        images.value = await getImages();
      }
      showGallery.value = true;
    };

    const closeGallery = () => {
      showGallery.value = false;
    };

    return {
      showGallery,
      images,
      loadGallery,
      closeGallery,
      sixtagon,
    };
  },
});
</script>

<style scoped lang="scss">
main {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--panel-background-color);
  width: 100%;
  min-height: 400px;

  @media (max-width: 860px) {
    div {
      display: none;
    }
  }

  div {
    min-height: 400px;
    width: 250px;
    min-width: 250px;
    background: #131313;
    position: relative;

    img {
      position: absolute;
      height: 250px;
      width: 250px;
      top: calc(50% - 125px);
      left: -50%;
    }
  }
}
</style>
