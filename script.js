function criptografar() {
    let valor = prompt("Digite uma letra:");

    let vogais = ["a", "e", "i", "o", "u"];
    var meuInput = document.getElementById('meuInput');

    if (valor === null || valor === "") {
      alert("Entrada inválida");
    } else if (vogais.includes(valor.toLowerCase())) {
        alert("jpykt");
      } else {
        alert("olglde");
      }

  }


