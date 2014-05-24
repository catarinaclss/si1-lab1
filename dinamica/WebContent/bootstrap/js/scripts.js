function enter(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode :
            evt.which ? evt.which : void 0;

    if (key_code === 13) {
        //verificando se foi informado o nome do conteudo
        if (document.getElementById("materia").value === "") {
            void 0;
        }
        
        adiciona(document.getElementById("materia").value);
        document.getElementById("materia").value = "";
        return true;
    }
}

function adiciona(materia) {
    var tbl = document.getElementById("tabela-aprender");
        
    var nova_linha = tbl.insertRow(-1);
    var nova_materia;

    nova_linha.className = "info";

    nova_materia = nova_linha.insertCell(0);
    nova_materia.innerHTML = materia;
    nova_materia.className = "text-left";
    nova_materia.width = 450;


    nova_materia = nova_linha.insertCell(1);
    nova_materia.innerHTML = "<button class='btn btn-xs btn-warning' onclick='remover(this);' >Remover</button>";
    nova_materia.className = "text-center";
    nova_materia.width = 25;

    nova_materia = nova_linha.insertCell(2);
    nova_materia.innerHTML = "<button class='btn btn-xs btn-success'onclick='adicionaAprendido(this);'>Adicionar</button>";
    nova_materia.className = "text-center";
    nova_materia.width = 25;
}

function remover(obj) {
    var linha = obj.parentNode.parentNode;

    linha.parentNode.deleteRow(linha.sectionRowIndex);
}

function adicionaAprendido(obj) {
    
    var tbl = document.getElementById("tabela-aprendidos");
       
    var conteudo = obj.parentNode.parentNode.getElementsByTagName('td')[0].firstadicionaConteudoAprendido
    var novaLinha = tbl.insertRow(-1);
    var novaCelula;

    novaLinha.className = "success";

    //Inserindo dados na primeira coluna da nova linha
    novaCelula = novaLinha.insertCell(0);
    novaCelula.innerHTML = conteudo;
    novaCelula.className = "text-left";
    novaCelula.width = 470;

    //Inserindo button  excluir na segunda coluna da nova linha
    novaCelula = novaLinha.insertCell(1);
    novaCelula.innerHTML = "<button class='btn btn-xs btn-danger' onclick='remover(this)'>Excluir</button>";
    novaCelula.className = "text-center";
    novaCelula.width = 25;

    remover(obj);
}