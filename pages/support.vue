<script>
import geoPoint from "~/api/help.js";
export default {
  name: "SupportPage",
  
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
              <i class="bi bi-arrow-left "></i>
              
            </div>
          </a>
          <hr />
          <h1 >Служба підтримки</h1>
          <p>
          <h5>Напишіть, якщо у вас виникли проблеми або питання.</h5>
          <h5>Працюємо!</h5>
        </p>
                <p>
           <a class=" mb-1 fs-3 " href="https://t.me/poltavskaoda"><i class="bi bi-telegram me-1"></i>Telegram
          
           </a>
          </p>
          <p>
        <a class="fs-3 mb-3" href="https://www.facebook.com/poltavaoda"><i class="bi bi-facebook me-1"></i>Facebook
        </a>
        </p>
        <hr class="border border-secondary border-2 opacity-50"/> 
        <div class="col-10 bi bi-house-door-fill me-1">
        Адреса:
        <strong><i class=" me-1"></i>36014, Полтава,вул. Соборності, 45</strong> 
        <div class="col-10 bi bi-telephone-inbound-fill">
        Телефон: 
        <strong><i class=" me-1"></i>+380(532)56-02-90</strong>
        <div class="col-10 bi bi-envelope-at-fill"> Електронна пошта: 
          <strong><a class=" me-1" href="oda@adm-pl.gov.ua">oda@adm-pl.gov.ua
        </a></strong>

          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="support" class="nav-link link-body-emphasis">
                               </a
              >
            </li>
             </ul>
            </div>
          </div>
            </div>
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
