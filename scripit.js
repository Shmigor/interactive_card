function replace() {
  document.getElementById("formsContainer").style.display="none";
  document.getElementById("hoverContainer").style.display="flex";


  let cardNumber1 = document.getElementById("cardNumber1");
    let cardNumber2 = document.getElementById("cardNumber2").value;
    cardNumber1.textContent = cardNumber2;

  let cHn1 = document.getElementById("cHn1");
    let cHn2 = document.getElementById("cHn2").value;
    cHn1.textContent = cHn2;

  let cvcNumber = document.getElementById("cvcNumber");
    let cvc = document.getElementById("cvc").value;
    cvcNumber.textContent = cvc;

  let dateOutput = document.getElementById("dateOutput");
    let dateM = document.getElementById("dateM").value;
    let dateY = document.getElementById("dateY").value;
    dateOutput.textContent = dateM + "/" + dateY;
  };

  
    document.getElementById("myButton2").onclick = function() {
      location.href = "http://127.0.0.1:5500/index.html";
    };