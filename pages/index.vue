<template>
  <NuxtTutorial/>
</template>

<script>

import NuxtTutorial from "../components/Tutorial.vue";

export default {
  name: "IndexPage",
  components: {NuxtTutorial},
};
</script>
<style>
html,
body,
#map {
  height: 100%;
  width: 100vw;
}
</style>
