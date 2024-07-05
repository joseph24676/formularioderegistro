function guardarDatosLocalmente() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var cedula = document.getElementById("cedula").value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;

    var cliente = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        direccion: direccion,
        cedula: cedula,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento,
        genero: genero
    };

    localStorage.setItem('cliente', JSON.stringify(cliente));
    console.log("Datos guardados localmente: ", cliente);
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Expresión regular para solo letras y espacios
    var soloLetras = /^[A-Za-z\s]+$/;

    if (nombre === "" || !soloLetras.test(nombre)) {
        alert("Por favor, ingresa tu nombre. Solo se admiten letras.");
        return false;
    }

    if (apellidos === "" || !soloLetras.test(apellidos)) {
        alert("Por favor, ingresa tus apellidos. Solo se admiten letras.");
        return false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".com")) { 
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (genero === null) {
        alert("Por favor, selecciona tu género.");
        return false;
    }

    if (fechaNacimiento === "") {
        alert("Por favor, ingresa tu fecha de nacimiento.");
        return false;
    }

    return true; // Permitir el envío del formulario
}

function mostrarMensaje() {
    if (validarFormulario()) {
        guardarDatosLocalmente();
        alert("Datos ingresados"); // Mensaje de éxito al enviar
        return true; // Permitir el envío del formulario
    }

    return false; // No enviar si falla la validación
}

document.getElementById("nombre").addEventListener("input", function() {
    var nombre = this.value;
    var soloLetras = /^[A-Za-z\s]+$/;
    var nombreError = document.getElementById("nombreError");

    if (!soloLetras.test(nombre)) {
        nombreError.textContent = "Solo se admiten letras";
    } else {
        nombreError.textContent = "";
    }
});

document.getElementById("apellidos").addEventListener("input", function() {
    var apellidos = this.value;
    var soloLetras = /^[A-Za-z\s]+$/;
    var apellidosError = document.getElementById("apellidosError");

    if (!soloLetras.test(apellidos)) {
        apellidosError.textContent = "Solo se admiten letras";
    } else {
        apellidosError.textContent = "";
    }
});

document.getElementById("email").addEventListener("input", function() {
    var email = this.value;
    var emailError = document.getElementById("emailError");

    if (!email.includes("@") || !email.includes(".com")) {
        emailError.textContent = "Debe llevar @ y .com";
    } else {
        emailError.textContent = "";
    }
});

document.getElementById("cedula").addEventListener("input", function() {
    var cedula = this.value;
    var cedulaError = document.getElementById("cedulaError");

    if (!/^\d*$/.test(cedula)) {
        cedulaError.textContent = "Solo se admiten números";
    } else if (cedula.length > 10) {
        cedulaError.textContent = "Solo se admiten 10 números";
    } else {
        cedulaError.textContent = "";
    }
});

document.getElementById("telefono").addEventListener("input", function() {
    var telefono = this.value;
    var telefonoError = document.getElementById("telefonoError");

    if (!/^\d*$/.test(telefono)) {
        telefonoError.textContent = "Solo se admiten números";
    } else if (telefono.length > 10) {
        telefonoError.textContent = "Solo se admiten 10 números";
    } else {
        telefonoError.textContent = "";
    }
});
