<template>
  <van-popup v-model:show="popupOnShow" position="right" :style="{width:'100%',height:'100%'}">
    <ItemDesc></ItemDesc>
  </van-popup>
</template>

<script>
import {mapState} from "vuex";
import ItemDesc from "@/components/musicItem/ItemDesc";

export default {
  name: "ItemPopup",
  components: {ItemDesc},
  computed: {
    ...mapState(['popupOnShow'])
  }
}
</script>

<style lang="less" scoped>

</style>
