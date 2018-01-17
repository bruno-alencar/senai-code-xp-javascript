var dadosCliente = {
    endereco: {

    },
    contato: {

    }
};

function validarFormulario() {
    var objectEndereco = {
        country: document.getElementById("country").Value,
        city: document.getElementById("city").Value,
        state: document.getElementById("state").Value,
        zipcode: document.getElementById("zip-code").Value,
        address1: document.getElementById("address1").Value,
        address2: document.getElementById("address2").Value
    };
    
    var objectContact = {
        firstName: document.getElementById("first-name").Value,
        lastName: document.getElementById("last-name").Value,
        email: document.getElementById("email").Value,
        phone: document.getElementById("phone").Value
    }

    validarEndereco(objectEndereco);
    validarContato(objectEndereco);
}

function validarEndereco() {

}

function validarContato() {

}