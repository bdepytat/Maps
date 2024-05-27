<script>
import SlickCl from "../components/component/Slick.vue";
import SiteBar from "../components/component/SiteBar.vue";
import InfoLink from "../components/modal/InfoLink.vue";
import geoPoint from "~/api/point.js";
export default {
  name: "IndexPage",
  components: { SiteBar, SlickCl, InfoLink },
  data() {
    return {
      img_hidden: true,
      hidden: false,
      points_all: geoPoint.points,
      info: [],
    };
  },
  mounted() {
    setTimeout(this.myFunction, 3000);
  },
  computed: {
    get_info() {
      return this.info;
    },
    bgOut() {
      if (this.img_hidden) {
        return "background-color: #00af50; height:100vh";
      }
    },
  },
  methods: {
    myFunction() {
      this.hidden = true;
      this.img_hidden = false;
    },
    hiddenBlock(input) {
      if (input.length > 0)
        this.points = this.points_all.filter((item) => {
          const searchProperties = ["text", "text1", "text2", "text3", "text4"];
          return searchProperties.some((property) =>
            item[property].toLowerCase().includes(input.toLowerCase())
          );
        });
      this.$refs.listResult.style.display = "none";
    },
  },
};
</script>
<template>
  <div class="container-fluid p-0 m-0" :style="bgOut">
    <div
      v-show="img_hidden"
      class="screen row flex-column justify-content-center align-items-center p-0"
    >
      <div class="col-auto">
        <img class="object-fit-cover" alt="" src="/screenshots/screenshot-2.png" />
      </div>
    </div>
    <div v-if="hidden">
      <div class="container-fluid py-3 bg-img_ho bg-img_ho_1">
        <div class="row flex-column align-items-center justify-content-center">
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-center">
              <div class="card mb-3 border-0">
                <div class="row g-0 align-items-center justify-content-center">
                  <div class="col-auto">
                    <img
                      src="/images/maps2.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-auto">
                    <div class="d-flex align-items-end h-100">
                      <div class="card-body">
                        <h1
                          class="text-center fw-bolder"
                          style="color: #033e8c; font-size: 4rem"
                        >
                          200
                        </h1>
                        <p
                          class="text-center"
                          style="font-style: italic; line-height: 1.8"
                        >
                          загальна кількість точок доступу в Полтавській області
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-11">
            <slick-cl />
          </div>
          <div class="col-md-3 col-12 mb-3">
              <a
              href="map"
              class="btn btn_home btn-lg w-100 my-2"
              style="background-color: #593c8f; color: #fff"
              type="button"
              ><i class="bi bi-map text-withe me-1"></i>Карта</a
            >
            <a
              href="map"
              class="btn btn-primary btn_home btn-lg w-100 my-2"
              type="button"
              style="background-color: #033e8c; color: #fff"
              ><i class="bi bi-search me-1"></i>Пошук</a
            >
            <button
              class="text-white btn btn-warning btn_home btn-lg w-100 my-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              type="button"
            >
              <span> <i class="bi bi-list-task me-1 bi_vertical"></i>Список</span>
            </button>

            <a href="info" class="btn btn-outline-primary btn_home btn-lg w-100 my-2">
              <span>
                <i class="bi bi-chat-quote me-1 "></i>Допомога і
                підтримка</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <site-bar :points="points_all" />
    <info-link :info="get_info" />
  </div>
</template>

<style scoped>
.bi_vertical {
  vertical-align: inherit;
}
.btn_home {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1rem;
  border-style: solid;
  background-image: none;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 34px auto 60px;
  padding: 18px 0 19px 0;
}
</style>
