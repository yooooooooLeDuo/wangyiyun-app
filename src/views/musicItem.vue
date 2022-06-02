<template>
  <ItemMusicTop></ItemMusicTop>
  <ItemMusicList></ItemMusicList>
</template>

<script>
import ItemMusicTop from "@/components/musicItem/ItemMusicTop";
import ItemMusicList from "@/components/musicItem/ItemMusicList";
export default {
  name: "musicItem",
  components: {ItemMusicList, ItemMusicTop}
}
</script>

<style scoped>

</style>
