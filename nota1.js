let nota;

function pegarNotas(nota) {

switch (true) {
    case nota>=90 && nota<=100:        
        console.log("A");
        break
           
    case nota>=80 && nota<=89:        
        console.log("B");
        break

    case nota>=70 && nota<=79:      
        console.log("C");
        break

    case nota>=60 && nota<=69:      
        console.log("D");
        break

    case nota < 60 :            
        console.log("E");
        break

    default:
        console.log("Nota inválida");
        break
    }

}

pegarNotas(80)
