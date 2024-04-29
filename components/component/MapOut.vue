<template>
  <div id="map-wrap" style="height: 100vh">
    <l-map :zoom="zoom" :center="center" @click="hiddenBlock">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="(point, index) in points" :key="index" :lat-lng="point.latlng">
        <l-popup>
          <ul class="list-inside">
            <li>{{ point.text }}</li>
            <li>{{ point.text1 }}</li>
            <li>{{ point.text2 }}</li>
            <li>{{ point.text3 }}</li>
            <li>{{ point.text4 }}</li>
          </ul>
        </l-popup>
      </l-marker>
      <l-geo-json :geojson="maps_pl"></l-geo-json>
    </l-map>
    <div class="container">
      <div class="row">
        <div class="fixed-top top_left col-10 col-md-4">
          <div
            class="dropdown-menu mt-2 d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden pb-0"
            data-bs-theme="light"
          >
            <form class="p-2 mb-0 bg-body-tertiary border-bottom">
              <div class="form-control p-0" id="floatingInput">
                <div class="form-floating position-relative">
                <textarea class="form-control overflow-hidden" id="floatingInput"
                          cols="1"
                          type="text"
                          v-model="text_all"
                          @input="handleSearch($event)"
                          @click="handleSearch($event)"
                          placeholder="пошук"></textarea>
                  <label for="floatingInput">Пошук</label>
                  <button
                    v-show="text_all.length > 0"
                    @click="resetSearch"
                    class="btn btn-outline-secondary position-absolute top-0 border-0 end-0"
                    type="button"
                    id="button-addon2"
                  >
                    x
                  </button>
                </div>
              </div>
            </form>
            <ul
              ref="listResult"
              class="list-unstyled mb-0 overflow-y-auto overflow-x-hidden list-group list-group-flush border-bottom scrollarea"
              style="max-height: 250px"
            >
              <template v-for="result in searchResults">
                <li
                  @click="hiddenBlock(result.text3)"
                  class="list-group-item list-group-item-action lh-sm"
                  style="cursor: pointer"
                >
                  <div class="dropdown-item d-flex align-items-center justify-content-start">
                    <div class="d-flex align-items-start flex-column offset-1">
                      <span class="fw-bold text-wrap">{{ result.text3 }}</span>
                      <small class="text-body-secondary text-wrap">{{ result.text }}</small>
                      <small class="text-body-secondary text-wrap">{{ result.text1 }}</small>
                      <small class="text-body-secondary text-wrap">{{ result.text2 }}</small>
                      <small class="text-body-secondary text-wrap">{{ result.text4 }}</small>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="dropup-center dropup fixed-bottom mb-4 ms-1 p-0">
          <site-bar :points="points_all"/>
          <button
            @click="hdAll"
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i class="bi bi-grid"></i>
          </button>
          <ul class="dropdown-menu">
            <template v-for="(result, index) in rn_all">
              <li @click="handleRn(result)">
                <p class="dropdown-item">{{ result }}</p>
              </li>
              <li v-if="index < rn_all.length - 1">
                <hr class="dropdown-divider"/>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import geoPoint from "~/api/point.js";
import SiteBar from "./SiteBar.vue";

export default {
  name: "NuxtTutorial",
  components: {SiteBar},
  data() {
    return {
      zoom: 7,
      center: [49.674189, 33.792977],
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution: "",
      popupContent: "",
      popupPosition: "",
      searchInput: "",
      searchResults: [],
      points_all: geoPoint.points,
      rn_all: [],
      text_all: "",
    };
  },
  mounted() {
    let foot_text = document.querySelector(
      ".leaflet-control-attribution.leaflet-control"
    );
    foot_text.style.display = "none";
  },
  computed: {
    points: {
      get() {
        if (this.searchResults.length > 0) return this.searchResults;
        return this.points_all;
      },
      set(points) {
        this.searchResults = points;
        return {...points};
      },
    },
    maps_pl() {
      return geoPoint.map_poltava;
    },
  },
  methods: {
    resetSearch() {
      this.text_all = '';
      this.points = this.points_all;
    },
    handleSearch(event) {
      this.searchInput = event.target.value;
      this.$refs.listResult.style.display = "block";
      this.points = this.points_all.filter((item) => {
        const searchProperties = ["text", "text2", "text3", "text4"];
        return searchProperties.some((property) =>
          item[property].toLowerCase().includes(this.searchInput.toLowerCase())
        );
      });
    },
    handleRn(value) {
      this.searchInput = value;
      this.text_all = value;
      this.$refs.listResult.style.display = "none";
      this.points = this.points_all.filter((item) => {
        const searchProperties = ["text", "text2", "text3", "text4"];
        return searchProperties.some((property) =>
          item[property].toLowerCase().includes(this.searchInput.toLowerCase())
        );
      });
    },
    hdAll() {
      this.$refs.listResult.style.display = "none";
    },
    hiddenBlock(input) {
      if (input.length > 0)
        this.points = this.points_all.filter((item) => {
          const searchProperties = ["text", "text2", "text3", "text4"];
          return searchProperties.some((property) =>
            item[property].toLowerCase().includes(input.toLowerCase())
          );
        });
      this.$refs.listResult.style.display = "none";
    },
  },
};
</script>

<style scoped>
.leaflet-popup-content .list-inside {
  padding-left: 15px;
}

.top_left {
  left: auto;
}

.dropup .dropdown-toggle::after {
  display: none;
}
</style>
