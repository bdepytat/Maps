<script>
import geoPoint from "~/api/help.js";
export default {
  name: "IndexPage",
  components: {},
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
    },
  },
  methods: {},
};
</script>
<template> 
  <div class="container-fluid p-0 m-0">
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
          <h5 class="card-title mb-3">Питання та відповіді</h5>
          <div class="card">
            <div class="card-body">
              <div
                v-for="(value, index) in get_info"
                :key="index"
                >
                <p class="d-flex">
                  <a
                    class=" bi bi-arrow-right text-decoration-none text-dark col-12 border-bottom border-black fs-4 fw-medium"
                    data-bs-toggle="collapse"
                    :href="`#index_${index}`"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    
                  >
                    {{ value.title }}
                    </a>
                </p>
                <div class="collapse" :id="`index_${index}`">
                  <div class="card card-body mb-3 ">
                    {{ value.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
