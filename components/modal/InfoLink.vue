<script>
export default {
  name: "InfoLink",
  props: ["info"],
  data() {
    return {
      images: [
        "https://placehold.co/600x400",
        "https://placehold.co/600x900",
        "https://placehold.co/600x200",
        "https://placehold.co/600x300",
      ],
      index: null,
    };
  },
  mounted() {},
  computed: {
    get_info() {
      return this.info;
    },
  },
  methods: {
    fnCool() {
      this.index = 0;
    },
    parsText4(text) {
      if (text) {
        const servicesList = text
          .slice(text.indexOf(":") + 1)
          .trim()
          .split(", ");
        return (
          '<strong class="text-primary text-decoration-underline" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Перелік послуг</strong> ' +
          '<i class="bi bi-chevron-down text-primary"></i>' +
          '<div class="collapse" id="collapseExample">\n  <div class="">' +
          servicesList.map((service, index) => {
            if (index > 0) return `<br>${service}`;
            return `${service}`;
          }) +
          "\n  </div>\n</div><br>"
        );
      };
      return "";
    },
    getImage(value) {
      if (value.images === null || value.images === undefined) return "https://placehold.co/600x400";
      return value.images[0];
    },
    getItems(value) {
      if (value.images === null || value.images === undefined) return this.images;
      return value.images;      
    },
    getNumb(value){
      return value;
    }
  },
};
</script>
<template>
  <div
    class="modal fade"
    id="moreDetails"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">
            {{ get_info.text }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card mb-3 border-0">
            <h5 class="card-title fw-bold fs-4" style="letter-spacing: -0.2px">
              {{ get_info.text1 }}
            </h5>
            <CoolLightBox
              :items="getItems(get_info)"
              :index="index"
              :effect="'fade'"
              ref="gtRoot"
              @close="index = null"
            >
            </CoolLightBox>
            <img
              :src="getImage(get_info)"
              @click="fnCool"
              class="card-img mb-3"
              :alt="get_info.text"
            />
            <div
              v-show="get_info && get_info.text5 && get_info.text5.length > 0"
              class="border border-success border-3 p-2 border-opacity-50 mb-3 rounded position-relative"
            >
              <p class="text-uppercase fw-bolder text-center m-0">
                <i class="bi bi-clipboard-check-fill text-success"></i>
                {{ get_info.text5 }}
              </p>
            </div>
            <div
              v-show="get_info && get_info.text6 && get_info.text6.length > 0"
              class="border border-danger border-3 p-2 border-opacity-50 mb-3 rounded"
            >
              <p class="text-uppercase fw-bolder text-center m-0">
                <i class="bi bi-clipboard-check-fill text-danger"></i>
                {{ get_info.text6 }}
              </p>
            </div>
            <div class="card-body">
              <p class="card-text" v-html="parsText4(get_info.text4)"></p>
                 <hr class="border border-secondary border-2 opacity-50" />
              <div>                
                   <a :href="'tel:' + get_info.text2">
                   <strong>
                  <i class="bi bi-telephone-fill me-1"></i>{{ get_info.text2 }}</strong
                ></a>
              </div>
              <p class="card-text">
                <strong class="text-body-secondary me-1"
                  ><i class="bi bi-geo-alt-fill"></i> {{ get_info.text3 }}</strong
                >
              </p>
              <p class="card-text">
                <i class="bi bi-info-circle-fill text-body-secondary me-1"></i
                ><small class="text-body-secondary">{{ get_info.text7 }}</small>
              </p>
              <p class="card-text">
                <i class="bi bi-info-circle-fill text-body-secondary me-1"></i
                ><small class="text-body-secondary">{{ get_info.text8 }}</small>
              </p>
              <p class="card-text">
              <hr class="border border-secondary border-2 opacity-50" />
                <i class="bi bi-info-circle-fill text-body-secondary me-1"></i
              > Доступність:<br>
              <a :href="get_info.link2" class="text-primery">{{get_info.link2}}</a>
              <small class="text-body-secondary"><br>{{  get_info.text9 }}</small>
              <small class="text-body-secondary"><br>{{  get_info.text10 }}</small>
              <small class="text-body-secondary"><br>{{  get_info.text11 }}</small>
              <small class="text-body-secondary"><br>{{  get_info.text12 }}</small>
              
              <small class=" text-body-secondary"><br>{{  get_info.text13 }}</small>
              <small class="text-body-secondary"><br>{{  get_info.text14 }}</small>
             
               </p>
              <p class="card-text">
              <hr class="border border-secondary border-2 opacity-50" />
              <i class="bi bi-info-circle-fill text-body-secondary  me-1
              "></i
              >е-Ветеран:<br>
                <small strong class="text-body-secondary">{{  get_info.text16 }}</strong></small> 
              </p>

              <p class="card-text">
              <hr class="border border-secondary border-2 opacity-50" />
                <i class="bi bi-person-wheelchair me-1"></i
               > Безбар'єрность:<br>
              <small strong class="text-body-secondary">{{  get_info.text15 }}</strong></small> 
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Закрити
          </button>
          <button type="button" @click="fnCool" class="btn btn-primary">
            Безбарєрність
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
