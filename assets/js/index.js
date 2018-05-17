const isOk = `<i class="far fa-check-circle"></i>`;
const isNotOk = `<i class="far fa-times-circle"></i>`;
const isNotLoading = `<i class="far fa-question-circle"></i>`;
const isLoading = `<i class="spinner"></i>`;

const loaders = {
  arquivos: document.querySelector("#arquivosLoader"),
  modulos: document.querySelector("#modulosLoader"),
  permissao: document.querySelector("#permissaoLoader"),
  conexao: document.querySelector("#conexaoLoader"),
}

let count = 0;
$("#testarVariaveisBtn").on("click", () => {
  if(count > 0) return;
  $.post('http://localhost/API/testes.php', {function: 'testarPermissoes'}, function(res){
    document.querySelector("#resultado").innerHTML += `<span>${res}</span>`;
  });
  $.post('http://localhost/API/testes.php', {function: 'testarBanco'}, function(res){
    document.querySelector("#resultado").innerHTML += `<span>${res}</span>`;
  });
  $.post('http://localhost/API/testes.php', {function: 'testarModulos'}, function(res){
    document.querySelector("#resultado").innerHTML += `<span>${res}</span>`;
  });
  $.post('http://localhost/API/testes.php', {function: 'testarQuantidadeArquivos'}, function(res){
    document.querySelector("#resultado").innerHTML += `<span>${res}</span>`;
  });
  count++;
});
