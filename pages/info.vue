<script>
export default {
  name: "IndexPage",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<template>
  <div class="container-fluid p-0 m-0">
    <div class="d-flex align-items-center justify-content-center mb-3">
      <div class="col-12 col-md-6">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary w-100 vh-100">
          <a
            href="/"
            class="d-flex align-items-center justify-content-between mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <div class="col-8">
            </div>
            <div class="col-1">X</div>
          </a>
          <hr />
          <h1>Вітаємо!</h1>
                    <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="sms" class="nav-link link-body-emphasis bi bi-bell fs-3">
                <svg class="bi pe-none me-2 " width="16" height="16">
                  <use xlink:href="#home"></use></svg
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"> Сповіщення </font></font
                ></a
              >

            </li>

            <li>
              <a href="help" class="bi-question-lg nav-link link-body-emphasis bi fs-3">
                <svg class="bi pe-none me-2" width="16" height="16">
                  <use xlink:href="#speedometer2"></use></svg
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"> Питання і відповідь </font></font
                ></a
              >
            </li>
            <li>
              <a href="support" class="nav-link link-body-emphasis bi bi-headset fs-3">
                <svg class="bi pe-none me-2" width="16" height="16">
                  <use xlink:href="#table"></use></svg
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"> Служба підтримки </font></font
                ></a
              >
             </li>
            </ul>
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
