<script>
import SlickCl from "../components/component/Slick.vue";

export default {
  name: "IndexPage",
  components: {SlickCl},
  data() {
    return {
      img_hidden: true,
      hidden: false,
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
};
</script>
<template>
  <div class="container">
    <div
      v-show="img_hidden"
      class="screen row flex-column justify-content-center align-items-center"
    >
      <div class="col-auto">
        <img class="object-fit-cover" alt="" src="/screenshots/screenshot-2.png"/>
      </div>
    </div>
    <div v-if="hidden">
      <div class="container-fluid py-3 bg-img_ho bg-img_ho_1">
        <div class="row flex-column align-items-center justify-content-center">
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-auto">
                <img src="/images/maps2.png" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-auto">
                <div class="card-body">
                  <h1 class="text-center" style="color: #593c8f; font-size: 4rem">185</h1>
                  <p class="text-center" style="font-style: italic; line-height: 1.8">
                    загальна кількість точок доступу в Полтавській області
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-11">
            <slick-cl/>
          </div>
          <div class="col-md-3 col-12 mb-3">
            <a href="map" class="btn btn-primary btn_home btn-lg w-100 my-2" type="button"
            ><i class="bi bi-search me-1"></i>Пошук</a
            >

            <a
              href="map"
              class="btn btn_home btn-lg w-100 my-2"
              style="background-color: #593c8f; color: #fff"
              type="button"
            ><i class="bi bi-pin-map-fill text-withe me-1"></i>Карта</a
            >

            <button class="btn btn-warning btn_home btn-lg w-100 my-2" type="button">
              <i class="bi bi-list-task me-1"></i>Список
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn_home {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1rem;
  border-style: solid;
  background-image: none;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 34px auto 60px;
  padding: 18px 58px 19px 56px;
}
</style>
