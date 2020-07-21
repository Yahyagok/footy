document.addEventListener('DOMContentLoaded', () => {
  const playersDiv = document.getElementsByClassName('players')[0]
  const playersButton = document.getElementsByClassName('allplayers')[0]
  const eachPlayer = document.getElementsByClassName('eachPlayer')[0]
  const buttons = document.getElementById('button_container')

  const contentContainer = document.getElementById('content-container')

  const players = 'http://localhost:3000/api/v1/players';
// --------------------------Players Button ----------------------------------------
        buttons.addEventListener('click', function(event){

              if (event.target.className === 'allPlayers'){
                contentContainer.innerHTML = ''

                allPlayers()
                function allPlayers(){ 
                    fetch(players)
                    .then(res => res.json())
                    .then(allPlayers => getPlayers(allPlayers))
                    }

                   function getPlayers(allPlayers){

                   
                        allPlayers.data.forEach(player => {
                      const div = document.createElement('div')
                      div.dataset.id = player.id 
                        div.innerHTML = `<h3 class="eachPlayer" data-id=${player.id}> ${player.attributes.name}</h3>`
                  
                      contentContainer.append(div)
                          })
                  }

               const newPlayerButton = document.createElement('button') // button for new player
                 newPlayerButton.innerHTML = 'add a new player'
               newPlayerButton.id = 'add-new-player'
              contentContainer.append(newPlayerButton)
     
       newPlayerButton.addEventListener('click', function(event){
           contentContainer.innerHTML = ''
       
          let createPlayerForm = document.createElement('form')
          createPlayerForm.innerHTML = `
          <label>name:</label>
          <input type="text" name="name" />
          <br/>
          <label>Player Number:</label>
          <input type="number" name="number" />
          <br/>
          <label>Type:</label>
          <input type="text" name="type" />
          <br/>
          <label> Country:</label>
          <input type="text" name="country" />
          <br/>
          <label> Age:</label>
          <input type="text" name="age" />
          <br/>
          <label> Club Id:</label>
          <input type="number" name="club" />
          <br/>
          <label> Match Id:</label>
          <input type="number" name="match" />
          <br/>
          <input id=submit type="submit" />
          `

          fetch('http://localhost:3000/api/v1/matches')
          .then(res => res.json())
          .then(matches => getMatches(matches))
         
          function getMatches(matches){
            const select = document.createElement('select')
            select.name  = 'matches'
            select.id = 'matches'
            contentContainer.append(select)
            matches.data.map(match => {
              const option = document.createElement('option')
              option.value = `${match.id}`  
              option.innerHTML =`${match.attributes.home_team_name} - Match Id: ${match.id}` 
              select.append(option)
                   }) 
          }

              fetch('http://localhost:3000/api/v1/clubs')
                .then(res => res.json())
                .then(clubs => getClubs(clubs))
              function getClubs(clubs){
                   const select1 = document.createElement('select')
                   select1.name = 'club'
                   select1.id = 'clubs'
                  contentContainer.append(select1)
                  clubs.data.map(club => {
                  const option1 = document.createElement('option')
                   option1.value = `${club.attributes.name}`  
                   option1.innerHTML = `${club.attributes.name} - club Id: ${club.id}` 
                   select1.append(option1)
                 } )

               }

           contentContainer.innerHTML = ''
           contentContainer.append(createPlayerForm)
           createPlayerForm.addEventListener('submit', function(event){
             event.preventDefault()
              let name = event.target.name.value 
              let number = event.target.number.value

              let type = event.target.type.value

              let country = event.target.country.value

              let age = event.target.age.value

               let club_id = event.target.club.value 

               let match_id = event.target.match.value 

               let newPlayer = {name,  number,  kind: type,  country,  age, club_id, match_id } 
               
                fetch('http://localhost:3000/api/v1/players', {
                    method: "POST", 
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify(newPlayer)
                })
                .then(res => res.json())
                .then(player => {
                    const div = document.createElement('div')
                    div.dataset.id = player.id 
                      div.innerHTML = `<h3 class="eachPlayer" data-id=${player.id}> ${player.data.attributes.name}</h3>`
                    contentContainer.append(div)
                })
          }) 

        }) 
      
    }else if (event.target.className === 'allClubs'){
         contentContainer.innerHTML = ''
          allClubs()
             function allClubs(){
                 fetch('http://localhost:3000/api/v1/clubs')
                 .then(res => res.json())
                .then(clubs => getClubs(clubs))
              }
              function getClubs(clubs){
                  clubs.data.map(club => {
                  const div = document.createElement('div')
                  div.className = "club"
                  div.innerHTML =`<h3>${club.attributes.name}</h3> 
                  <img src="${club.attributes.badge}" alt="badge" >` 
                  contentContainer.append(div)
                 })
             
             }

    }else if (event.target.className === 'allMatches'){
              contentContainer.innerHTML = ''
                allMatches()
                  function allMatches(){
                    fetch('http://localhost:3000/api/v1/matches')
                    .then(res => res.json())
                    .then(matches => getMatches(matches))
                   }
                   function getMatches(matches){
                     matches.data.map(match => {
                    const div = document.createElement('div')
     
                 div.innerHTML = `
                   <div class="flip-card">
                   <div class="flip-card-inner">
                   <div class="flip-card-front">
                 ${match.attributes.home_team_name} 
                  vs 
               ${match.attributes.away_team_name} 
                      <img src="${match.attributes.home_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px; right: 200px; bottom: 10px; margin: auto; float: left; ">
                       <img src="${match.attributes.away_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px;margin: auto; float: left; >
                      </div>
                      <div class="flip-card-back">
                      <p> ${match.attributes.away_team_score}</p>
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
                   
            //------------------------------------------------User page -----------------------------------------------------------------------

          
                   
  });


