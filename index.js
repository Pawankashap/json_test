getdata()

function getdata(){
    fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(animal => {
        console.log(animal)
        console.log(typeof animal[0].id)
})
}