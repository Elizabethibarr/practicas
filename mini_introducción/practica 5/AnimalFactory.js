

const AnimalFactory = (name, age, color, race) => {

try {
            // esas dos || significan o 
            // ! significa que no nos esta enviando esa info 
  

       
const newAnimal  = {
    nombre : name,
    edad   : age,
    color  : color,
    raza   : race
}

return newAnimaljifd

} catch (error) {
    
throw new Error(` hubo un problema al crear el animal  : ${error}`)

}

}

module.exports = AnimalFactory