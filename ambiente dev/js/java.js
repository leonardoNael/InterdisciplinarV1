var acertos = 0;
var loginBlock = 3;
var div = '';

var local = '';

var pagAtual = 1;
var errada = ["e1", "e2", "e3"];

var quiz = ["quiz1.html", "quiz2.html", "quiz3.html", "quiz4.html", "quiz5.html", "quiz6.html",
    "quiz7.html", "quiz8.html", "quiz9.html", "quiz10.html", "quiz11.html", "quiz12.html" ];

var tempo;

/*Login e cadastro*/
function login()
{
    var usuario = document.getElementById("txtUsuario").value;
    var senha = document.getElementById("txtSenha").value;

    if(usuario != "admin")
    {
        alert("Usuário não encontrado.");
    }
    else if(usuario == "admin" && senha != "admin")
    {
        alert("Senha incorreta!");
        loginBlock--;
        alert("Tentativas restantes: "+loginBlock);
    }
    else if(usuario == "admin" && senha == "admin")
    {
        window.location.href = "areadoaluno.html";
    } 

    document.getElementById("txtUsuario").value = '';
    document.getElementById("txtSenha").value = '';

    if(loginBlock == 0)
    {
        document.getElementById("txtUsuario").disabled = true;
        document.getElementById("txtSenha").disabled = true;

        tempo = setTimeout(voltar, 30000);
        alert("Acesso bloqueado! Aguarde 30 segundos para tentar novamente");
    }

}

function voltar(){
    document.getElementById("txtUsuario").disabled = false;
    document.getElementById("txtSenha").disabled = false;
}

function versenha()
{
    document.getElementById("txtSenha").type = "text";
    document.getElementById("vendo").style.display = 'block';
    document.getElementById("naovendo").style.display = 'none';

}

function naoversenha()
{
    document.getElementById("txtSenha").type = "password";
    document.getElementById("vendo").style.display = 'none';
    document.getElementById("naovendo").style.display = 'block';
}

function enviarCadastro()
{
    var senha = document.getElementById("senha").value;
    var cfsenha = document.getElementById("cfsenha").value;

    if(senha != cfsenha)
    {
        alert("As senhas não conferem.");
    }
    else
    {
        alert("Cadastro concluído com sucesso!");
        window.location.href = 'index.html'
    }
}
/*Login e cadastro*/

/*Area do aluno*/
function sair()
{
    alert("Nos vemos em breve. Volte logo!");
    window.location.href = 'index.html'
}
/*Area do aluno*/

/*Jogo abaixo, não alterar*/

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop1(ev)
{
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
    
    document.getElementById("botoesJ").style.display = 'block';  

    if(data != document.getElementById("c"))
    {
        document.getElementById("c").style.visibility = 'hidden'
        for(var inc = 0; inc < 4; inc++)
        {   
            if(data != errada[inc])
            {
                document.getElementById(errada[inc]).style.visibility = 'hidden';
            }
        }
    }
    
    div = data;
}

function enviar1()
{   
    if(div == document.getElementById("c"))
    {  
        window.location = quiz[1];
    }
    else
    {
        window.location = quiz[1];
    }
}
function enviar2()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[2];
    }
    else
    {
        window.location = quiz[2];
    }
}
function enviar3()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[3];
    }
    else
    {
        window.location = quiz[3];
    }
}
function enviar4()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[4];
    }
    else
    {
        window.location = quiz[4];
    }
}
function enviar5()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[5];
    }
    else
    {
        window.location = quiz[5];
    }
}
function enviar6()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[6];
    }
    else
    {
        window.location = quiz[6];
    }
}
function enviar7()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[7];
    }
    else
    {
        window.location = quiz[7];
    }
}
function enviar8()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[8];
    }
    else
    {
        window.location = quiz[8];
    }
}
function enviar9()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[9];
    }
    else
    {
        window.location = quiz[9];
    }
}
function enviar10()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[10];
    }
    else
    {
        window.location = quiz[10];
    }
}
function enviar11()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = quiz[11];
    }
    else
    {
        window.location = quiz[11];
    }
}
function enviar12()
{   

    if(div == document.getElementById("c"))
    {  
        window.location = '../posJogo.html';
    }
    else
    {
        window.location = '../posJogo.html';
    }
}
function corrigir()
{
    window.location.reload();
}
/*Jogo acima*/