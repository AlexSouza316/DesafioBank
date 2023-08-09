// Todos
// TODO: Faltou: trativa de error diretamente no input e com a fonte vermelha

//Razão Social
// TODO: Faltou: Não deve conter caracter especial (!, $, %, &, etc);

// Faturamento anual
// TODO: Faltou: Deve possuir máscara: R$ 0,00.

// Como deseja ser chamado
//TODO: Faltou: Caso o checkbox "mesmo nome do representante legal” for selecionado, deve-se copiar o valor do campo "nome do representante legal” e colocar no campo e desabilitá-lo.

//CNPJ
function formatarCNPJ(cnpj) {
  cnpj.value = cnpj.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

// CPF
function formatarCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona hífen antes dos últimos dois dígitos
}

// Quantidade de Funcionários
function formatarQuantidadeFuncionarios(quantidadeFuncionarios) {
  quantidadeFuncionarios.value = quantidadeFuncionarios.value
    .replace(/\D/g, "")
    .replace(/\D/g, ""); // Remove caracteres não numéricos
}

// Faturamento Anual
function formatarFaturamentoAnual(faturamentoAnual) {
  faturamentoAnual.value = faturamentoAnual.value
    .replace(/\D/g, "")
    .replace(/\D/g, ""); // Remove caracteres não numéricos
}

function validarCampos() {
  var cpf = document.getElementById("cpf").value;
  var cnpj = document.getElementById("cnpj").value;
  var razaoSocial = document.getElementById("razao-social").value;
  var nomeRepresentante = document.getElementById("nome-representante").value;
  var segundoNome = document.getElementById("segundo-nome").value;
  var faturamentoAnual = document.getElementById("faturamento-anual").value;
  var quantidadeFuncionarios = document.getElementById(
    "quantidade-funcionarios"
  ).value;

  if (
    cpf === "" ||
    cnpj === "" ||
    razaoSocial === "" ||
    nomeRepresentante === "" ||
    segundoNome === "" ||
    faturamentoAnual === "" ||
    quantidadeFuncionarios === ""
  ) {
    if (cpf === "") {
      alert("O campo CPF é obrigatório!");
    }

    if (cnpj === "") {
      alert("O campo Cnpj é obrigatório!");
    }

    if (razaoSocial === "") {
      alert("O campo Razão Social é obrigatório!");
    }

    if (nomeRepresentante === "") {
      alert("O campo Nome do Representante é obrigatório!");
    }

    if (segundoNome === "") {
      alert("O campo Segundo Nome é obrigatório!");
    }

    if (faturamentoAnual === "") {
      alert("O campo  é obrigatório!");
    }

    if (quantidadeFuncionarios === "") {
      alert("O campo  é obrigatório!");
    }

    return false;
  }

  // CPF
  if (cpf.length === 14 || /^(\d)\1{10}$/.test(cpf)) {
    if (cpf.length === 14 || /^(\d)\1{10}$/.test(cpf)) {
    }
    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("CPF inválido!");
  }

  //Razão Social
  if (razaoSocial.length <= 30) {
    return false;
  } else {
    alert("Tamanho máximo de 30 caracteres!");
    // implementar trativa de mensagem de error
  }
  //CNPJ
  if (cnpj.length === 18 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("CNPJ inválido!");
  }

  //Nome do Representante
  if (nomeRepresentante.length <= 20) {
    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("Tamanho máximo de 20 caracteres.");
  }

  //Como deseja ser chamado
  if (nomeRepresentante.length <= 10) {
    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("Tamanho máximo de 10 caracteres.");
  }

  return true;
}
