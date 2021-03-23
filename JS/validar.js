function validar(formulario){
    /**
    Queremos validar que se escriban mas de 5 caracteres eb 
    el campo de nombre
     */
    if(formulario.nombre.value.length<5){
        alert("Por favor escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
        //focus posiciona el cursor
        return false;
    }
    /**
        Validar que acepte unicamente letras
     */

    var checkOk = "qwertyuiopasdfghjklñzxcvbnm"
    +"QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value;

    var allValid = true;

    for(var i=0; i<checkStr.length;i++){
        var ch = checkStr.charAt(i);
        for(var j=0;j<checkOk.length;j++)
            if(ch == checkOk.charAt(j))
                break;
        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    /**
    Validar solo numeros
     */
    var checkOk = "1234567890";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i=0; i<checkStr.length;i++){
        var ch = checkStr.charAt(i);
        for(var j=0;j<checkOk.length;j++)
            if(ch == checkOk.charAt(j))
                break;
        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo numeros en el campo Edad");
        formulario.nombre.focus();
        return false;
    }

    /**
     Validar correo electronico
     Expresiones regulares
     a poder diferenciar una cadena de caracteres
     y definir que caracteres son validos de acuerdo
     a una condicion
     */

     var txt = formulario.email.value;

     //Expresion regular

     var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

     alert("Email"+(b.test(txt)?" ":" no ")+"valido");
     return b.test(txt);

}