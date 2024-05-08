<template>
  <div id="map-wrap" style="height: 100vh">
    <l-map :zoom="zoom" :center="center" @click="hiddenBlock">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="(point, index) in points"
        :key="index"
        :lat-lng="point.latlng"
        :icon="icon(point.marker)"
      >
        <l-popup>
          <ListPopup :point="point"/>
        </l-popup>
      </l-marker>

      <l-geo-json :geojson="maps_lb"></l-geo-json>
      <l-geo-json :geojson="maps_polt"></l-geo-json>
      <l-geo-json :geojson="maps_mr"></l-geo-json>
      <l-geo-json :geojson="maps_kr"></l-geo-json>
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
                  <textarea
                    class="form-control overflow-hidden"
                    id="floatingInput"
                    cols="1"
                    type="text"
                    v-model="text_all"
                    @input="handleSearch($event)"
                    @click="handleSearch($event)"
                    placeholder="пошук"
                  ></textarea>
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
            >
              <template v-for="result in searchResults">
                <li
                  @click="hiddenBlock(result.text3)"
                  class="list-group-item list-group-item-action lh-sm"
                  style="cursor: pointer"
                >
                  <list-resalt :result="result"/>
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
            class="btn dropdown-toggle"
            type="button"
            style="background: #fff"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i class="bi bi-list-task"></i>
            Список
          </button>
          <a
            href="/"
            class="btn dropdown-toggle"
            type="button"
            style="background: #fff"
          >
            <i class="bi bi-arrow-left-short"></i>
            На головну
          </a>
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
    <info-link :info="get_info"/>
  </div>
</template>

<script>
import geoPoint from "~/api/point.js";
import SiteBar from "./SiteBar.vue";
import ListResalt from "./ListResalt.vue";
import ListPopup from "./ListPopup.vue";
import InfoLink from "../modal/InfoLink.vue";
import {nextTick} from "vue";
import L from "leaflet";

export default {
  name: "NuxtTutorial",
  components: {InfoLink, ListResalt, SiteBar, ListPopup},
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
      info: [],
    };
  },
  mounted() {
    let foot_text = document.querySelector(
      ".leaflet-control-attribution.leaflet-control"
    );
    foot_text.style.display = "none";
    nextTick(() => {
      const path = document.querySelectorAll("#map-wrap .leaflet-interactive:not(img)");
      console.dir(path);
      //path.style.fill = 'green';
      //path.style.stroke = 'green';
      if (path.length > 0) {
        path[0].style.fill = '#ffb4a2';
        path[0].style.stroke = '#ffb4a2';
        path[1].style.fill = '#96E016';
        path[1].style.stroke = '#96E016';
        path[2].style.fill = '#033E8C';
        path[2].style.stroke = '#033E8C';
        path[3].style.fill = 'green';
        path[3].style.stroke = 'green';
      }
    });
  },

  computed: {
    get_info() {
      return this.info;
    },
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
    maps_lb() {
      return geoPoint.map_lubn;
    },
    maps_polt() {
      return geoPoint.map_polt;
    },
    maps_mr() {
      return geoPoint.map_mr;
    },
    maps_kr() {
      return geoPoint.map_kr;
    },
  },
  methods: {
    icon(link) {
      return L.icon({
        iconUrl: link,
        iconAnchor: [16, 37],
        popupAnchor: [-3, -36],
      });
    },
    resetSearch() {
      this.text_all = "";
      this.points = this.points_all;
    },
    handleSearch(event) {
      this.searchInput = event.target.value;
      this.$refs.listResult.style.display = "block";
      this.points = this.points_all.filter((item) => {
        const searchProperties = ["text", "text1", "text2", "text3", "text4"];
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
        const searchProperties = ["text", "text1", "text3", "text4"];
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
