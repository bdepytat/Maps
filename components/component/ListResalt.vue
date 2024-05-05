<script>
export default {
  name: "ListResalt",
  props: ['result'],
  data() {
    return {
      down: true,
    }
  },
  methods: {}
}
</script>

<template>
  <div class="dropdown-item d-flex align-items-center justify-content-start">
    <div class="d-flex align-items-start flex-column fs-7 text-body-secondary">
      <strong class="text-wrap">{{ result.text1 }}</strong>
    </div>
  </div>
</template>

<style scoped>
.fs-7 {
  font-size: .9rem;
}
</style>
