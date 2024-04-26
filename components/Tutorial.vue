<!-- Please remove this file from your project -->
<template>
  <div class="">
    <div v-show="img_hidden" class="screen row flex-column justify-content-center align-items-center">
      <div class="col-auto"><span class="loader-112">П &nbsp; лтавщина</span></div>
      <div class="col-auto">
        <img class="object-fit-cover" alt="" src="/screenshots/screenshot-2.png"/>
      </div>
    </div>
    <div v-if="hidden">
      <map-out/>
    </div>
  </div>
</template>

<script>
import MapOut from "./component/MapOut.vue";

export default {
  name: "NuxtTutorial",
  components: {MapOut},
  data() {
    return {
      img_hidden: true,
      hidden: false,
      search: ''
    };
  },
  mounted() {
    setTimeout(this.myFunction, 3000);
  },
  methods: {
    myFunction() {
      this.hidden = true;
      this.img_hidden = false;
    },
  },
  computed: {},
};
</script>
<style scoped lang="scss">
.screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

body {
  overflow: hidden;
}

.top_left {
  top: 1%;
  left: 10%;
}

$base: #263238;
$lite: #008fd1;
$brand: #FF3D01;
$size: 48px;

*, *:after, *:before {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $base;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $brand;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

body {
  margin: 0;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  background: $base;
  font-family: Arial, Helvetica, sans-serif;

  &.pop {
    overflow: hidden;
  }
}

section {
  min-width: 200px;
  width: 33.33%;
  height: 200px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  cursor: pointer;
  transition: 0.3s linear;

  &:nth-child(2n + 1) {
    background: rgba(#000, 0.1);
  }

  &:hover {
    background: rgba(#000, 0.3);
  }

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }

}

header {
  padding: 10px 20px;
  min-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 2000;
  justify-content: space-between;
}

.brand {
  color: #fff;
  font-size: 32px;
  display: inline-block;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 20px;
    bottom: 5px;
    border: 3px solid $lite;
    border-bottom-color: $brand;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: rotation 0.6s linear infinite;
  }
}

.nav-btn {
  color: #fff;
  text-decoration: none;
}

// Loaders

.loader-112 {
  font-size: $size;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: $lite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 34px;
    bottom: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid $lite;
    border-bottom-color: $brand;
    animation: rotation 0.6s linear infinite;
  }
}


/* keyFrames */

@keyframes rotation {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}


</style>
