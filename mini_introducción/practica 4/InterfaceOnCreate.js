const LeerLinea = require("readline")
const vehicleOnCreate = require("./VehicleService")








const InterfazConsola = LeerLinea.createInterface({
input : process.stdin,
output:process.stdout 
})


InterfazConsola.question("porfavor ingrese el modelo del vehiculo ", (model) => {
    InterfazConsola.question("porfavor ingrese el color del vwhiculo ", (color) => {
        InterfazConsola.question("porfavor ingrese el año del vehiculo ", (year) => {
            InterfazConsola.question("porfavor nos ingrese el estado del vehiculo ", (isfuncional) => {
                InterfazConsola.question("porfavor ingrese la mmarca del vehiculo ", (brand) => {
                 

                    console.log(vehicleOnCreate(model, color, year, isfuncional, brand))
                    InterfazConsola.close()
               
               
                })
            })
        })
    })
})