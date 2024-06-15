async function buscarEndereco (cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        var consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultarCepConvertido = await consultarCep.json();
        if (consultarCepConvertido.erro) {
            throw Error('CEP não existente!');
        }
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        logradouro.value = consultarCepConvertido.logradouro;
        bairro.value = consultarCepConvertido.bairro;
        cidade.value = consultarCepConvertido.localidade;
        estado.value = consultarCepConvertido.uf;

        console.log(consultarCepConvertido)
    } catch(erro) {
        mensagemError.innerHTML = `<p>Cep não encontrado, por favor, digite novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarEndereco(cep.value));
