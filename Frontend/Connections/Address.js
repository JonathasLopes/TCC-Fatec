const FormAddress = document.getElementById('FormAddress');
const buttonAddress = document.getElementById('buttonAddress');

FormAddress.addEventListener('click', () => {
    let endereco = "";
    
    let name = FormAddress.pac_nome.value;
    let sobrenome = FormAddress.pac_sobrenome.value;
    let tipoSanguinio = (FormAddress.pac_sangue.value).toUpperCase();
    let rg = FormAddress.pac_rg.value;
    let sexo = FormAddress.pac_sex.value;
    let cpf = FormAddress.pac_cpf.value;
    let nomeMae = FormAddress.pac_mother.value;
    let nomePai = FormAddress.pac_father.value;
    let telefone = FormAddress.pac_phone.value;
    let convenio = FormAddress.pac_conv.value;
    let nascimento = new Date(Date.parse(FormAddress.pac_nasc.value));

    const jsonAddress = JSON.stringify({
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
    });

    console.log(JSON.parse(jsonAddress));
    

    formsPatient.pac_nome.value = ' '; 
});