const Sumar = require("./sumar");
const leerlinea = require ("readline")

const interfasconst = leerlinea.createInterface({ 
    input:process.stdin,
    output:process.stdout
})


interfasconst.question("porfavor ingrese el primero numero " ,(num1)=>{
    interfasconst.question("porfavor ingrese el segundo numero",(num2)=>{
        console.log(Sumar(parseInt(num1),parseInt(num2)))
        interfasconst.close()
    })
})
 
