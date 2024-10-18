<template>
  <h2>لعبة الذاكرة</h2>
  <p>{{ time }}</p>
  <div class="content">
    <div class="play">
      <button
        v-for="(card, index) in shuffledArray"
        :key="index"
        @click="change(index)"
      >
        {{ card.isShow ? card.icon : "" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const array = ref([
  { icon: "😊", isShow: false },
  { icon: "🚀", isShow: false },
  { icon: "🌟", isShow: false },
  { icon: "🌈", isShow: false },
  { icon: "🎉", isShow: false },
  { icon: "🐱", isShow: false },
  { icon: "🍕", isShow: false },
  { icon: "🎨", isShow: false },
  { icon: "😊", isShow: false },
  { icon: "🚀", isShow: false },
  { icon: "🌟", isShow: false },
  { icon: "🌈", isShow: false },
  { icon: "🎉", isShow: false },
  { icon: "🐱", isShow: false },
  { icon: "🍕", isShow: false },
  { icon: "🎨", isShow: false },
]);

const shuffledArray = ref([]);
const flippedIndex = ref(null);
let time = ref(120);

const shuffleArray = (arr) => {
  let shuffled = arr.slice(); // Create a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};

const change = (index) => {
  const card = shuffledArray.value[index];
  if (card.isShow == true) return;
  // If no card is flipped or the clicked card is not the same as the previously flipped card
  if (flippedIndex.value === null) {
    card.isShow = true;
    flippedIndex.value = index;
  } else {
    const previousCard = shuffledArray.value[flippedIndex.value];
    card.isShow = true;

    if (card.icon === previousCard.icon) {
      // Correct match, reset flippedIndex
      previousCard.isShow = true;
      flippedIndex.value = null;
    } else {
      // Incorrect match, hide cards after delay
      setTimeout(() => {
        card.isShow = false;
        previousCard.isShow = false;
        flippedIndex.value = null;
      }, 1000); // Adjust the timeout duration as needed
    }
  }
};
const intervalId = setInterval(() => {
  time.value--;
  if (time.value <= 0) {
    clearInterval(intervalId); // Stop the interval when time reaches zero
  }
}, 500);

onMounted(() => {
  shuffledArray.value = shuffleArray(array.value);
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.play {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 65%;
  height: 50%;
}

button {
  width: 100px;
  height: 100px;
  margin: 2px 10px; /* Smaller vertical spacing */
  flex: 1 1 calc(25% - 20px); /* 4 buttons per row */
  box-sizing: border-box;
  font-size: 30px;
}
p {
  font-size: 25px;
}
</style>
