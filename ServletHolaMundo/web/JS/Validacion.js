/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validarRegistro(formulario){
    var nom = formulario.nombre.value;
    var longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de nombre");
        formulario.nombre.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena nombres de longitud menor o igual a 20 caracteres");
        formulario.nombre.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio de cada nombre");
        formulario.nombre.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del nombre");
                    formulario.nombre.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el nombre");
                        formulario.nombre.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("Los nombres deben de iniciar con letras mayuscula");
                            formulario.nombre.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio de un nombre");
                    formulario.nombre.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de nombre debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formulario.nombre.focus();
            return false;
        }
    }
    nom = formulario.appat.value;
    longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de apellido paterno");
        formulario.appat.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena apellidos paternos de longitud menor o igual a 20 caracteres");
        formulario.appat.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio del apellido paterno");
        formulario.appat.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del apellido paterno");
                    formulario.appat.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el apellido paterno");
                        formulario.appat.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("El apellido paterno debe de iniciar con letras mayuscula");
                            formulario.appat.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio del apellido paterno");
                    formulario.appat.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de apellido paterno debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formulario.appat.focus();
            return false;
        }
    }
    nom = formulario.apmat.value;
    longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de apellido materno");
        formulario.apmat.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena apellidos maternos de longitud menor o igual a 20 caracteres");
        formulario.apmat.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio del apellido materno");
        formulario.apmat.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del apellido materno");
                    formulario.apmat.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el apellido materno");
                        formulario.apmat.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("El apellido materno debe de iniciar con letras mayuscula");
                            formulario.apmat.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio del apellido materno");
                    formulario.apmat.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de apellido materno debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formulario.apmat.focus();
            return false;
        }
    }
    nom = formulario.edad.value;
    if(nom==""){
        alert("Debe de llenar el campo de edad");
        formulario.edad.focus();
        return false;
    }
    nom = formulario.correo.value;
    longitud = nom.length;
    if(longitud>30){
        alert("Por el momento nuestra base de datos solo almacena correos de longitud menor o igual a 30 caracteres");
        formulario.correo.focus();
        return false;
    }
    if(nom==""){
        alert("Debe de llenar el campo de correo");
        formulario.correo.focus();
        return false;
    }
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    if(!b.test(nom)){
        alert("El correo es invalido");
        formulario.correo.focus();
        return false;
    }
    return true;
}

function validarE(formularioE){
    var nom2 = formularioE.ideliminar.value;
    if(nom2==""){
        alert("Debe de ingresar un número en el campo de eliminar usuario");
        formularioE.ideliminar.focus();
        return false;
    }
    return true;
}

function validarA(formularioA){
    var nom = formularioA.id_act.value;
    if(nom==""){
        alert("Debe de llenar el campo del id");
        formularioA.id_act.focus();
        return false;
    }
    nom = formularioA.nom_act.value;
    var longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de nombre");
        formularioA.nom_act.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena nombres de longitud menor o igual a 20 caracteres");
        formularioA.nom_act.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio de cada nombre");
        formularioA.nom_act.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del nombre");
                    formularioA.nom_act.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el nombre");
                        formularioA.nom_act.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("Los nombres deben de iniciar con letras mayuscula");
                            formularioA.nom_act.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio de un nombre");
                    formularioA.nom_act.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de nombre debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formularioA.nom_act.focus();
            return false;
        }
    }
    nom = formularioA.appat_act.value;
    longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de apellido paterno");
        formularioA.appat_act.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena apellidos paternos de longitud menor o igual a 20 caracteres");
        formularioA.appat_act.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio del apellido paterno");
        formularioA.appat_act.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del apellido paterno");
                    formularioA.appat_act.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el apellido paterno");
                        formularioA.appat_act.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("El apellido paterno debe de iniciar con letras mayuscula");
                            formularioA.appat_act.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio del apellido paterno");
                    formularioA.appat_act.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de apellido paterno debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formularioA.appat_act.focus();
            return false;
        }
    }
    nom = formularioA.apmat_act.value;
    longitud = nom.length;
    if(nom==""){
        alert("No debe de dejar en blanco el campo de apellido materno");
        formularioA.apmat_act.focus();
        return false;
    }
    if(longitud>20){
        alert("Por el momento nuestra base de datos solo almacena apellidos maternos de longitud menor o igual a 20 caracteres");
        formularioA.apmat_act.focus();
        return false;
    }
    if(nom.charCodeAt(0)<65||nom.charCodeAt(0)>90){
        alert("Debe de ingresar una letra mayuscula al inicio del apellido materno");
        formularioA.apmat_act.focus();
        return false;
    }
    for(var i=1;i<longitud;i++){
        if((nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90)||(nom.charCodeAt(i)>=97&&nom.charCodeAt(i)<=122)||nom.charCodeAt(i)==32){
            if(nom.charCodeAt(i)==32){
                if(i==longitud-1){
                    alert("No se debe de ingresar espacios al final del apellido materno");
                    formularioA.apmat_act.focus();
                    return false;
                }
                else{
                    if(nom.charCodeAt(i-1)==32){
                        alert("No se deben de poner espacios seguidos en el apellido materno");
                        formularioA.apmat_act.focus();
                        return false;
                    }
                    else{
                        if(nom.charCodeAt(i+1)>=97&&nom.charCodeAt(i+1)<=122){
                            alert("El apellido materno debe de iniciar con letras mayuscula");
                            formularioA.apmat_act.focus();
                            return false;
                        }
                    }
                }
            }
            else{
                if(nom.charCodeAt(i)>=65&&nom.charCodeAt(i)<=90&&nom.charCodeAt(i-1)!=32){
                    alert("Solo se deben de escribir mayusculas al inicio del apellido materno");
                    formularioA.apmat_act.focus();
                    return false;
                }
            }
        }
        else{
            alert("En el campo de apellido materno debe de ingresar letras minusculas, mayusculas y espacios solamente");
            formularioA.apmat_act.focus();
            return false;
        }
    }
    nom = formulario.eda_act.value;
    if(nom==""){
        alert("Debe de llenar el campo de edad");
        formularioA.eda_act.focus();
        return false;
    }
    nom = formularioA.cor_act.value;
    longitud = nom.length;
    if(longitud>30){
        alert("Por el momento nuestra base de datos solo almacena correos de longitud menor o igual a 30 caracteres");
        formularioA.cor_act.focus();
        return false;
    }
    if(nom==""){
        alert("Debe de llenar el campo de correo");
        formularioA.cor_act.focus();
        return false;
    }
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    if(!b.test(nom)){
        alert("El correo es invalido");
        formularioA.cor_act.focus();
        return false;
    }
    return true;
}

