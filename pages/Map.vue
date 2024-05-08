<template>
  <NuxtTutorial/>
</template>

<script>

import NuxtTutorial from "../components/Tutorial.vue";

export default {
  name: "MapPage",
  components: {NuxtTutorial},
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  --bs-font-sans-serif: "Raleway", sans-serif;
  --bs-font-monospace: "Raleway", sans-serif;
}

html,
body {
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

html,
body,
#map {
  height: 100%;
  width: 100vw;
}
</style>
