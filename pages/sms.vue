<script>
import geoPoint from "~/api/help.js";
export default {
  name: "SmsPage",
  components: { },
  data() {
    return {
      points_all: geoPoint.infos,
    };
  },
  mounted() {
    
  },
  computed: {
    get_info() {
      return this.points_all;
    }
  },
  methods: {
   
  },
};
</script>
<template>
  <div class="container-fluid p-0 m-0" :style="bgOut">
    <div class="d-flex align-items-center justify-content-center mb-3">
      <div class="col-12 col-md-6">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary w-100 vh-100">
          <a
            href="info"
            class="d-flex align-items-center justify-content-between mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
        
            <div class="col-1">
              <i class="bi bi-arrow-left"></i>
            </div>
          </a>
          <hr />
          <h1>Сповіщення</h1>
          
          <ul class="nav nav-pills flex-column mb-auto">
                       <li class="nav-item">
              <a href="sms" class="nav-link link-body-emphasis">
                               </a
              >
              
            </li>
                      </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped></style>
  </div>
</template>

<style scoped>
</style>
