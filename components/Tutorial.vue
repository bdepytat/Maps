<!-- Please remove this file from your project -->
<template>
  <div>
    <div id="map-wrap" style="height: 100vh">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="(point, index) in points" :key="index" :lat-lng="point.latlng">
          <l-popup
            ><ul class="list-inside">
              <li>{{ point.text }}</li>
            </ul></l-popup>
        </l-marker>
        <l-geo-json :geojson="maps_pl"></l-geo-json>
      </l-map>
    </div>
  </div>
</template>

<script>
import geoPoint from "~/api/point.js";

export default {
  name: "NuxtTutorial",
  data() {
    return {
      zoom: 8,
      center: [49.143592, 34.209364],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution: "",
    };
  },
  mounted() {
     console.dir(this.maps_pl);
  },
  computed: {
    points() {
      return geoPoint.points;
    },
    maps_pl() {     
      return geoPoint.map_poltava;
    },
  },
};
</script>
