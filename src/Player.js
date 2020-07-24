class Player {
    constructor(player, playerAttributes){
        this.id = player.id
        this.name = playerAttributes.name
        this.match_id = playerAttributes.match_id
        this.club_id = playerAttributes.club_id
        this.number = playerAttributes.number
        this.kind = playerAttributes.kind
        this.country = playerAttributes.country
        this.age = playerAttributes.age
        Player.all.push(this)
    }
    addPlayer(){  
        const contentContainer = document.getElementById('content-container')
        const div = document.createElement('div')
        div.dataset.id = this.id 
          div.innerHTML = `<h3 class="eachPlayer" data-id=${this.id}> ${this.name}</h3>`
        contentContainer.append(div)
    }
}

Player.all = []