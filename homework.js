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
  