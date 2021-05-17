const FormPatient = document.getElementById('FormPatient');
const buttonPatient = document.getElementById('buttonPatient');

buttonPatient.addEventListener('click', () => {    
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

    const jsonPatient = JSON.stringify({
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

    console.log(JSON.parse(jsonPatient));
});