<template>
  <div id="map-wrap" style="height: 100vh">
    <l-map
      :zoom="zoom"
      :center="center"
      @click="hiddenBlock"
      @zoomend="updateMarkersVisibility"
      @popupclose="onPopupClose"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="(point, index) in points"
        :key="index"
        :lat-lng="point.latlng"
        :icon="icon(point.marker)"
        :visible="marker_vs"
        @click="poligonHighlight(point.map, point.latlng)"
      >
        <l-popup>
          <ListPopup :point="point" />
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="pnt_lng" :icon="pnt_icon" :visible="marker_vs">
      </l-marker>

      <l-marker :visible="marker_vs" :lat-lng="[49.91231, 33.07985]" :icon="labelIcon1"></l-marker>
      <l-marker :visible="marker_vs" :lat-lng="[49.47164, 35.02449]" :icon="labelIcon2"></l-marker>
      <l-marker :visible="marker_vs" :lat-lng="[50.0183, 33.95329]" :icon="labelIcon3"></l-marker>
      <l-marker :visible="marker_vs" :lat-lng="[49.05765, 33.76652]" :icon="labelIcon4"></l-marker>

      <!-- 4 Райони-->
      <l-geo-json :geojson="maps_lb_rn"></l-geo-json>
      <l-geo-json :geojson="maps_polt"></l-geo-json>
      <l-geo-json :geojson="maps_mr_rn"></l-geo-json>
      <l-geo-json :geojson="maps_kr_rn"></l-geo-json>

      <!-- Лубенський р-н -->
      <l-geo-json :geojson="maps_lb1"></l-geo-json>
      <l-geo-json :geojson="maps_lb2"></l-geo-json>
      <l-geo-json :geojson="maps_lb3"></l-geo-json>
      <l-geo-json :geojson="maps_lb4"></l-geo-json>
      <l-geo-json :geojson="maps_lb5"></l-geo-json>
      <l-geo-json :geojson="maps_lb6"></l-geo-json>
      <l-geo-json :geojson="maps_lb7"></l-geo-json>

      <!--Полтавський р-н>-->
      <l-geo-json :geojson="maps_pl1"></l-geo-json>
      <l-geo-json :geojson="maps_pl2"></l-geo-json>
      <l-geo-json :geojson="maps_pl3"></l-geo-json>
      <l-geo-json :geojson="maps_pl4"></l-geo-json>
      <l-geo-json :geojson="maps_pl5"></l-geo-json>
      <l-geo-json :geojson="maps_pl6"></l-geo-json>
      <l-geo-json :geojson="maps_pl7"></l-geo-json>
      <l-geo-json :geojson="maps_pl8"></l-geo-json>
      <l-geo-json :geojson="maps_pl9"></l-geo-json>
      <l-geo-json :geojson="maps_pl10"></l-geo-json>
      <l-geo-json :geojson="maps_pl11"></l-geo-json>
      <l-geo-json :geojson="maps_pl12"></l-geo-json>
      <l-geo-json :geojson="maps_pl13"></l-geo-json>
      <l-geo-json :geojson="maps_pl14"></l-geo-json>
      <l-geo-json :geojson="maps_pl15"></l-geo-json>
      <l-geo-json :geojson="maps_pl16"></l-geo-json>
      <l-geo-json :geojson="maps_pl17"></l-geo-json>
      <l-geo-json :geojson="maps_pl18"></l-geo-json>
      <l-geo-json :geojson="maps_pl19"></l-geo-json>
      <l-geo-json :geojson="maps_pl20"></l-geo-json>
      <l-geo-json :geojson="maps_pl21"></l-geo-json>
      <l-geo-json :geojson="maps_pl22"></l-geo-json>
      <l-geo-json :geojson="maps_pl23"></l-geo-json>
      <l-geo-json :geojson="maps_pl24"></l-geo-json>

      <!--Миргородський р-н>-->
      <l-geo-json :geojson="maps_mr1"></l-geo-json>
      <l-geo-json :geojson="maps_mr2"></l-geo-json>
      <l-geo-json :geojson="maps_mr3"></l-geo-json>
      <l-geo-json :geojson="maps_mr4"></l-geo-json>
      <l-geo-json :geojson="maps_mr5"></l-geo-json>
      <l-geo-json :geojson="maps_mr6"></l-geo-json>
      <l-geo-json :geojson="maps_mr7"></l-geo-json>
      <l-geo-json :geojson="maps_mr8"></l-geo-json>
      <l-geo-json :geojson="maps_mr9"></l-geo-json>
      <l-geo-json :geojson="maps_mr10"></l-geo-json>
      <l-geo-json :geojson="maps_mr11"></l-geo-json>
      <l-geo-json :geojson="maps_mr12"></l-geo-json>
      <l-geo-json :geojson="maps_mr13"></l-geo-json>
      <l-geo-json :geojson="maps_mr14"></l-geo-json>
      <l-geo-json :geojson="maps_mr15"></l-geo-json>
      <l-geo-json :geojson="maps_mr16"></l-geo-json>
      <l-geo-json :geojson="maps_mr17"></l-geo-json>

      <!--Кременчуцький р-н>-->
      <l-geo-json :geojson="maps_kr1"></l-geo-json>
      <l-geo-json :geojson="maps_kr2"></l-geo-json>
      <l-geo-json :geojson="maps_kr3"></l-geo-json>
      <l-geo-json :geojson="maps_kr4"></l-geo-json>
      <l-geo-json :geojson="maps_kr5"></l-geo-json>
      <l-geo-json :geojson="maps_kr6"></l-geo-json>
      <l-geo-json :geojson="maps_kr7"></l-geo-json>
      <l-geo-json :geojson="maps_kr8"></l-geo-json>
      <l-geo-json :geojson="maps_kr9"></l-geo-json>
      <l-geo-json :geojson="maps_kr10"></l-geo-json>
      <l-geo-json :geojson="maps_kr11"></l-geo-json>
      <l-geo-json :geojson="maps_kr12"></l-geo-json>

      <l-geo-json :geojson="geo_json" :options-style="options_style"></l-geo-json>
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
                  <list-resalt :result="result" />
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="dropup-center dropup fixed-bottom mb-4 ms-1 p-0">
          <site-bar :points="points_all" />
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
          <a href="/" class="btn dropdown-toggle" type="button" style="background: #fff">
            <i class="bi bi-arrow-left-short"></i>
            На головну
          </a>
          <ul class="dropdown-menu">
            <template v-for="(result, index) in rn_all">
              <li @click="handleRn(result)">
                <p class="dropdown-item">{{ result }}</p>
              </li>
              <li v-if="index < rn_all.length - 1">
                <hr class="dropdown-divider" />
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <info-link :info="get_info" />
  </div>
</template>

<script>
import geoPoint from "~/api/point.js";
import SiteBar from "./SiteBar.vue";
import ListResalt from "./ListResalt.vue";
import ListPopup from "./ListPopup.vue";
import { LGridLayer } from "vue2-leaflet";
import InfoLink from "../modal/InfoLink.vue";
import { nextTick } from "vue";
import L from "leaflet";

export default {
  name: "NuxtTutorial",
  components: { InfoLink, ListResalt, SiteBar, ListPopup, LGridLayer },
  data() {
    return {
      zoom: 8,
      vs_zoom: 8,
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
      labelIcon1: L.icon({
        iconUrl:
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
          '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="bold">Лубенський район</text></svg>',
        iconSize: [128, 128],
        iconAnchor: [128, 128],
        popupAnchor: [0, -16],
      }),
      labelIcon2: L.icon({
        iconUrl:
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
          '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="bold">Полтавський район</text></svg>',
        iconSize: [128, 128],
        iconAnchor: [128, 128],
        popupAnchor: [0, -16],
      }),
      labelIcon3: L.icon({
        iconUrl:
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
          '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="bold">Миргородський район</text></svg>',
        iconSize: [128, 128],
        iconAnchor: [128, 128],
        popupAnchor: [0, -16],
      }),
      labelIcon4: L.icon({
        iconUrl:
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
          '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="bold">Кременчуцький район</text></svg>',
        iconSize: [128, 128],
        iconAnchor: [128, 128],
        popupAnchor: [0, -16],
      }),
      geo_js: [],
      pn_lt: [0, 0],
      icLn: "/",
      tileComponent: {
        name: "tile-component",
        props: {
          coords: {
            type: Object,
            required: true,
          },
        },
        template: "<div>Coords: {{coords.x}}, {{coords.y}}, {{coords.z}}</div>",
      },
    };
  },
  mounted() {
    let foot_text = document.querySelector(
      ".leaflet-control-attribution.leaflet-control"
    );
    foot_text.style.display = "none";
    nextTick(() => {
      const path = document.querySelectorAll("#map-wrap .leaflet-interactive:not(img)");
      if (path.length > 0) {
        //Лубенський р-н
        path[0].style.fill = "#ffb4a2";
        path[0].style.stroke = "#ffb4a2";
        path[4].style.fill = "#ffb4a2";
        path[4].style.stroke = "#e3655b";
        path[5].style.fill = "#ffb4a2";
        path[5].style.stroke = "#e3655b";
        path[6].style.fill = "#ffb4a2";
        path[6].style.stroke = "#e3655b";
        path[7].style.fill = "#ffb4a2";
        path[7].style.stroke = "#e3655b";
        path[8].style.fill = "#ffb4a2";
        path[8].style.stroke = "#e3655b";
        path[9].style.fill = "#ffb4a2";
        path[9].style.stroke = "#e3655b";
        path[10].style.fill = "#ffb4a2";
        path[10].style.stroke = "#e3655b";

        //Полтавський р-н
        path[1].style.fill = "#82BF45";
        path[1].style.stroke = "#5b8c5a";
        path[11].style.fill = "#82BF45";
        path[11].style.stroke = "#5b8c5a";
        path[12].style.fill = "#82BF45";
        path[12].style.stroke = "#5b8c5a";
        path[13].style.fill = "#82BF45";
        path[13].style.stroke = "#5b8c5a";
        path[14].style.fill = "#82BF45";
        path[14].style.stroke = "#5b8c5a";
        path[15].style.fill = "#82BF45";
        path[15].style.stroke = "#5b8c5a";
        path[16].style.fill = "#82BF45";
        path[16].style.stroke = "#5b8c5a";
        path[17].style.fill = "#82BF45";
        path[17].style.stroke = "#5b8c5a";
        path[18].style.fill = "#82BF45";
        path[18].style.stroke = "#5b8c5a";
        path[19].style.fill = "#82BF45";
        path[19].style.stroke = "#5b8c5a";
        path[20].style.fill = "#82BF45";
        path[20].style.stroke = "#5b8c5a";
        path[21].style.fill = "#82BF45";
        path[21].style.stroke = "#5b8c5a";
        path[22].style.fill = "#82BF45";
        path[22].style.stroke = "#5b8c5a";
        path[23].style.fill = "#82BF45";
        path[23].style.stroke = "#5b8c5a";
        path[24].style.fill = "#82BF45";
        path[24].style.stroke = "#5b8c5a";
        path[25].style.fill = "#82BF45";
        path[25].style.stroke = "#5b8c5a";
        path[26].style.fill = "#82BF45";
        path[26].style.stroke = "#5b8c5a";
        path[27].style.fill = "#82BF45";
        path[27].style.stroke = "#5b8c5a";
        path[28].style.fill = "#82BF45";
        path[28].style.stroke = "#5b8c5a";
        path[29].style.fill = "#82BF45";
        path[29].style.stroke = "#5b8c5a";
        path[30].style.fill = "#82BF45";
        path[30].style.stroke = "#5b8c5a";
        path[31].style.fill = "#82BF45";
        path[31].style.stroke = "#5b8c5a";
        path[32].style.fill = "#82BF45";
        path[32].style.stroke = "#5b8c5a";
        path[33].style.fill = "#82BF45";
        path[33].style.stroke = "#5b8c5a";
        path[34].style.fill = "#82BF45";
        path[34].style.stroke = "#5b8c5a";

        //Миргородський р-н
        path[2].style.fill = "#9519ad";
        path[2].style.stroke = "#9519ad";
        path[35].style.fill = "#9519ad";
        path[35].style.stroke = "#9519ad";
        path[36].style.fill = "#9519ad";
        path[36].style.stroke = "#9519ad";
        path[37].style.fill = "#9519ad";
        path[37].style.stroke = "#9519ad";
        path[38].style.fill = "#9519ad";
        path[38].style.stroke = "#9519ad";
        path[39].style.fill = "#9519ad";
        path[39].style.stroke = "#9519ad";
        path[40].style.fill = "#9519ad";
        path[40].style.stroke = "#9519ad";
        path[41].style.fill = "#9519ad";
        path[41].style.stroke = "#9519ad";
        path[42].style.fill = "#9519ad";
        path[42].style.stroke = "#9519ad";
        path[43].style.fill = "#9519ad";
        path[43].style.stroke = "#9519ad";
        path[44].style.fill = "#9519ad";
        path[44].style.stroke = "#9519ad";
        path[45].style.fill = "#9519ad";
        path[45].style.stroke = "#9519ad";
        path[46].style.fill = "#9519ad";
        path[46].style.stroke = "#9519ad";
        path[47].style.fill = "#9519ad";
        path[47].style.stroke = "#9519ad";
        path[48].style.fill = "#9519ad";
        path[48].style.stroke = "#9519ad";
        path[49].style.fill = "#9519ad";
        path[49].style.stroke = "#9519ad";
        path[50].style.fill = "#9519ad";
        path[50].style.stroke = "#9519ad";
        path[51].style.fill = "#9519ad";
        path[51].style.stroke = "#9519ad";

        //Кременчуцький р-н
        path[3].style.fill = "#FDE003";
        path[3].style.stroke = "#F09308";
        path[52].style.fill = "#FDE003";
        path[52].style.stroke = "#F09308";
        path[53].style.fill = "#FDE003";
        path[53].style.stroke = "#F09308";
        path[54].style.fill = "#FDE003";
        path[54].style.stroke = "#F09308";
        path[55].style.fill = "#FDE003";
        path[55].style.stroke = "#F09308";
        path[56].style.fill = "#FDE003";
        path[56].style.stroke = "#F09308";
        path[57].style.fill = "#FDE003";
        path[57].style.stroke = "#F09308";
        path[58].style.fill = "#FDE003";
        path[58].style.stroke = "#F09308";
        path[59].style.fill = "#FDE003";
        path[59].style.stroke = "#F09308";
        path[60].style.fill = "#FDE003";
        path[60].style.stroke = "#F09308";
        path[61].style.fill = "#FDE003";
        path[61].style.stroke = "#F09308";
        path[62].style.fill = "#FDE003";
        path[62].style.stroke = "#F09308";
        path[63].style.fill = "#FDE003";
        path[63].style.stroke = "#F09308";
      }
    });
  },

  computed: {
    geo_json: {
      get() {
        return this.geo_js;
      },
      set(item) {
        this.geo_js = item;
        return this.geo_js;
      },
    },
    marker_vs: {
      get() {
        return this.vs_zoom;
      },
      set(item) {
        this.vs_zoom = item;
        return this.vs_zoom;
      },
    },
    pnt_lng: {
      get() {
        return this.pn_lt;
      },
      set(item) {
        this.pn_lt = item;
        return this.pn_lt;
      },
    },
    pnt_icon: {
      get() {
        return this.icon(this.icLn);
      },
      set(item) {
        this.icLn = item;
        return item;
      },
    },
    options_style() {
      return {
        fillColor: "#fdfcfc",
        weight: 2,
        opacity: 1,
        color: "#eae7e7",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    },
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
        return { ...points };
      },
    },
    maps_pl() {
      return geoPoint.map_poltava;
    },

    maps_lb_rn() {
      return geoPoint.map_lubn_rn;
    },
    maps_lb1() {
      return geoPoint.map_lubn1;
    },
    maps_lb2() {
      return geoPoint.map_lubn2;
    },
    maps_lb3() {
      return geoPoint.map_lubn3;
    },
    maps_lb4() {
      return geoPoint.map_lubn4;
    },
    maps_lb5() {
      return geoPoint.map_lubn5;
    },
    maps_lb6() {
      return geoPoint.map_lubn6;
    },
    maps_lb7() {
      return geoPoint.map_lubn7;
    },

    //Полтавський р-н
    maps_polt() {
      return geoPoint.map_polt;
    },
    maps_pl1() {
      return geoPoint.map_pl1;
    },
    maps_pl2() {
      return geoPoint.map_pl2;
    },
    maps_pl3() {
      return geoPoint.map_pl3;
    },
    maps_pl4() {
      return geoPoint.map_pl4;
    },
    maps_pl5() {
      return geoPoint.map_pl5;
    },
    maps_pl6() {
      return geoPoint.map_pl6;
    },
    maps_pl7() {
      return geoPoint.map_pl7;
    },
    maps_pl8() {
      return geoPoint.map_pl8;
    },
    maps_pl9() {
      return geoPoint.map_pl9;
    },
    maps_pl10() {
      return geoPoint.map_pl10;
    },
    maps_pl11() {
      return geoPoint.map_pl11;
    },
    maps_pl12() {
      return geoPoint.map_pl12;
    },
    maps_pl13() {
      return geoPoint.map_pl13;
    },
    maps_pl14() {
      return geoPoint.map_pl14;
    },
    maps_pl15() {
      return geoPoint.map_pl15;
    },
    maps_pl16() {
      return geoPoint.map_pl16;
    },
    maps_pl17() {
      return geoPoint.map_pl17;
    },
    maps_pl18() {
      return geoPoint.map_pl18;
    },
    maps_pl19() {
      return geoPoint.map_pl19;
    },
    maps_pl20() {
      return geoPoint.map_pl20;
    },
    maps_pl21() {
      return geoPoint.map_pl21;
    },
    maps_pl22() {
      return geoPoint.map_pl22;
    },
    maps_pl23() {
      return geoPoint.map_pl23;
    },
    maps_pl24() {
      return geoPoint.map_pl24;
    },

    //Миргородський р-н
    maps_mr_rn() {
      return geoPoint.map_mr_rn;
    },
    maps_mr1() {
      return geoPoint.map_mr1;
    },
    maps_mr2() {
      return geoPoint.map_mr2;
    },
    maps_mr3() {
      return geoPoint.map_mr3;
    },
    maps_mr4() {
      return geoPoint.map_mr4;
    },
    maps_mr5() {
      return geoPoint.map_mr5;
    },
    maps_mr6() {
      return geoPoint.map_mr6;
    },
    maps_mr7() {
      return geoPoint.map_mr7;
    },
    maps_mr8() {
      return geoPoint.map_mr8;
    },
    maps_mr9() {
      return geoPoint.map_mr9;
    },
    maps_mr10() {
      return geoPoint.map_mr10;
    },
    maps_mr11() {
      return geoPoint.map_mr11;
    },
    maps_mr12() {
      return geoPoint.map_mr12;
    },
    maps_mr13() {
      return geoPoint.map_mr13;
    },
    maps_mr14() {
      return geoPoint.map_mr14;
    },
    maps_mr15() {
      return geoPoint.map_mr15;
    },
    maps_mr16() {
      return geoPoint.map_mr16;
    },
    maps_mr17() {
      return geoPoint.map_mr17;
    },

    //Кременчуцький р-н
    maps_kr_rn() {
      return geoPoint.map_kr_rn;
    },
    maps_kr1() {
      return geoPoint.map_kr1;
    },
    maps_kr2() {
      return geoPoint.map_kr2;
    },
    maps_kr3() {
      return geoPoint.map_kr3;
    },
    maps_kr4() {
      return geoPoint.map_kr4;
    },
    maps_kr5() {
      return geoPoint.map_kr5;
    },
    maps_kr6() {
      return geoPoint.map_kr6;
    },
    maps_kr7() {
      return geoPoint.map_kr7;
    },
    maps_kr8() {
      return geoPoint.map_kr8;
    },
    maps_kr9() {
      return geoPoint.map_kr9;
    },
    maps_kr10() {
      return geoPoint.map_kr10;
    },
    maps_kr11() {
      return geoPoint.map_kr11;
    },
    maps_kr12() {
      return geoPoint.map_kr12;
    },
  },
  methods: {
    isMarkerVisible(zoom) {
      if (zoom < 8) {
        return false;
      }
      return true;
    },
    updateMarkersVisibility(event) {
      this.marker_vs = this.isMarkerVisible(event.target._zoom);
    },
    onPopupClose() {
      this.poligonHighlight(null, null);
    },
    poligonHighlight(map, lng) {
      if (map !== null) {
        this.geo_json = geoPoint[map];
        this.pnt_lng = lng;
        this.pnt_icon = "/marker/icon-mark2.png";
      } else {
        this.pnt_icon = "/";
        this.geo_json = [];
        this.pnt_lng = [0, 0];
      }
    },
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
