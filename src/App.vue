<template>
  <router-view/>
  <MUsicControl></MUsicControl>
  <ItemPopup></ItemPopup>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
a{
  text-decoration: none;
  color: #000;
}

</style>
<script>
import MUsicControl from "@/components/global/MusicControl";
import ItemPopup from "@/components/musicItem/ItemPopup";
export default {
  components: {ItemPopup, MUsicControl}
}
</script>
