<script>
export default {
  name: "SlickCl",
  data() {
    return {
      settings: {
        autoplay: false,
        dots: false,
      }
    };
  }
};
</script>

<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div>
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text_title text-center cl_1" style="color: #305658;">
              Полтавський район
            </h5>
          <div class="d-flex justify-content-center align-items-center flex-column">
            <ul class="card-body cl_b_1" style="color: #25797c;">
              <li class="nub_text_2">ЦНАП: 24</li>
              <li class="nub_text_2">ВРМ: 44</li>
              <li class="nub_text_2">ТП: 0</li>
            </ul>
          </div></div>
        </div>
      </div>
      <div>
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text_title text-center cl_2" style="color: #583130;">
              Кременчуцький район
            </h5>
            <div class="d-flex justify-content-center align-items-center flex-column">
            <ul class="card-body cl_b_2 text-center" style="color: #7c3225;">
              <li class="nub_text_2">ЦНАП: 12</li>
              <li class="nub_text_2">ВРМ: 25</li>
              <li class="nub_text_2">ТП: 1</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text_title text-center cl_3" style="color: #303958;">
              Миргородський район
            </h5>
            <div class="d-flex justify-content-center align-items-center flex-column">
            <ul class="card-body  text-center cl_b_3" style="color: #25367c;">
              <li class="nub_text_2">ЦНАП: 17</li>
              <li class="nub_text_2">ВРМ: 18</li>
              <li class="nub_text_2">ТП: 0</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text_title text-center cl_4" style="color: #3d5830;">
              Лубенський район
            </h5>
            <div class="d-flex justify-content-center align-items-center flex-column">
            <ul class="card-body text-center cl_b_4" style="color: #2b7c25;">
              <li class="nub_text_2">ЦНАП: 7</li>
              <li class="nub_text_2">ВРМ: 36</li>
              <li class="nub_text_2">ТП: 1</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <template #prevArrow="">
        <div class="month-nav">
          <i class="bi bi-arrow-left-short"></i>
        </div>
      </template>
      <template #nextArrow="">
        <div class="month-nav">
          <i class="bi bi-arrow-right-short"></i>
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<style scoped>
.cl_1 {
  color: #305658;
}

.cl_b_1 {
  color: #25797c;
}

.cl_2 {
  color: #583130;
}

.cl_b_2 {
  color: #7c3225;
}

.cl_3 {
  color: #303958;
}

.cl_b_3 {
  color: #25367c;
}

.cl_4 {
  color: #3d5830;
}

.cl_b_4 {
  color: #2b7c25;
}

.text_title {
  font-size: 1rem;
}

.nub_text {
  width: 143px;
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0 auto;
}

.nub_text_2 {
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 auto;
}

.slick-prev:before, .slick-next:before {
  color: black;
}
</style>
