<script>
export default {
  name: "ListResalt",
  props: ['result']
}
</script>

<template>
  <div class="dropdown-item d-flex align-items-center justify-content-start">
    <div class="d-flex align-items-start flex-column offset-1">
      <span class="fw-bold text-wrap">{{ result.text3 }}</span>
      <small class="text-body-secondary text-wrap">{{ result.text }}</small>
      <small class="text-body-secondary text-wrap">{{ result.text1 }}</small>
      <small class="text-body-secondary text-wrap">{{ result.text2 }}</small>
      <small class="text-body-secondary text-wrap">{{ result.text4 }}</small>
    </div>
  </div>
</template>

<style scoped>

</style>
