<script>
import ListResalt from "../component/ListResalt.vue";

export default {
  name: "InfoLink",
  components: {ListResalt},
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
      list: '',
      searchInput: '',
      ln_v_t: 0
    };
  },
  mounted() {
  },
  computed: {
    get_info() {
      return this.info;
    },
  },
  methods: {       
    length_vrm_tp(item) {
    if (item !== undefined) {
      return item.length !== undefined ? item.length : 0;
    }
    return 0;
  },
    fnCool() {
      this.index = 0;
    },
    searchArr() {
      this.list = this.get_info.text17.filter((property) =>
        property.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    parsText4(text, arr) {
      if (text) {
        const servicesList = text
          .trim()
          .split(",");
        let html = '<strong class="text-primary text-decoration-underline" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Перелік послуг</strong> ' +
          '<i class="bi bi-chevron-down text-primary"></i>' +
          '<div class="collapse" id="collapseExample"><div class="">' +
          ' <ul style="font-size: .8rem">';

        for (let i = 0; i < servicesList.length; i++) {
          if (arr[i] !== undefined) {
            html += `<li class="text-secondary" data-bs-toggle="collapse"
                  href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample${i}">${servicesList[i].trim()}<i class="bi bi-chevron-down text-primary"></i>
                 </li><div class="collapse" id="collapseExample${i}"><div class="">
                  ${this.parsNext(arr[i])}</div></div>`;
          } else {
            html += `<li class="text-secondary">${servicesList[i].trim()}</li>`;
          }
        }

        html += "</ul></div></div>";
        return html;
      }
    },
    parsNext(text) {
      if (text) {
        const servicesList = text
          .trim()
          .split(",");
        let html =
          ' <ul style="font-size: .8rem">';

        for (let i = 0; i < servicesList.length; i++) {
          let text_in = servicesList[i].trim()
          if (this.searchInput.length > 0) {
            const regex = new RegExp(this.searchInput, 'gi');
            let text_out = text_in.replace(regex, `<span style="color:#860000">$&</span>`);
            html += `<li class="text-secondary">
                    ${text_out}
                 </li>`;
          } else {
            html += `<li class="text-secondary">
                    ${text_in}
                 </li>`;
          }
        }

        html += "</ul>";
        return html;
      }
    },
    parsSrc(text) {
      if (text.length > 0) {
        const servicesList = text
        let html = '';
        for (let i = 0; i < servicesList.length; i++) {
          html += `<div>
                      ${this.parsNext(servicesList[i])}
                   </div>`;
        }
        return html;
      }
    },
    getImage(value) {
      if (value.images === null || value.images === undefined) return "https://placehold.co/600x400";
      return value.images[0];
    },
    getItems(value) {
      if (value.images === null || value.images === undefined) return this.images;
      return value.images;
    },
    getNumb(value) {
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
              class="border border-danger border-3 p-2 border-opacity-50 mb-3 rounded">
              <p class="text-uppercase fw-bolder text-center m-0">
                <i class="bi bi-clipboard-check-fill text-danger"></i>
                {{ get_info.text6 }}
              </p>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col">
                  <div class="form-floating position-relative">
                  <textarea
                    class="form-control overflow-hidden"
                    id="floatingInput"
                    cols="1"
                    type="text"
                    v-model="searchInput"
                    @input="searchArr"
                    placeholder="пошук"
                  ></textarea>
                    <label for="floatingInput">Пошук послуг</label>
                    
                    <button
                      class="bi bi-search btn btn-outline-secondary position-absolute top-0 border-0 end-0 " 
                      type="button"
                      @click="searchInput=''"
                      id="button-addon2"
                    >
                    
                      x
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-text"
                   v-if="searchInput.length <= 0"
                   v-html="parsText4(get_info.text4, get_info.text17)"></div>
              <div class="card-text"
                   v-else
                   v-html="parsSrc(list)"></div>
              <hr class="border border-secondary border-2 opacity-50"/>
              <div>
                <a :href="'tel:' + get_info.text2">
                  <strong>
                    <i class="bi bi-telephone-fill me-1"></i>{{ get_info.text2 }}</strong>
                </a>
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
                ><small class="text-body-secondary"  data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false"
                 aria-controls="collapseExample6" style="cursor: pointer;">Кількість: ВРМ: {{ length_vrm_tp(get_info.vrm) }}, ТП: {{ length_vrm_tp(get_info.tp) }}</small>
                 <br>
                <small id="collapseExample6" class="collapse text-body-secondary">                
                  ВРМ:
                  <ul >
                    <li v-for="item in get_info.vrm">
                      {{ item }}
                    </li>
                  </ul>
                  ТП:
                  <ul >
                    <li v-for="item in get_info.tp">
                      {{ item }}
                    </li>
                  </ul>
                </small>
              </p>
              <p class="card-text">
                <hr class="border border-secondary border-2 opacity-50"/>      
                <i class="bi bi-info-circle-fill text-body-secondary me-1"></i
                >Доступність:<br>
                <a :href="get_info.link2" class="text-primery">{{ get_info.link2 }}</a>
                <small class="text-body-secondary"><br>{{ get_info.text9 }}</small>
                <small class="text-body-secondary"><br>{{ get_info.text10 }}</small>
                <small class="text-body-secondary"><br>{{ get_info.text11 }}</small>
                <small class="text-body-secondary"><br>{{ get_info.text12 }}</small>

                <small class=" text-body-secondary"><br>{{ get_info.text13 }}</small>
                <small class="text-body-secondary"><br>{{ get_info.text14 }}</small>
                </p>
              <p class="card-text">
                <hr class="border border-secondary border-2 opacity-50"/>
                <i class="bi bi-info-circle-fill text-body-secondary  me-1
              "></i
                >е-Ветеран:<br>
                <small  class="text-body-secondary"> <strong>{{ get_info.text16 }}</strong></small>
              </p>

              <p class="card-text">
                <hr class="border border-secondary border-2 opacity-50"/>
                <i class="bi bi-person-wheelchair me-1"></i
                > Безбар'єрность:<br>
                <small class="text-body-secondary"><strong>{{ get_info.text15 }}</strong></small>
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
