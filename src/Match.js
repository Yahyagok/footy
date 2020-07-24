class Match {
    constructor(match, matchAttributes){
        this.id = match.id
        this.date = matchAttributes.date
        this.status = matchAttributes.status
        this.home_team_system = matchAttributes.home_team_system
        this.away_team_system = matchAttributes.away_team_system
        this.home_team_score = matchAttributes.home_team_score
        this.away_team_score = matchAttributes.away_team_score
        this.home_team_name = matchAttributes.home_team_score
        this.away_team_name = matchAttributes.away_team_name
        this.home_team_badge = matchAttributes.home_team_badge
        this.away_team_badge = matchAttributes.away_team_badge
        Match.all.push(this)
    }
    addMatch(){
        const contentContainer = document.getElementById('content-container')
        const select = document.createElement('select')
        select.name  = 'matches'
        select.id = 'matches'
        contentContainer.append(select)
        const option = document.createElement('option')
        option.value = `${this.id}`  
        option.innerHTML =`${this.home_team_name} - Match Id: ${this.id}` 
        select.append(option)
    }

    getAllMatch(){
        const contentContainer = document.getElementById('content-container')
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="flip-card">
          <div class="flip-card-inner">
          <div class="flip-card-front">
        ${this.home_team_name} 
         vs 
      ${this.away_team_name} 
             <img src="${this.home_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px; right: 200px; bottom: 10px; margin: auto; float: left; ">
              <img src="${this.away_team_badge}" alt=" home-badge" style="position: absolute;width:80px;height:70px;margin: auto; float: left; >
             </div>
             <div class="flip-card-back">
             <p> ${this.away_team_score}</p>
            </div>
             </div>
             </div>
             `
    // li.innerHTML =`${match.home_team_name} vs ${match.away_team_name} - date: ${match.date} - Status ${match.status} - home team System: 
       //        ${match.home_team_system} `
       contentContainer.append(div) 
    }
}

Match.all = []