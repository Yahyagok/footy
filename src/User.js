const createUser = document.getElementById('create-user')
const loginForm = document.getElementsByTagName('form')[0]
const select = document.getElementById('select-club')
fetch('http://localhost:3000/api/v1/clubs')
.then(res => res.json())
.then(clubs => getClubs(clubs))
   function getClubs(clubs){
  clubs.data.forEach(club => {
  const option = document.createElement('option')
  option.name = "select"
  option.className = "club"
   option.value = `${club.id}`  
   option.innerHTML = `${club.attributes.name} ` 
   select.append(option)
   })
  }
select.addEventListener('change', function(event){
loginForm.dataset.id = event.target.value
})
loginForm.addEventListener('submit', function(event){
  event.preventDefault()
    let userName = event.target.name.value 
    let userPassword = event.target.password.value 
    let  clubId = event.target.dataset.id
    let userInfo = { name: userName, password: userPassword, club_id: clubId }
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(user => {
      user.attributes.name
    })
})  