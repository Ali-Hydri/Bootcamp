function HelloWord() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello");
      }, 2000);
    });
  }
  
  function GoodbyeWord() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Goodbye");
      }, 1000);
    });
  }
  function EndWord() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("End of message");
          }, 3000);
    });
  }
  
  HelloWord()
    .then(Hi => {
      console.log(Hi);
      return GoodbyeWord();
    })
    .then(bye => {
      console.log(bye);
      return EndWord();
    })
    .then(End => {
        console.log(End);
    })
    .catch(error => {
      console.error("Error:", error);
    });