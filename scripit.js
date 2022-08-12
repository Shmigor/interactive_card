// let forms = document.getElementsById("formsContainer");
// let myBtn1 = document.getElementById("myButton1");
// let hover = document.getElementById("hoverContainer");
// let myBtn2 = document.getElementById("myButton2");



function replace() {
  document.getElementById("formsContainer").style.display="none";
  document.getElementById("hoverContainer").style.display="flex";
  // document.getElementById("hoverContainer").style.cssText = "display: flex; ";


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

  // function replace() {
  //   let cHn1 = document.getElementById("cHn1");
  //   let cHn2 = document.getElementById("cHn2").value;
  //   cHn1.textContent = cHn2
  // }


  // function replace2() {
  //   document.getElementById("formsContainer").style.display="block";
  //   document.getElementById("hoverContainer").style.display="none";
  //   }