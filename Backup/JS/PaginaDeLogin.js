// Função para verificar se o usuário está logado
function verificarLogin() {
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        // Usuário está logado
        return JSON.parse(usuarioLogado);
    } else {
        // Usuário não está logado
        return null;
    }
}

// Função para fazer login
function fazerLogin(usuario) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
}

// Função para fazer logout
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
}

// Verifica se o usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    var usuario = verificarLogin();
    if (usuario) {
        // Usuário está logado, atualiza a interface
        atualizarInterface(usuario);
    }
});

// Atualiza a interface para exibir o nome do usuário
function atualizarInterface(usuario) {
    var botaoLogin = document.querySelector('.botao-de-login');
    botaoLogin.innerHTML = usuario.primeiroNome; // Substitui o ícone de login pelo nome do usuário
    // Você também pode adicionar um link para a página de perfil do usuário, por exemplo
    // botaoLogin.href = 'perfil.html';
}

// Exemplo de uso:
// Faz login quando o usuário submete o formulário
document.querySelector('.formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var usuarioInput = document.getElementById('usuario').value;
    var senhaInput = document.getElementById('senha').value;

    // Verifica as credenciais (pode ser uma verificação mais robusta)
    if (usuarioInput === 'usuario' && senhaInput === 'senha') {
        // Cria um objeto de usuário (pode ser obtido de um banco de dados, por exemplo)
        var usuario = {
            primeiroNome: 'Usuário'
            // Adicione mais informações do usuário conforme necessário
        };
        fazerLogin(usuario); // Faz login e armazena o usuário
        atualizarInterface(usuario); // Atualiza a interface
    } else {
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});

// Faz logout quando o usuário clica no botão de logout
document.getElementById('botao-logout').addEventListener('click', function() {
    fazerLogout(); // Faz logout
    // Você também pode redirecionar o usuário para a página de login, por exemplo
    // window.location.href = 'login.html';
    location.reload(); // Atualiza a página para refletir o logout
});
