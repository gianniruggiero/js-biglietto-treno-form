// associa la var genera al btn genera
var genera = document.getElementById("btn_genera");

// al click esegue il codice indiato in function ()
genera.addEventListener ("click",
  function() {
    // Prendo il nome inserito
    var nome = document.getElementById("nome").value;
    console.log(nome);
    // Prendo i km da percorrere inseriti dall'utente
    var kmViaggio = document.getElementById("km").value;
    console.log(kmViaggio);
    // Prendo la fascia d'età scelta dall'utente
    var fasciaEta = document.getElementById("fascia_eta").value;
    console.log(fasciaEta);

    // Calcolo il prezzo totale del biglietto
    var costoKm = 0.21;
    var costoTot = (kmViaggio * costoKm);
    console.log("Totale: " + costoTot);
    var offerta = "Biglietto Standard";

    // Verifico la fascia d'età scelta e calcolo relativo sconto
    if (fasciaEta == "minorenne") {
      costoTot = costoTot * 0.8;
      offerta = "Sconto Minorenne"
    } else if (fasciaEta == "over65") {
      costoTot = costoTot * 0.6;
      offerta = "Sconto Silver"
    }

    // Arrotondamento costo Totale
    costoTot = costoTot.toFixed(2);

    // Genero numero (random) per carrozza e codice CP
    var numCarrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCP = Math.floor(Math.random() * 9999);

    // Inserisco i dati calcolati nel biglietto
    document.getElementById("nome_ins").innerHTML = nome;
    document.getElementById("costo").innerHTML = costoTot + " €";
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = numCarrozza;
    document.getElementById("codice_cp").innerHTML = "9" + codiceCP;
    // document.getElementById("biglietto_container").classList.add("show");
  }
)


// Annulla

var annulla = document.getElementById('annulla');
annulla.addEventListener ("click",
  function () {
    document.getElementById('nome_biglietto').classList.remove("show");
    // resettare i campi dati_input
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";
    document.getElementById('fascia_eta').value = "";
  }
)
