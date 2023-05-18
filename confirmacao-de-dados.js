
// CNPJ
input.addEventListener("cnpj", function () {
  // Remove qualquer caractere não numérico usando uma expressão regular
  this.value = this.value.replace(/\D/g, "");
}); // DANDO ERRO

function formatarCNPJ(cnpj) {
  cnpj.value = cnpj.value
  .replace(/^(\d{2})(\d)/, "$1.$2")
  .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
  .replace(/\.(\d{3})(\d)/, ".$1/$2")
  .replace(/(\d{4})(\d)/, "$1-$2")
}

function validarCNPJ() {
  var cnpj = document.getElementById("cnpj").value;

  if (cnpj === "") {
    alert("O campo cnpj é obrigatório!");
    return false;
  }

  cnpj = cnpj.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cnpj.length == 18 || /^(\d)\1{10}$/.test(cnpj)) {


    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("cnpj inválido!");
  }


  return true;
}



// CPF
input.addEventListener("cpf", function () {
  // Remove qualquer caractere não numérico usando uma expressão regular
  this.value = this.value.replace(/\D/g, "");
});

function formatarCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona hífen antes dos últimos dois dígitos
}

function validarCPF() {
  var cpf = document.getElementById("cpf").value;

  if (cpf === "") {
    alert("O campo CPF é obrigatório!");
    return false;
  }

  cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cpf.length == 14 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  } else {
    // implementar trativa de mensagem de error
    alert("CPF inválido!");
  }



  return true;
}
