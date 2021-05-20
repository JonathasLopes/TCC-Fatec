const FormPatient = document.getElementById('FormPatient');
const buttonPatient = document.getElementById('buttonPatient');

buttonPatient.addEventListener('click', () => {  
    const urlAddress = 'http://localhost:3333/address';
    const urlPatient = 'http://localhost:3333/patient';

    let name = FormPatient.pac_nome.value;
    let sobrenome = FormPatient.pac_sobrenome.value;
    let tipoSanguinio = (FormPatient.pac_sangue.value).toUpperCase();
    let rg = FormPatient.pac_rg.value;
    let sexo = FormPatient.pac_sex.value;
    let cpf = FormPatient.pac_cpf.value;
    let nomeMae = FormPatient.pac_mother.value;
    let nomePai = FormPatient.pac_father.value;
    let telefone = FormPatient.pac_phone.value;
    let convenio = FormPatient.pac_conv.value;
    let nascimento = new Date(Date.parse(FormPatient.pac_nasc.value));
    let cep = FormPatient.cep.value;
    let number = FormPatient.number.value;
    let uf = (FormPatient.uf.value).toUpperCase();
    let district = FormPatient.district.value;
    let street = FormPatient.street.value;
    let city = FormPatient.city.value;
    let complement = FormPatient.complement.value;

    const jsonPatient = {
        nome: name,
        sobrenome: sobrenome,
        tipo_sanguineo: tipoSanguinio,
        data_nasc: nascimento,
        RG: rg,
        Sexo: sexo,
        CPF: cpf,
        Nome_Mae: nomeMae,
        Nome_Pai: nomePai,
        Telefone: telefone,
        convenio: convenio,
    };

    const jsonAddress = {
        CPF: cpf,
        CEP: cep,
        Numero: number,
        UF: uf,
        Bairro: district,
        Logradouro: street,
        Cidade: city,
        Complemento: complement,
    };

    const postAddress = {
        method: "POST",
        body: JSON.stringify(jsonAddress),
        headers: {
            "Content-type": "application/json",
        }
    }

    const postPatient = {
        method: "POST",
        body: JSON.stringify(jsonPatient),
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

    FetchWithTimeout(urlPatient, postPatient).then(() => FetchWithTimeout(urlAddress, postAddress));
});