<template>
  <div class="locations">
    <header>
      <img alt="nysl logo" src="../assets/logo.png" id="logo">
      <h2>Game Locations</h2>
    </header> 
    <div id="maps">
      <Maps />
    </div>
   
  </div>

</template>

<script>
import Maps from "../components/Maps"
export default {
  name: 'Locations',
  components: {
    Maps
  },
}
</script>

<style lang="scss">

iframe{
  width: 100%;
  height: 100%;
  margin: 0;
}

#maps{
  margin: 45px 0 0 0;
}
</style>