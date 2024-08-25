<template>
  <footer>
    <section class="description-section">
      <div>
        <p class="subtitles">About You!</p>
        <p class="description">
          Besides programming, I enjoy traveling, exploring new countries, and
          experiencing different cultures and their food. At home, I love
          cooking, watching good movies, and playing story-driven computer
          games.
        </p>
      </div>

      <div>
        <p class="subtitles">Dynamic Part</p>
        <p class="description">
          Here is the dynamically updating time that reflects the current
          moment:
        </p>
        <p class="description">
          <strong>{{ currentDate }} {{ currentTime }}</strong>
        </p>
      </div>

      <div>
        <p class="subtitles">Contact</p>
        <p class="description">Mateusz Lewkowicz</p>
        <p class="description">882160081</p>
        <p class="description">mlewkowicz3@gmail.com</p>
      </div>
    </section>

    <section>
      <div class="social-media-icons">
        <a href="#">
          <img :src="instagram" alt="Instagram" class="icon" />
        </a>
        <a href="#">
          <img :src="twitter" alt="Twitter" class="icon" />
        </a>
        <a href="#">
          <img :src="facebook" alt="Facebook" class="icon" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { getFormattedDate } from "@/utils/date";

export default defineComponent({
  name: "Footer",
  setup() {
    const currentDate = ref<string>("");
    const currentTime = ref<string>("");
    let intervalId: number | NodeJS.Timeout | undefined;

    const instagram = new URL("@/assets/instagram.svg", import.meta.url).href;
    const twitter = new URL("@/assets/twitter.svg", import.meta.url).href;
    const facebook = new URL("@/assets/facebook.svg", import.meta.url).href;

    const updateTime = () => {
      const now = new Date();
      const formattedDateTime = getFormattedDate(now);
      const [date, time] = formattedDateTime.split(" ");

      currentDate.value = date;
      currentTime.value = time;
    };

    onMounted(() => {
      updateTime();
      intervalId = window.setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      currentDate,
      currentTime,
      instagram,
      twitter,
      facebook,
    };
  },
});
</script>

<style scoped lang="scss">
footer {
  min-height: 30vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--background-color);
  background-color: var(--footer-background-color);
  height: auto;
  padding: 60px 80px;
  gap: 30px;

  @media (max-width: 860px) {
    padding: 40px;
  }

  .description-section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    width: 90%;

    div {
      width: 25%;
      min-width: 250px;

      .subtitles {
        margin-bottom: 20px;
        text-transform: uppercase;
      }
    }
  }

  .social-media-icons {
    display: flex;
    gap: 10px;
    a {
      img {
        height: 30px;
        fill: var(--background-color);

        &:hover {
          fill: rgb(211, 199, 199);
        }
      }
    }
  }
}
</style>
