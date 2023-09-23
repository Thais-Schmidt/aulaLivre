function loadXMLDoc() {
    //XMLHttpRequest serve para interagir com servidores;
    var xmlDoc = new XMLHttpRequest();
    xmlDoc.onreadystatechange = function () {
        if (xmlDoc.readyState === 4 && xmlDoc.status === 200) {
            leituraArquivo(xmlDoc);
        }
    }

    xmlDoc.open("GET", "alunos.xml");
    xmlDoc.send();
}

loadXMLDoc()

function leituraArquivo(xml) {
    var i;
    var xmlArquivo = xml.responseXML;
    var table =
        `<tr>
            <th>Nome do aluno:</th>
            <th>Data de Nascimento:</th>
            <th>R.A.</th>
            <th></th>
            <th>Matricula:</th>
            <th></th>
        </tr>`;

    var arquivo = xmlArquivo.getElementsByTagName("aluno");
    console.log(arquivo);

    console.log(arquivo.length);
    
    for (i = 0; i < arquivo.length; i++) {
        
        table +=
            `<tr>
                <td>${arquivo[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("dtNascimento")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("ra")[0].childNodes[0].nodeValue}</td>
                <td></td>
                <td>${arquivo[i].getElementsByTagName("statusMatricula")[0].childNodes[0].nodeValue}</td>
                <td><button>Visualizar</button></td>
            </tr>`
    }

    document.getElementById("tblAlunos7A").innerHTML = table;
}