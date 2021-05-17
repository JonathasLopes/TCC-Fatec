const FormAddress = document.getElementById('FormAddress');
const buttonAddress = document.getElementById('buttonAddress');
const url = 'http://localhost:3333/address/search?cep=74145852&num=98';

buttonAddress.addEventListener('click', () => {
    let cep = FormAddress.cep.value;
    let number = FormAddress.number.value;
    let uf = (FormAddress.uf.value).toUpperCase();
    let district = FormAddress.district.value;
    let street = FormAddress.street.value;
    let city = FormAddress.city.value;
    let complement = FormAddress.complement.value;

    const jsonAddress = {
        CEP: cep,
        Numero: number,
        UF: uf,
        Bairro: district,
        Logradouro: street,
        Cidade: city,
        Complemento: complement,
    };

    const post = {
        method: "POST",
        body: JSON.stringify(jsonAddress),
        headers: {
            "Content-type": "application/json",
        }
    }

    const get = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }
    }

    function FetchWithTimeout(url, options, timeout = 15000) {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) =>            
                setTimeout(() => {
                    reject(new Error('Serviço indisponível ' + url))
                }, timeout)
            )
        ]);
    }

    FetchWithTimeout(url, get).then(resp => console.log(resp.body));
});