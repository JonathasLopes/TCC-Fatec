const FormCirurgy = document.getElementById('FormCirurgy');
const buttonAddress = document.getElementById('buttonAddress');

FormCirurgy.addEventListener('click', () => {
    let cep = FormCirurgy.cep.value;
    let number = FormCirurgy.number.value;
    let uf = FormCirurgy.uf.value;
    let district = FormCirurgy.district.value;
    let street = FormCirurgy.street.value;
    let city = FormCirurgy.city.value;
    let complement = FormCirurgy.complement.value;

    const jsonCirurgy = JSON.stringify({
        CEP: cep,
        Numero: number,
        UF: uf,
        Bairro: district,
        Logradouro: street,
        Cidade: city,
        Complemento: complement,
    });

    console.log(JSON.parse(jsonCirurgy));
});