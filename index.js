getdata()

function getdata(){
    fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(animal => {
        console.log(animal)
        console.log(typeof animal[0].id)
})
}

getdata()
addData()

function addData() {
    
    fetch("http://localhost:3000/animals", {
        method: 'POST',
        headers: { // <-- lowercase 'headers'
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "test name",
            description: "test description"
        }) // Exclude 'id' here!
    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}