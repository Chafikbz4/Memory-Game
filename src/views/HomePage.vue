<template>
  <div class="wrapper">
    <div class="chose">
      <h1 style="color: black">Memory Game</h1>
      <button @click="getplay">Play</button>
      <button>How to Play</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
let getplay = function () {
  router.push({ name: "Play" });
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .chose {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: blue;
    width: 70%;
    height: 30%;
    button {
      width: 80%;
      height: 20%;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
