<template>
  <article>
    <h1>This is main page title.</h1>
    <p>{{ introductionText }}{{ expanded ? fullDescriptionText : "..." }}</p>

    <nav class="buttons">
      <button @click="toggleReadMore">
        {{ expanded ? "LESS" : "MORE" }}
      </button>
      <button @click="emitShowGallery" class="primary">Show gallery</button>
    </nav>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MAIN_PAGE_TEXT } from "@/utils/constants/mainPageText";

export default defineComponent({
  name: "Article",
  emits: ["showGallery"],
  setup(_, { emit }) {
    const expanded = ref(false);

    const introductionText = MAIN_PAGE_TEXT.INTRODUCTION;
    const fullDescriptionText = MAIN_PAGE_TEXT.FULL_DESCRIPTION;

    const toggleReadMore = () => {
      expanded.value = !expanded.value;
    };

    const emitShowGallery = () => {
      emit("showGallery");
    };

    return {
      expanded,
      introductionText,
      fullDescriptionText,
      toggleReadMore,
      emitShowGallery,
    };
  },
});
</script>

<style scoped lang="scss">
article {
  padding: 25px 50px;

  .buttons {
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 15px;

    button {
      min-width: 120px;
    }
  }
}
</style>
