<script>
import ListResalt from "./ListResalt.vue";

export default {
  name: "SideBar",
  components: {ListResalt},
  props: ['points'],
  data() {
    return {
      districts: [],
      the_hulks: [],
      types: [],
      showList: '',
    }
  },
  mounted() {
    this.districts = Array.from(new Set(Object.values(this.points).map((item) => {
      const parts = item.text.split(":");
      const name = parts[1];
      return name;
    })));
    this.the_hulks = Array.from(new Set(Object.values(this.points).map((item) => {
      const parts = item.text1.split(":");
      const name = parts[1];
      return name;
    })));
  },
  methods: {
    GetPoint(hulk) {
      const result = this.points.reduce((acc, item) => {
        const key = item.text1;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {});
      const key = `громада:${hulk}`;
      return result[key];
    },
    toggleList(index) {
      this.showList = index;
    },
    openMap(value) {
      this.showList = false;
      this.$parent.handleRn(value)
    },
    openMapLast(value) {
      this.showList = false;
      this.$parent.hiddenBlock(value)
    }
  }
}
</script>

<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header border-bottom">
      <figure
        class="d-flex flex-column align-items-start link-body-emphasis text-decoration-none mb-0">
        <blockquote class="blockquote m-0">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel" style="color: #008fd1"><strong>Полтавщина</strong></h5>
        </blockquote>
        <figcaption class="text-body-secondary">
          джерела питної води
        </figcaption>
      </figure>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="flex-shrink-0 p-3" style="width: 280px;">
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#district-collapse" aria-expanded="false">
              Район
            </button>
            <div class="collapse" id="district-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <template v-for="(district, index) in districts">
                  <li @click="openMap(district)" data-bs-dismiss="offcanvas" aria-label="Close"><a
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    style="cursor: pointer">{{ district }}</a>
                  </li>
                </template>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#the_hulk-collapse" aria-expanded="false">
              Громада
            </button>
            <div class="collapse" id="the_hulk-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <template v-for="(the_hulk, index) in the_hulks">
                  <li>
                    <div class="d-flex flex-row flex-nowrap justify-content-between">
                      <div class="col-auto">
                        <a @click="openMap(the_hulk)"
                           class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                           style="cursor: pointer" data-bs-dismiss="offcanvas" aria-label="Close">{{ the_hulk }}</a>
                      </div>
                      <div class="col-auto" v-show="showList !== the_hulk">
                        <button type="button" class="btn" @click="toggleList(the_hulk)">
                          <i class="bi bi-plus-lg"></i>
                        </button>
                      </div>
                      <div class="col-auto" v-show="showList == the_hulk">
                        <button type="button" class="btn p-1" @click="toggleList(false)">
                          <i class="bi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                                 fill="none">
                              <path d="M6 12L18 12" stroke="#949797" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                          </i>
                        </button>
                      </div>
                    </div>
                    <ul class="list-group list-group-flush offset-2" v-show="showList == the_hulk">
                      <template v-for="(value, index) in GetPoint(the_hulk)">
                        <li class="list-group-item" @click="openMapLast(value.text3)"
                            data-bs-dismiss="offcanvas" aria-label="Close" style="cursor: pointer">
                          <list-resalt :result="value"/>
                        </li>
                      </template>
                    </ul>
                  </li>
                </template>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-toggle {
  outline: 0;
}

.btn-toggle {
  padding: .25rem .5rem;
  font-weight: 600;
  color: var(--bs-emphasis-color);
  background-color: transparent;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(var(--bs-emphasis-color-rgb), .85);
  background-color: var(--bs-tertiary-bg);
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

[data-bs-theme="dark"] .btn-toggle::before {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(var(--bs-emphasis-color-rgb), .85);
}

.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: var(--bs-tertiary-bg);
}

.scrollarea {
  overflow-y: auto;
}

</style>
