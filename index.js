const submitForm = document.getElementById('post')
submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstName = event.target[0].value
    const lastName = event.target[1].value
    const goals = event.target[2].value
    const assists = event.target[3].value
    const playerStats = {
        firstname: firstName,
        lastname: lastName,
        goals: goals,
        assists: assists
}

}
    

    

)
/*fetch('http://localhost:3000/player',{   
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify()
})
.then(response => response.json())
.then(JSON => console.log('hello') )
)*/