// associa la var genera al btn genera
var genera = document.getElementById("btn_genera");

// GENERA - al click esegue il codice indiato in function ()
genera.addEventListener ("click",
  function() {
    // Prendo il nome inserito
    var nome = document.getElementById("nome").value;
    console.log("nome: " + nome);
    // Prendo i km da percorrere inseriti dall'utente
    var kmViaggio = document.getElementById("km").value;
    console.log(kmViaggio);
    // Prendo la fascia d'età scelta dall'utente
    var fasciaEta = document.getElementById("fascia_eta").value;
    console.log(fasciaEta);

    var erroreInput = 0;
    // verifica se è stato inserito il numero di Km
    if (kmViaggio == 0) {
      erroreInput = 1;
    }
    // verifica se è stato inserito il nome
    if (nome == "") {
      erroreInput = 2;
    }

    console.log("kmViaggio: " + kmViaggio);
    console.log("erroreInput: " + erroreInput);

    if (erroreInput == 0) {
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
      document.getElementById("tkt_det").classList.add("show");
      document.getElementById("tkt_det").classList.remove("click_annulla_anim");
      document.getElementById("tkt_det").classList.add("click_genera_anim");
    } else if (erroreInput == 1) {
      // non è stato inserito numero di km
      alert ("Attenzione: inserire Km da percorrere")
      erroreInput = 0;
      // document.getElementById("km").style.background = "yellow";
      // document.getElementById("km").style.border = "2px solid black";
    } else {
      // non è stato inserito numero di km
      alert ("Attenzione: inserire il nome del passeggero")
      erroreInput = 0;
    }
  }
)

// ANNULLA - al click cancella i dettagli del biglietto e resetta gli input
var annulla = document.getElementById('btn_annulla');
annulla.addEventListener ("click",
  function () {
    // fa scomparire i dettagli del biglietto
    document.getElementById("tkt_det").classList.add("click_annulla_anim");
    document.getElementById('tkt_det').classList.remove("show");
    document.getElementById("tkt_det").classList.remove("click_genera_anim");
    // resettare i campi dati_input
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";
    document.getElementById('fascia_eta').value = "maggiorenne";
  }
)
