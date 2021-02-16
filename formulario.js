function valida_envia(){
   	//valido las entradas vacias
	var nombre = document.fvalida.nombre.value;
	var apellidos = document.fvalida.apellidos.value;
	var correo = document.fvalida.correo.value;
	var telefono = document.fvalida.telefono.value;
	var problema = document.fvalida.problema.value;
	
   	//Validar nombre
	if (nombre.length==0){
      		alert("Tiene que escribir su nombre")
      		document.fvalida.nombre.focus()
      		return 0;
   	}
	
	//Validar apellidos
	if (apellidos.length==0){
      		alert("Tiene que escribir sus apellidos")
      		document.fvalida.apellidos.focus()
      		return 0;
   	}
	
	//Validar correo
	if (correo.length==0){
      		alert("Tiene que escribir su correo")
      		document.fvalida.correo.focus()
      		return 0;
	}else if(!(/\S+@\S+\.\S+/.test(correo))){
			alert('ERROR: Debe escribir un correo válido');
			return 0;
    }
	
	//Validar telefono
	if (telefono.length==0){
			alert("Tiene que escribir su telefono")
      		document.fvalida.telefono.focus()
      		return 0;
   	}else if(isNaN(telefono)){
			alert('ERROR: Debe escribir un telefono valido');
			return 0;
    }
	
	//Validar problema
	if (problema.length==0){
      		alert("Tiene que escribir su problema")
      		document.fvalida.problema.focus()
      		return 0;
   	}
	
	
	
	
   	//el formulario se envia
   	alert("Muchas gracias por enviar el formulario");
   	document.fvalida.submit();
}