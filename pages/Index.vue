<script>
export default {
  name: "IndexPage",
};
</script>
<
<template>
  <div class="container-fluid py-3 bg-img_ho bg-img_ho_1">
    <div class="row  flex-column align-items-center justify-content-center">
      <div class="col-md-6 col-12 mb-3">
        <div class="w-75 mb-5">
          <h2 class="pilg_pr">Цифровізація пільгового проїзду</h2>
        </div>
        <img src="../static/images/calc.png" class="img-fluid shadow-lg rounded-4"/>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="h-100 p-5 text-bg-pink rounded-3">
          <h2>Здійснення виплати компенсації вартості проїзду в 2023 році</h2>
          <p style="font-style: italic; line-height: 1.8;">2,6 виплат / 1.7 млн. грн. <br> На 2024 рік в обласному
            бюджеті
            передбачено 2.5 млн. грн.</p>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3" style="background-color: #23445b;">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <p class="text-white nub_text">185</p>
          <img src="../static/images/maps.png" class="img-fluid"/>
          <p class="text-white text-center">точок доступу в Полтавській області</p>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text-center" style="color: #305658">Полтавський район</h5>
            <ul class="card-body" style="color: #25797c">
              <li class="nub_text_2">ЦНАП: 24</li>
              <li class="nub_text_2">ВРМ: 44</li>
              <li class="nub_text_2">ТП: 0</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text-center" style="color: #583130">Кременчуцький район</h5>
            <ul class="card-body" style="color: #7c3225">
              <li class="nub_text_2">ЦНАП: 12</li>
              <li class="nub_text_2">ВРМ: 25</li>
              <li class="nub_text_2">ТП: 1</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text-center" style="color: #303958">Миргородський район</h5>
            <ul class="card-body" style="color: #25367c">
              <li class="nub_text_2">ЦНАП: 17</li>
              <li class="nub_text_2">ВРМ: 18</li>
              <li class="nub_text_2">ТП: 0</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title text-center" style="color: #3d5830">Лубенський район</h5>
            <ul class="card-body" style="color: #2b7c25">
              <li class="nub_text_2">ЦНАП: 7</li>
              <li class="nub_text_2">ВРМ: 36</li>
              <li class="nub_text_2">ТП: 1</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <a href="map" class="btn btn-primary btn_home btn-lg w-100 my-2" type="button">Пошук</a>
        <a href="map" class="btn btn-danger btn_home btn-lg w-100 my-2" type="button">Карта</a>
        <button class="btn btn-warning btn_home btn-lg w-100 my-2" type="button">Список</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nub_text {
  width: 143px;
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0 auto;
}

.nub_text_2 {
  width: 143px;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
}

.btn_home {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1rem;
  border-style: solid;
  background-image: none;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 34px auto 60px;
  padding: 18px 58px 19px 56px;
}

.text-bg-pink {
  background-color: #593c8f;
  color: #fff;
}

.pilg_pr {
  font-size: 1.8rem;
  margin: -0.5rem 5rem;
  text-transform: capitalize;
  line-height: 1.2;
  font-weight: 300;
}

.bg-img_ho {
  background-image: url('/images/ho.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 14rem -4rem;
  position: relative;
}

.bg-img_ho::before {
  content: '';
  background-image: url('/images/ho_1.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 1rem 1rem;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
