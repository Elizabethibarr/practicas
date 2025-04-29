const LeerLinea = require("readline")
const AnimalFactory = require("./AnimalFactory")


const InterfazConsola = LeerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})


InterfazConsola.question("porfavor ingrese el nombre del animal " , (name) => {

  InterfazConsola.question("porfavor ingrese la edad del animal " , (age) => {


     InterfazConsola.question("porfavor ingrese el color del animal " , (color) => {

        InterfazConsola.question("porfavor ingrese la raza del animal " , (race) => {

            console.log(AnimalFactory(name, age, color, race));

           InterfazConsola.close()
        })
     })

  })

})