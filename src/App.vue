<template>
  <div id="app">
    <header>
      <h1>NYSL</h1>
      
      
    </header>
      <nav id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/Schedule">Schedule</router-link> 
        <router-link to="/locations">Locations</router-link>        
      </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}


</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(rgb(8, 61, 52), rgb(93, 250, 198));
  width: 100%;
  height: 100vh;
  display: fixed;
  margin: 0;
  padding: 0;
  

  
  header{
  h1{
    color: rgb(193, 255, 23);
    font-size: 60px;
    font-weight: 600;
    text-align: left;
    margin: 0 0 0 110px;
    
  }  h2{
    background: linear-gradient(rgb(136, 255, 0), white);
    margin: 0 0 0 100px;
    border: solid black 2px;
    border-radius: 25px;
  }
}

#logo{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 10px;
  left: 5px;
  padding: 0;
  margin: 0;
}
}



nav {
  bottom: 0;
  position: fixed;
  display: flex;
  z-index: 5;
  align-content: center;
  align-content: center;
  margin: 0;
  width: 100%;
  background:transparent;

  a {
    font-weight: bold;
    color: rgb(187, 255, 0);
    padding: 15px;
    background: rgba(7, 129, 93, 0.5);
    border: solid 1px rgb(2, 31, 24);
    border-radius: 5px;
    width: 100vw;
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(2, 44, 34);
      background: linear-gradient(rgba(166, 240, 97, 0.7), rgb(137, 238, 42));
      text-decoration: none;
    }
  }
}

.bg-nysl{
  color: rgb(157, 240, 140);
}

</style>
