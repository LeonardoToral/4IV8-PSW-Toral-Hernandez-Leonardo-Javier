function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if((teclado>=65&&teclado<=90)||teclado==44){
        return true;
    }
    return false;
}

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;
    //identificar como dividir el texto escrito por espacios
    var p1_array = p1_input.split(' ').reverse();
    //habia   aibah

    //construir la nueva cadena invertida
    var p1_res = '';

    p1_array.forEach(function (palabra, i){
        //si es el principio o es el final de la cadena
        //y no agregamos espacios en blanco
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra; 
        alert(i);
    });
    //imprimir el resultado
    document.querySelector('#p1-output').textContent = p1_res;
}


//si es el principio o es el final de la cadena
//sieselprincipiooeselfinaldelacadena
//invertir
//si es elprincipiooeselfinaldelacadena


function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //construir los vectores

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores

    v1 = v1.sort(function (a, b){
        return b-a;
    });

    v2 = v2.sort(function (a, b){
        return b-a;
    });

    //invertir el segundo vector

    v2 = v2.reverse();

    //producto escalar
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent =
    'Producto Escalar Minimo : '+ p2_producto;

}

function validarentrada(palabra){
    var longitud = palabra.length;
    for(var i=0;i<longitud;i++){
        if((i==0&&palabra.charCodeAt(i)==44)||(i==longitud-1&&palabra.charCodeAt(i)==44)||(i!=0&&i!=longitud-1&&palabra.charCodeAt(i)==44&&palabra.charCodeAt(i-1)==44)){
            if(i==0){
                alert("No debe de haber una coma al inicio de la entrada");
            }
            else{
                if(i==longitud-1){
                    alert("No debe de haber una coma al final de la cadena");
                }
                else{
                    alert("No debe de haber más de una coma entre palabras");
                }
            }
            return false;
        }
    }
    return true;
}
function problema3(){
    var p3_input = document.querySelector('#p3-input').value;
    var longitud;
    var maximo = 0;
    var auxiliar;
    var cubeta = [27];
    var p3_array;
    var respuesta;
    var auxiliar2=0;
    var aux_array;
    var bandera;
    if(p3_input==""){
        alert("El campo de entrada no debe de estar vacío");
        document.querySelector('#p3-input').value = "";
        document.querySelector('#p3-output').textContent = 'Esperando respuesta ...';
    }
    else{
        if(validarentrada(p3_input)){
            p3_array = p3_input.split(',');
            p3_array.forEach(function (palabra){
                for(var j=0;j<26;j++){
                    cubeta[j] = false;
                }
                auxiliar = 0;
                longitud = palabra.length;
                for(var j=0;j<longitud;j++){
                    if(!cubeta[palabra.charCodeAt(j)-65]){
                        auxiliar++;
                        cubeta[palabra.charCodeAt(j)-65] = true;
                    }
                }
                if(auxiliar>maximo){
                    respuesta = palabra;
                    maximo = auxiliar;
                    auxiliar2 = 1;
                }
                else{
                    bandera = true;
                    aux_array = respuesta.split(' ');
                    //Esto nos va a ayudar a que no se repitan palabras que pueden ser la posible respuesta
                    aux_array.forEach(function(palabra_aux){
                        if(palabra_aux==palabra){
                            bandera = false;
                        }
                    });
                    if(bandera == true){
                        if(auxiliar==maximo){
                            auxiliar2++;
                            if(auxiliar2==2){
                                respuesta+=" y ";
                                respuesta+=palabra;
                            }
                            else{
                                respuesta = palabra + " , " + respuesta;
                            }
                        }
                    }
                }
            });
            document.querySelector('#p3-output').textContent = 'La respuesta es: ' + respuesta;
        }
        else{
            document.querySelector('#p3-input').value = "";
            document.querySelector('#p3-output').textContent = 'Esperando respuesta ...';
        }
    }
}