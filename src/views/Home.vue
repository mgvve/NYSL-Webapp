<template>
  <div class="home">
    <header>
      <img alt="nysl logo" src="../assets/logo.png" id="logo">
      <h2>Upcomming Events</h2>
    </header>
    

    <div class="event">
      <h3>August 14</h3>
      <p>NYSL <br> Fundraiser</p>
    </div>
    <div class="event">
      <h3>August 16</h3>
      <p>Season Kick-off: <br> Meet the teams.</p>
    </div>
    <div class="event">
      <h3>September 1</h3>
      <p>First Game of the season</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  
  }
}
</script>

<style>
h3{
  color:rgb(28, 110, 28);
  margin: 5px 0 10px 10px;
  font-size: 25px;
  font-weight: 900;

}

.event{
  background: linear-gradient(to right, rgb(208, 255, 0),white);
  border: solid rgb(17, 68, 47);
  margin: 30px 60px 30px 10px;
  border-radius: 0 100px 20px 0;
  text-align: left;
}

p{
  font-weight: 600;
  margin: 0 0 13px 10px;
}
</style>

