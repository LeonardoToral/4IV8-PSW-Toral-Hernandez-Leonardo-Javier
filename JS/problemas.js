function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if((teclado>=48&&teclado<=57)||teclado==46){
        return true;
    }
    return false;
}

function validar2(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado>=48&&teclado<=57){
        return true;
    }
    return false;
}

function validar3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if((teclado>=48&&teclado<=57)||teclado==45||teclado==46){
        return true;
    }
    return false;
}

function verificar_numero(verificado){
    var aux1=0, aux2=0;
    var auxiliar=true;
    for(var i=0; i<verificado.length; i++){
        var codigo = verificado.charCodeAt(i);
        if(codigo==46){
            aux1+=1;
        }
        else{
            if(codigo==45){
                aux2+=1;
            }
        }
    }
    if(aux1>1||aux2>1){
        auxiliar=false;
    }
    if(aux2==1&&(verificado.charCodeAt(0)!=45||verificado.length==1)){
        auxiliar=false;
    }
    if(aux1==1&&verificado.length==1){
        auxiliar=false;
    }
    if((aux1==1&&aux2==1)&&verificado.length==2){
        auxiliar=false;
    }
    return auxiliar;
}

function validar_nacimiento(dia, mes, anio){
    var validar=true;
    if(dia==0){
        validar=false;
    }
    if(mes==0||mes>12){
        validar=false;
    }
    if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12){
        if(dia>31){
            validar=false;
        }
    }
    else{
        if(mes==4||mes==6||mes==9||mes==11){
            if(dia>30){
                validar=false;
            }
        }
        else{
            if(anio%4==0&&anio!=1900){
                if(dia>29){
                    validar=false;
                }
            }
            else{
                if(dia>28){
                    validar=false;
                }
            }
        }
    }
    return validar;
}

function anios_pasados(dia, mes, anio){
    var cumplidos=2021-anio;
    if(cumplidos!=0){
        if(mes>4||(mes==4&&dia>2)){
            cumplidos--;
        }
    }
    return cumplidos;
}

function problema1_funcion(){
    var valor = document.problema1.problema1_cantidad.value;
    if(valor!=""){
        if(!verificar_numero(valor)){
            alert("Debe de ingresar números en los campos de texto");
        }
        else{
            var resultado = parseFloat(valor);
            resultado = resultado*0.02;
            document.problema1.problema1_resultado.value = "$" + resultado;
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema1_funcion_borrar(){
    document.problema1.problema1_cantidad.value="";
    document.problema1.problema1_resultado.value="";
}

function problema2_funcion(){
    var valor1 = document.problema2.problema2_cantidad1.value;
    var valor2 = document.problema2.problema2_cantidad2.value;
    var valor3 = document.problema2.problema2_cantidad3.value;
    if(valor1!=""&&valor2!=""&&valor3!=""){
        if(verificar_numero(valor1)&&verificar_numero(valor2)&&verificar_numero(valor3)){
            var resultado = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3);
            resultado = resultado*0.1;
            document.problema2.problema2_resultado1.value = "$" + resultado;
            resultado += 5000;
            document.problema2.problema2_resultado2.value = "$" + resultado;
        }
        else{
            alert("Debe de ingresar números en los campos de texto");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema2_funcion_borrar(){
    document.problema2.problema2_cantidad1.value="";
    document.problema2.problema2_cantidad2.value="";
    document.problema2.problema2_cantidad3.value="";
    document.problema2.problema2_resultado1.value="";
    document.problema2.problema2_resultado2.value="";
}

function problema3_funcion(){
    var valor = document.problema3.problema3_cantidad.value;
    if(valor!=""){
        if(verificar_numero(valor)){
            var resultado = parseFloat(valor);
            resultado = resultado*0.85;
            document.problema3.problema3_resultado.value = "$" + resultado;
        }
        else{
            alert("Debe de ingresar números en los campos de texto");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema3_funcion_borrar(){
    document.problema3.problema3_cantidad.value="";
    document.problema3.problema3_resultado.value="";
}

function problema4_funcion(){
    var valor1 = document.problema4.problema4_cantidad1.value;
    var valor2 = document.problema4.problema4_cantidad2.value;
    var valor3 = document.problema4.problema4_cantidad3.value;
    var valor4 = document.problema4.problema4_cantidad4.value;
    var valor5 = document.problema4.problema4_cantidad5.value;
    if(valor1!=""&&valor2!=""&&valor3!=""&&valor4!=""&&valor5!=""){
        if(verificar_numero(valor1)&&verificar_numero(valor2)&&verificar_numero(valor3)&&verificar_numero(valor4)&&verificar_numero(valor5)){
            if((parseFloat(valor1)>=0&&parseFloat(valor1)<=10)&&(parseFloat(valor2)>=0&&parseFloat(valor2)<=10)&&(parseFloat(valor3)>=0&&parseFloat(valor3)<=10)&&(parseFloat(valor4)>=0&&parseFloat(valor4)<=10)&&(parseFloat(valor5)>=0&&parseFloat(valor5)<=10)){
                var resultado = parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
                resultado = resultado*5.5/30;
                resultado += parseInt(valor4)*3/10;
                resultado += parseInt(valor5)*1.5/10;
                document.problema4.problema4_resultado.value = resultado;
            }
            else{
                alert("Debe de ingresar números entre el 0 y el 10 en los campos de texto");
            }
        }
        else{
            alert("Debe de llenar los campos de texto");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema4_funcion_borrar(){
    document.problema4.problema4_cantidad1.value="";
    document.problema4.problema4_cantidad2.value="";
    document.problema4.problema4_cantidad3.value="";
    document.problema4.problema4_cantidad4.value="";
    document.problema4.problema4_cantidad5.value="";
    document.problema4.problema4_resultado.value="";
}

function problema5_funcion(){
    var valor1 = document.problema5.problema5_cantidad1.value;
    var valor2 = document.problema5.problema5_cantidad2.value;
    if(valor1!=""&&valor2!=""){
        var resultado1 = parseInt(valor1);
        var resultado2 = parseInt(valor2);
        var resultado3 = resultado1+resultado2;
        if(resultado3==0){
            alert("El grupo debe de contener al menos un alumno");
        }
        else{
            resultado1=resultado1*100/resultado3;
            resultado2=resultado2*100/resultado3;
            document.problema5.problema5_resultado1.value = "%" + resultado1;
            document.problema5.problema5_resultado2.value = "%"+resultado2;
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema5_funcion_borrar(){
    document.problema5.problema5_cantidad1.value="";
    document.problema5.problema5_cantidad2.value="";
    document.problema5.problema5_resultado1.value="";
    document.problema5.problema5_resultado2.value="";
}

function problema6_funcion(){
    var valor1 = document.problema6.problema6_cantidad1.value;
    var valor2 = document.problema6.problema6_cantidad2.value;
    var valor3 = document.problema6.problema6_cantidad3.value;
    if(valor1!=""&&valor2!=""&&valor3!=""){
        var resultado1 = parseInt(valor1);
        var resultado2 = parseInt(valor2);
        var resultado3 = parseInt(valor3);
        if(resultado1<1899){
            alert("La persona mas longeva registrada ha vivido 122 años, el año de nacimiento es incorrecta");
        }
        else{
            if(validar_nacimiento(resultado3, resultado2, resultado1)){
                if(resultado1>2021||(resultado1==2021&&resultado2>4)||(resultado1==2021&&resultado2==4&&resultado3>2)){
                    alert("La fecha que ingreso es incorrecta");
                }
                else{
                    document.problema6.problema6_resultado.value = anios_pasados(resultado3, resultado2, resultado1);
                }
                
            }
            else{
                alert("La fecha de nacimiento es incorrecta");
            }
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema6_funcion_borrar(){
    document.problema6.problema6_cantidad1.value="";
    document.problema6.problema6_cantidad2.value="";
    document.problema6.problema6_cantidad3.value="";
    document.problema6.problema6_resultado.value="";
}

function problema7_funcion(){
    var valor1 = document.problema7.problema7_cantidad1.value;
    var valor2 = document.problema7.problema7_cantidad2.value;
    if(valor1!=""&&valor2!=""){
        if(verificar_numero(valor1)&&verificar_numero(valor2)){
            var resultado1 = parseFloat(valor1);
            var resultado2 = parseFloat(valor2);
            var resultado3 = 0;
            if(resultado1==resultado2){
                resultado3=resultado1*resultado2;
            }
            else{
                if(resultado1>resultado2){
                    resultado3=resultado1-resultado2;
                }
                else{
                    resultado3=resultado1+resultado2;
                }
            }
            document.problema7.problema7_resultado.value = resultado3;  
        }
        else{
            alert("Debe de ingresar numeros en los campos de texto");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema7_funcion_borrar(){
    document.problema7.problema7_cantidad1.value="";
    document.problema7.problema7_cantidad2.value="";
    document.problema7.problema7_resultado.value="";
}

function problema8_funcion(){
    var valor1 = document.problema8.problema8_cantidad1.value;
    var valor2 = document.problema8.problema8_cantidad2.value;
    var valor3 = document.problema8.problema8_cantidad3.value;
    if(valor1!=""&&valor2!=""&&valor3!=""){
        if(verificar_numero(valor1)&&verificar_numero(valor2)&&verificar_numero(valor3)){
            var resultado1 = parseFloat(valor1);
            var resultado2 = parseFloat(valor2)
            var resultado3 = parseFloat(valor3);
            var resultado4 = 0;
            if(resultado1>=resultado2&&resultado1>=resultado3){
                resultado4=resultado1;
            }
            else{
                if(resultado2>=resultado1&&resultado2>=resultado3){
                    resultado4=resultado2;
                }
                else{
                    resultado4=resultado3;
                }
            }
            document.problema8.problema8_resultado.value = resultado4;
        }
        else{
            alert("Debe de ingresar numeros en los campos de texto");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema8_funcion_borrar(){
    document.problema8.problema8_cantidad1.value="";
    document.problema8.problema8_cantidad2.value="";
    document.problema8.problema8_cantidad3.value="";
    document.problema8.problema8_resultado.value="";
}

function problema9_funcion(){
    var valor = document.problema9.problema9_cantidad.value;
    if(valor!=""){
        var resultado = parseInt(valor);
        if(resultado<=60){
            var resultado2;
            if(resultado<=40){
                resultado2 = resultado*300;
            }
            else{
                if(resultado<=48){
                    resultado2 = 4000;
                    resultado-=40;
                    resultado2+=resultado*600;
                }
                else{
                    resultado2=5600;
                    resultado-=48;
                    resultado2+=resultado*900;
                }
            }
            document.problema9.problema9_resultado.value = "$"+resultado2;
        }
        else{
            alert("No se puede trabajar más de 12 horas al día en esta empresa");
        }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema9_funcion_borrar(){
    document.problema9.problema9_cantidad.value="";
    document.problema9.problema9_resultado.value="";
}

function problema10_funcion(){
    var valor1 = document.problema10.problema10_cantidad1.value;
    var valor2 = document.problema10.problema10_cantidad2.value;
    var valor3 = document.problema10.problema10_cantidad3.value;
    if(valor1!=""&&valor2!=""&&valor3!=""){
        var resultado1 = parseInt(valor1);
        var resultado2 = parseInt(valor2);
        var resultado3 = parseInt(valor3);
            if(validar_nacimiento(resultado3, resultado2, resultado1)){
                if(resultado1>2021||(resultado1==2021&&resultado2>4)||(resultado1==2021&&resultado2==4&&resultado3>2)){
                    alert("La fecha que ingreso es incorrecta");
                }
                else{
                    if(anios_pasados(resultado3, resultado2, resultado1)>40){
                        alert("En nuestra empresa no se registra un trabajador con más de 40 años laborando");
                    }
                    else{
                        var resultado4=anios_pasados(resultado3, resultado2, resultado1);
                        var resultado5=40000;
                        if(resultado4==0){
                            resultado5*=0.05;
                        }
                        else{
                            if(resultado4==1){
                                resultado5*=0.07;
                            }
                            else{
                                if(resultado4<5){
                                    resultado5*=0.1;
                                }
                                else{
                                    if(resultado4<10){
                                        resultado5*=0.15;
                                    }
                                    else{
                                        resultado5*=0.2;
                                    }
                                }
                            }
                        }
                        document.problema10.problema10_resultado.value="$"+resultado5;
                    }
                }
                
            }
            else{
                alert("La fecha que ingreso es incorrecta");
            }
    }
    else{
        alert("Debe de llenar los campos de texto");
    }
}

function problema10_funcion_borrar(){
    document.problema10.problema10_cantidad1.value="";
    document.problema10.problema10_cantidad2.value="";
    document.problema10.problema10_cantidad3.value="";
    document.problema10.problema10_resultado.value="";
}