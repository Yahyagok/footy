document.addEventListener('DOMContentLoaded', () => {
  const playersDiv = document.getElementsByClassName('players')[0]
  const playersButton = document.getElementsByClassName('allplayers')[0]
  const eachPlayer = document.getElementsByClassName('eachPlayer')[0]
  const buttons = document.getElementById('button_container')

  const contentContainer = document.getElementById('content-container')
 



// --------------------------Players Button ----------------------------------------
buttons.addEventListener('click', function(event){

  if (event.target.className === 'allPlayers'){
    contentContainer.innerHTML = ''
    allPlayers()
    function allPlayers(){ 
       const players = 'http://localhost:3000/api/v1/players';
         fetch(players)
         .then(res => res.json())
        .then(allPlayers => getPlayers(allPlayers))
     }

       function getPlayers(allPlayers){
            allPlayers.map(player => {
           const div = document.createElement('div')
           div.dataset.id = player.id 
            div.innerHTML = `<h3 class="eachPlayer" data-id=${player.id}> ${player.name}</h3>`
        

           contentContainer.append(div)
        })
      }

    }else if (event.target.className === 'allClubs'){
         contentContainer.innerHTML = ''
          allClubs()
             function allClubs(){
                 fetch('http://localhost:3000/api/v1/clubs')
                 .then(res => res.json())
                .then(clubs => getClubs(clubs))
              }
              function getClubs(clubs){
                  clubs.map(club => {
                  const div = document.createElement('div')
                  div.className = "club"
                  div.innerHTML =`<h3>${club.name}</h3> 
                  <img src="${club.badge}" alt="badge" >` 
                  contentContainer.append(div)
                 })
             }

    }else if (event.target.className === 'allMatches'){
              contentContainer.innerHTML = ''
                allMatches()
                  function allMatches(){
                    fetch('http://localhost:3000/api/v1/matches')
                    .then(res => res.json())
                    .then(matches => getClubs(matches))
                   }
                   function getClubs(matches){
                     matches.map(match => {
                    const div = document.createElement('div')
     
                 div.innerHTML = `
                   <div class="flip-card">
                   <div class="flip-card-inner">
                   <div class="flip-card-front">
                 ${match.home_team_name} 
                  vs 
               ${match.away_team_name} 
                      <img src="${match.home_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px; right: 200px; bottom: 10px; margin: auto; float: left; ">
                       <img src="${match.away_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px;margin: auto; float: left; >
                      </div>
                      <div class="flip-card-back">
                      <p> ${match.away_team_score}</p>
                     </div>
                      </div>
                      </div>
                      `
             // li.innerHTML =`${match.home_team_name} vs ${match.away_team_name} - date: ${match.date} - Status ${match.status} - home team System: 
                //        ${match.home_team_system} `
                contentContainer.append(div) 
                })
            }

                   } 
  })
document.addEventListener('click', function(event){
 
      if(event.target.className === 'eachPlayer'){
         contentContainer.innerHTML = ''
        const id = event.target.dataset.id 
        fetch(`http://localhost:3000/api/v1/players/${id}`)
         .then(res => res.json() )
         .then(player =>  {
        //  const div = document.createElement('div')

       eachPlayer.innerHTML = `
         <h5>Player Name:   ${player.name}  </h5>
         <h5>Player Number:   ${player.number}</h5>
         <h5> Player Type:   ${player.kind}</h5>
         <h5>Player Country:  ${player.country}<h5>
         <h5>Player Age:   ${player.age} <h5>
        
          `
          contentContainer.append(eachPlayer)

              })
         }
})
  




    

       
      
      
      
    




    

    

    

    




    


  
  

  });
