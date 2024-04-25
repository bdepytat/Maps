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
    <div class="row">
      <div class="fixed-top top_left col-12 col-md-4">
        <div class="dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden"
             data-bs-theme="light">
          <form class="p-2 mb-2 bg-body-tertiary border-bottom">
            <input type="text" class="form-control"
                   v-model="text_all"
                   @input="handleSearch($event)"
                   @click="handleSearch($event)"
                   placeholder="район">
          </form>
          <ul ref="listResult"
              class="list-unstyled mb-0 overflow-y-auto overflow-x-hidden list-group list-group-flush border-bottom scrollarea"
              style="max-height: 250px">
            <template v-for="result in searchResults">
              <li @click="hiddenBlock(result.text3)" class="list-group-item list-group-item-action lh-sm">
                <div class="dropdown-item d-flex align-items-center">
                  <span class="d-inline-block p-1"></span>{{ result.text3 }}
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div ref="toastShow" class="toast align-items-center position-fixed bottom-0 end-0 w-auto" style="z-index: 999"
         role="alert"
         aria-live="assertive"
         aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          <ul class="list-inside">
            <li>{{ points[0].text }}</li>
            <li>{{ points[0].text1 }}</li>
            <li>{{ points[0].text2 }}</li>
            <li>{{ points[0].text3 }}</li>
            <li>{{ points[0].text4 }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dropup-center dropup fixed-bottom">
      <button @click="hdAll" class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
        <i class="bi bi-grid"></i>
      </button>
      <ul class="dropdown-menu">
        <template v-for="(result, index) in rn_all">
          <li @click="handleRn(result)"><p class="dropdown-item">{{ result }}</p></li>
          <li v-if="index < rn_all.length - 1">
            <hr class="dropdown-divider">
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import geoPoint from '~/api/point.js'

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      zoom: 7,
      center: [49.674189, 33.792977],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution: '',
      popupContent: '',
      popupPosition: '',
      searchInput: '',
      searchResults: [],
      points_all: geoPoint.points,
      rn_all: [],
      text_all: ''
    };
  },
  mounted() {
    let foot_text = document.querySelector(".leaflet-control-attribution.leaflet-control");
    foot_text.style.display = 'none';
    this.rn_all = Array.from(new Set(this.points_all.map(item => item.text)));
  },
  computed: {
    points: {
      get() {
        if (this.searchResults.length > 0)
          return this.searchResults;
        return this.points_all;

      },
      set(points) {
        this.searchResults = points;
        return {...points};
      }
    },
    maps_pl() {
      return geoPoint.map_poltava;
    }
  },
  methods: {
    handleSearch(event) {
      this.searchInput = event.target.value;
      this.$refs.listResult.style.display = 'block';
      this.$refs.toastShow.style.display = 'none';
      this.points = this.points_all.filter((item) => {
        const searchProperties = ['text', 'text2', 'text3', "text4"];
        return searchProperties.some((property) => item[property].toLowerCase().includes(this.searchInput.toLowerCase()));
      });
    },
    handleRn(value) {
      this.searchInput = value;
      this.text_all = value;
      this.$refs.listResult.style.display = 'none';
      this.$refs.toastShow.style.display = 'none';
      this.points = this.points_all.filter((item) => {
        const searchProperties = ['text', 'text2', 'text3', "text4"];
        return searchProperties.some((property) => item[property].toLowerCase().includes(this.searchInput.toLowerCase()));
      });
    },
    hdAll() {
      this.$refs.listResult.style.display = 'none';
      this.$refs.toastShow.style.display = 'none';
    },
    hiddenBlock(input) {
      if (input.length > 0)
        this.points = this.points_all.filter((item) => {
          const searchProperties = ['text', 'text2', 'text3', "text4"];
          return searchProperties.some((property) => item[property].toLowerCase().includes(input.toLowerCase()));
        });
      this.$refs.listResult.style.display = 'none';
      this.$refs.toastShow.style.display = 'block';
      setTimeout(() => {
        this.$refs.toastShow.style.display = 'none';
      }, 4000);
    }
  }
}
</script>

<style scoped>
.leaflet-popup-content .list-inside {
  padding-left: 15px;
}

.dropup .dropdown-toggle::after {
  display: none;
}
</style>
