function Nationality(NationalCode) {
  if (NationalCode <= 100) {
    console.log("you are iranian");
  } else {
    console.log("you are not iranian");
  }
}

let code = 50;
Nationality(code);

function joining(Nationality) {
  if (Nationality == "iranian"){
     console.log("wellcome to Iran");
    }else {
    console.log("Go Back to your Country!");
  }


}
let meliat = "iranian";
joining(meliat);
