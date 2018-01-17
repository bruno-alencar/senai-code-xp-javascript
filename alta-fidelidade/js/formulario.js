var cliente = {
    endereco: {},
    contato: {}
};

function validarFormulario() {
    event.preventDefault();

    validarContato();
    // if (validarEndereco() && validarContato())
    //     console.log("Validação esá ok.. pode prosseguir");
    // else
    //     console.log("validação não passou... preencher todos os campos");
}

function validarEndereco() {
    var address = {
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zip-code").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value
    };

    if (address.country != 0 && address.country != '1' && address.country != '0')
        return false;
    else if (address.city != '0' && address.city != '1' && address.city != '0')
        return false;
    else if (address.state.trim() == '')
        return false;
    else if (address.zipcode.trim() == '')
        return false;
    else if (address.address1.trim() == '')
        return false;
    else if (address.address2.trim() == '')
        return false;
    else {
        cliente.endereco = endereco;
        return true;
    }
}

function validarContato() {

    var contact = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    }

    var standard = document.getElementById("standard");
    var ultra = document.getElementById("ultra-speed");

    var package = "";

    if(standard.checked)
        package = standard.value;
    else 
        package = ultra.value;
        
    contact.package = package;

    if (contact.firstName.trim() == '')
        return false;
    else if (contact.lastName.trim() == '')
        return false;
    else if (contact.email.trim() == '')
        return false;
    else if (contact.firphonestName.trim() == '')
        return false;
    else {
        cliente.contato = contact;
        return true;
    }
}