<script>
export default {
  name: "ListResalt",
  props: ['result'],
  data() {
    return {
      down: true,
    }
  },
  methods: {
    parsText4(text) {
      const servicesList = text.slice(text.indexOf(':') + 1).trim().split(', ');
      return '<strong  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Перелік послуг</strong> ' +
                '<i class="bi bi-chevron-down"></i>' +
          '<div class="collapse" id="collapseExample">\n  <div class="">' + servicesList.map((service, index) => {
            if (index > 0)
              return `<br>${service}`
            return `${service}`
          }) + '\n  </div>\n</div><br>';
    }
  }
}
</script>

<template>
  <div class="dropdown-item d-flex align-items-center justify-content-start">
    <div class="d-flex align-items-start flex-column fs-7 text-body-secondary">
      <strong class="text-wrap">{{ result.text1 }}</strong>
      <strong><i class="bi bi-telephone-fill me-1"></i>{{ result.text2 }}</strong>
      <span class="text-wrap">{{ result.text3 }}</span>
      <span class="text-wrap" v-html="parsText4(result.text4)"></span>
      <span class="text-wrap">{{ result.text5 }}</span>
      <span class="text-wrap">{{ result.text6 }}</span>
      <span class="text-wrap">{{ result.text7 }}</span>
      <span class="text-wrap">{{ result.text8 }}</span>
      <span class="text-wrap">{{ result.link2 }}</span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.fs-7 {
  font-size: .9rem;
}
</style>
