<template>

<div class="gameInfo">
  <h3> {{teamA}} vs {{teamB}} </h3>
  <ul>
    <li>{{date}}</li>
    <li>{{time}} </li>
    <li>{{location}} </li>
  </ul>
</div>
    
   
  
</template>

<script>
export default {
    name: 'GameCard',
    props: ['teamA', 'teamB', 'date', 'time', 'location'],
    
}
</script>

<style lang="scss">
#card{
  width: 90vw;
  height: 25vh;
  margin: 25px;
  box-shadow: 0;
}

#card-container{
  display: flex;
  align-content: center;
  align-items: center;
}

.gameCard{
  background: linear-gradient(to right, rgb(208, 255, 0),white);
  border: solid rgb(17, 68, 47);
  margin: 30px 60px 30px 10px;
  border-radius: 20px 20px 20px 0;
  text-align: left;

  h3{
    text-decoration: rgb(7, 78, 43) underline;
  }
}
</style>