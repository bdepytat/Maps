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
      <span class="text-body-secondary text-wrap">{{ result.text }}</span>
      <span class="text-body-secondary text-wrap">{{ result.text1 }}</span>
      <span class="text-body-secondary text-wrap">{{ result.text2 }}</span>
      <span class="text-body-secondary text-wrap">{{ result.text4 }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
