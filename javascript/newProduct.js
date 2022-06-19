function showData(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name === '') {
        document.getElementById("error-name").innerHTML = 'Nombre: no puede estar vacio';
    }else{
        document.getElementById("error-name").innerHTML = '';
    }
    let price = document.getElementById("price").value;
    if (price === '') {
        document.getElementById("error-price").innerHTML = 'Precio: no puede estar vacio';
    } else {
        document.getElementById("error-price").innerHTML = '';
    }
    let interventory = document.getElementById("interventory").value;
    if (interventory === '') {
        document.getElementById("error-interventory").innerHTML = 'Interventory: no puede estar vacio';
    } else {
        document.getElementById("error-interventory").innerHTML = '';
    }

    if (name === '' || price === '' || interventory === '') {
        return false;
    }



    console.log('se impimio', name, ' ', price, ' ', interventory)
    document.getElementById("resultado-nombre").innerHTML = name;
    document.getElementById("resultado-precio").innerHTML = price;
    document.getElementById("resultado-interventory").innerHTML = interventory;
}




