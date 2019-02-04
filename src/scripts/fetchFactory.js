const fetchFactory = {

    getAllPets() {
        return fetch("http://localhost:8088/adoptablePets")
            .then(response => response.json())
            .then(newPet => {
                console.log(newPet)
            })
    }
}

export default fetchFactory