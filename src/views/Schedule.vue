<template>
  <div id="schedule" class="main">
    <header>
      <img alt="nysl logo" src="../assets/logo.png" id="logo">
      <h2>Schedule</h2>

      <div id="card" class="gameCard" v-for="(game,index) in games" :key="index">
        <h3> {{game.date}} - {{game.teamA}} vs {{game.teamB}} </h3>
        <p> {{game.time}}</p>
        <p>{{game.location}}</p>      
      </div>
      
  
      
      
    </header>
    


  </div>
</template>

<script>

export default {
    name: 'Schedule',
    components: {
      
    },
    props: {
      
    },
    data: function(){
      return {
        games : [{
            date: '9/01',
            teamA: 'U1',
            teamB: 'U4',
            location: 'AJ Katzeinmaier',
            time:'9:30 a.m.',
            month: 'september'
        },
        {
            date: '9/01',
            teamA: 'U3',
            teamB: 'U2',
            location: 'Greenbay',
            time:'1:00 p.m.',
            month: 'september'
        },
        {
            date: '9/08',
            teamA: 'U5',
            teamB: 'U6',
            location: 'Howard A Yeager',
            time:'9:30 p.m.',
            month: 'september'
        },
        {
            date: '9/08',
            teamA: 'U6',
            teamB: 'U1',
            location: 'Marjorie P Hart',
            time:'1:00 p.m.',
            month: 'september'
        },
        {
            date: '9/15',
            teamA: 'U2',
            teamB: 'U4',
            location: 'North',
            time:'9:30 p.m.',
            month: 'september'
        },
        {
            date: '9/15',
            teamA: 'U3',
            teamB: 'U5',
            location: 'AJ Katzenmaier',
            time:'1:00 p.m.',
            month: 'september'
        },
        {
            date: '9/22',
            teamA: 'U1',
            teamB: 'U3',
            location: 'South',
            time:'9:30 p.m.',
            month: 'september'
        },
        {
            date: '9/22',
            teamA: 'U2',
            teamB: 'U6',
            location: 'Howard A Yeager',
            time:'1:00 p.m.',
            month: 'september'
        },
        {
            date: '9/29',
            teamA: 'U4',
            teamB: 'U5',
            location: 'Greenbay',
            time:'9:30 p.m.',
            month: 'september'
        },
        {
            date: '10/06',
            teamA: 'U2',
            teamB: 'U5',
            location: 'Marjorie P Hart',
            time:'9:30 p.m.',
            month: 'october'
        },
        {
            date: '10/06',
            teamA: 'U1',
            teamB: 'U6',
            location: 'South',
            time:'1:00 p.m.',
            month: 'october'
        },
        {
            date: '10/13',
            teamA: 'U3',
            teamB: 'U4',
            location: 'Howard A Yeager',
            time:'9:30 p.m.',
            month: 'october'
        },
        {
            date: '10/13',
            teamA: 'U5',
            teamB: 'U1',
            location: 'Greenbay',
            time:'1:00 p.m.',
            month: 'october'
        },
        {
            date: '10/20',
            teamA: 'U6',
            teamB: 'U3',
            location: 'North',
            time:'9:30 p.m.',
            month: 'october'
        },
        {
            date: '10/20',
            teamA: 'U2',
            teamB: 'U4',
            location: 'Marjorie P Heart',
            time:'1:00 p.m.',
            month: 'october'
        },
        {
            date: '10/27',
            teamA: 'U3',
            teamB: 'U1',
            location: 'AJ Katzenmaier',
            time:'9:30 p.m.',
            month: 'october'
        },
        {
            date: '10/27',
            teamA: 'U5',
            teamB: 'U6',
            location: 'Howard A Yeager',
            time:'1:00 p.m.',
            month: 'october'
        },]     
      };
    }
    
}
</script>

<style lang="scss">
#card{
  width: 90vw;
  height: 105px;
  margin: 25px;
  box-shadow: 0;
}

.gameCard{
  background: linear-gradient(to right, rgb(208, 255, 0),white);
  border: solid rgb(17, 68, 47);
  margin: 30px 60px 30px 10px;
  border-radius: 20px 20px 20px 0;
  text-align: left;

  h3{
    text-decoration: rgb(7, 78, 43) underline;
    font-weight: 800;
  }
  p{
    color: rgb(8, 51, 37);
    padding: 0;
    margin: 0 0 0 15px;
  }
}

</style>