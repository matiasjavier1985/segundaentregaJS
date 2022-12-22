let bike = [
    {id:1,marca:"TREK", modelo:"Xcaliber6", precio:200000,cantidad:8},
    {id:2,marca:"TREK", modelo:"Xcaliber8", precio:200000,cantidad:6},
    {id:3,marca:"TREK", modelo:"Xcaliber9", precio:200000,cantidad:5},
    {id:4,marca:"TREK", modelo:"Marlin 5", precio:200000,cantidad:3},
    {id:5,marca:"Specialized", modelo:"Rockhopper", precio:250000,cantidad:9}
]
console.log(bike)
for (const bikes of bike) {
    console.log(bikes.id)      
}
let user='1234';
let password= '1234';
function login(){
    let validar=false;
    for (let i = 2; i>= 0; i--){
        let nombre= prompt("BIENVENIDO a MUNDO-BICI\nIngrese su Usuario:")
        let contrasena=prompt('Ingrese contraseña:')
        if (nombre== user && contrasena == password){
            validar=true;
            alert("Ingreso Correcto\n\nBienvenido a:\n\n MUNDO-BICI (stock))")
            break;
        }else{
            alert(`Error de Usuario y Contraseña\nTe quedan: ${i} intentos`)
        }
    }
    return validar;
}
let ingreso = login()
if (ingreso){  
let menu=prompt("1-Mostrar Stock.\n2-Agregar Producto\n3-Borrar Producto\n4-Presione (X) Cerrar sesión");
    while(menu != "X"){
        switch(menu){
            case '1':
                mostrar()
                break;
            case '2':
                id=prompt("Ingrese ID: ")
                marca =prompt("Ingrese Marca: ")
                modelo=prompt("Ingresa Modelo de la marca: "+ marca)
                precio=parseFloat(prompt(`Ingrese precio de la ${marca}-${modelo}`))
                cantidad=parseInt(prompt("Ingrese cantidad"))
                let agregarbike = new agregar(id,marca,modelo,precio,cantidad)
                bike.push(agregarbike)          
                break;
            case '3':
                mostrarquitarid()
                id =parseInt(prompt("Ingrese codigo de producto a borrar"))
                 bike.pop(item => item.id === id)
                break;
            default:
                alert("Presione (X) para volver");
                break;
                }
            menu=prompt("1-Mostrar Stock.\n2-Agregar Producto\n3-Borrar Producto\n4-Presione (X) Cerrar sesión");
            }         
        }
function mostrar(){
    let texto = ""
    for (const bikes of bike) {
        texto= texto + `\n_______________________________________________________________\n Codigo: ${bikes.id} Marca: ${bikes.marca} Modelo: ${bikes.modelo} Precio: ${bikes.precio} Cantidad: ${bikes.cantidad}`
    }
    alert(texto)    
}
function agregar(id,marca,modelo,precio,cantidad){
    this.id = id 
    this.marca=marca
    this.modelo = modelo
    this.precio= precio
    this.cantidad = cantidad
}
function mostrarquitarid(){
    let texto = ""
    alert('INGRESE CODIGO DEL PRODUCTO A BORRAR')
    for (const bikes of bike) {
        texto= texto + `\n_______________________________________________________________\n Cod: ${bikes.id} Marca: ${bikes.marca} Modelo: ${bikes.modelo}`}
    alert(texto)    
}

 

