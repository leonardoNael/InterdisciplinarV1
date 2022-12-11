var acertos = 0;
var loginBlock = 3;
var R = ["certa1","certa2","certa3","certa4","certa5","certa6","certa7","certa8","certa9","certa10","certa11","certa12"];
var errada = ["errada1","errada2","errada3","errada4","errada5","errada6","errada7","errada8","errada9","errada10","errada11","errada12"]

function login()
{
    var usuario = document.getElementById("txtUsuario").value;
    var senha = document.getElementById("txtSenha").value;

    if(usuario != "admin")
    {
        alert("Usuário não encontrado.");
    }
    else if(usuario == "admin" && parseInt(senha) != 1)
    {
        alert("Senha incorreta!");
        loginBlock--;
        alert("Tentativas restantes: "+loginBlock);
    }
    else if(usuario == "admin" && parseInt(senha) == 1)
    {
        window.location.href = "areadoaluno.html";
    } 

    document.getElementById("txtUsuario").value = '';
    document.getElementById("txtSenha").value = '';

    if(loginBlock == 0)
    {
        document.getElementById("txtUsuario").disabled = true;
        document.getElementById("txtSenha").disabled = true;
    }
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
    var quiz = ["quiz1.html", "quiz2.html", "quiz3.html", "quiz4.html", "quiz5.html", "quiz6.html",
    "quiz7.html", "quiz8.html", "quiz9.html", "quiz10.html", "quiz11.html", "quiz12.html" ]
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();

    var btn = document.createElement("input");  
    btn.type = 'button';  
    btn.value = 'Enviar';  
    btn.onclick = function() { 

        for(var inc = 0; inc < 13; inc++)
        {
            if(data == R[inc])
            {
                acertos++;
                window.location = quiz[inc+1];
                break;
            }
            else if(data == errada[inc])
            {
                window.location = quiz[inc+1];
            }
               
            
        }
    
        
    }

    var btn1 = document.createElement("input");  
    btn1.type = 'button';  
    btn1.value = 'Corrigir';  
    btn1.onclick = function() { window.location.reload() };  
    document.body.appendChild(btn1);
    document.body.appendChild(btn);

}

