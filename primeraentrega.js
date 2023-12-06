
alert("Esta es una simulación de despegue de una nave. Gracias por participar")
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombre); 

function despegue(param1){
    let nombre1 = param1;
    let aviso = prompt("Por favor indícanos si empezamos la simulación " + nombre1 + ". si/no");
    if(aviso === "si"){
        for(let i=10; i>=1; i--){
            console.log(i);
            if(i===2){
            let abortar = prompt("¿Quieres abortar?");
                if(abortar === "si"){
                    console.log("Abortamos despegue");
                    break;
                }else if (abortar === "no"){
                    continue; 
                }
                else{
                    alert("No se tuvo respuesta");
                    i = 10;
                }     
            }if(i === 1){
                console.log("Despegue"); 
            } 
            
            }
            
    }
    if(aviso === "no"){
        console.log("Gracias. Hasta la próxima");
    }

}

despegue(nombre);


