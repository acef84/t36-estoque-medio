document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let qMin = parseFloat(document.getElementById("qMin").value);
    let qMax = parseFloat(document.getElementById("qMax").value);
    let codigo = document.getElementById("codigo").value;
    let descr = document.getElementById("descr").value;
  
    let estMed = (qMin + qMax) / 2;
  
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado:</h2>";
    resultadoDiv.innerHTML += "<p>Código: " + codigo + "</p>";
    resultadoDiv.innerHTML += "<p>Descrição: " + descr + "</p>";
    resultadoDiv.innerHTML += "<p>Estoque Médio: " + estMed + "</p>";
  });
  



//let qMin, qMax, estMed;
//let codigo, descr;

//codigo = prompt("Informe o código do produto: ");
//descr = prompt("Informe a descrição do produto: ");
//qMin = parseFloat(prompt("Informe a quantidade mínima: "));
//qMax = parseFloat(prompt("Informe a quantidade máxima: "));

//stMed = (qMin + qMax) / 2;

//console.log("-----------------------------");
//console.log("código: " + codigo);
//console.log("descrição: " + descr);
//console.log("estoque médio: " + estMed);