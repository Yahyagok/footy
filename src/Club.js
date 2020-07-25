class Club {
    constructor(club, clubAttributes){
        this.id =club.id
        this.name = clubAttributes.name
        this.badge = clubAttributes.badge
        Club.all.push(this)
    }

    getClub(){ 
       const select1 = document.getElementById('clubs')
       
       const option1 = document.createElement('option')
       option1.value = `${this.id}`  
       option1.innerHTML = `${this.name} - club Id: ${this.id}` 
       select1.append(option1)
    }
    getAllClub(){
        const contentContainer = document.getElementById('content-container')
        const div = document.createElement('div')
        div.className = "club"
        div.innerHTML =`<h3>${this.name}</h3> 
        <img src="${this.badge}" alt="badge" >` 
        contentContainer.append(div)
    }
}
Club.all = []