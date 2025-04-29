

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

return newAnimal 

} catch (error) {
    
console.log(error);

}

}

module.exports = AnimalFactory