<script>
export default {
  name: "ListPopup",
  props: ['point'],
  methods: {
    pushInfo(value) {
      this.$parent.$parent.$parent.$parent.info = value;
    }
  }
}
</script>
<template>
  <ul class="list-unstyled ">
    <li><strong><i class="bi bi-map me-1"></i>{{ point.text }}</strong></li>
    <li><br></li>
    <li><strong>{{ point.text1 }}</strong></li>
    <li><br></li>
    <li><strong><i class="bi bi-telephone-fill me-1"></i>{{ point.text2 }}</strong></li>
    <li><br></li>
    <li>{{ point.text3 }}</li>
    <li><br></li>
    <li><a href="#"
           @click="pushInfo(point)"
           style="cursor: pointer"
           data-bs-toggle="modal" data-bs-target="#moreDetails">Детальніше<i class="bi bi-link-45deg ms-1"></i></a></li>
  </ul>
</template>
<style>

</style>
