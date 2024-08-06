// let age = 20;

// if(age >= 18) {
//     console.log("You can vote");
// } else if (age >= 10){
//      console.log("You need 8 years to waite");
// } else {
//     console.log("You can not vote");
// }

function greeting(gender) {
  if (gender == "male") {
    console.log("wellcome sir");
  } else {
    console.log("wellcome mam");
  }
}

let jensiat = "male";
greeting(jensiat);

// ###########################

function greetingByTime(time) {
  if (time <= 10) {
    console.log("good morning");
  } else if (time <= 18) {
    console.log("good afternoon");
  } else {
    console.log("good night");
  }
}
let time = 15
greetingByTime(time);
