function numbers(amount) {
  for (let i = 0; i <= amount; i++) {
    console.log("----------");
    console.log(i);
    if (0 == i % 2) {
      console.log("zoj");
    } else {
      console.log("fard");
    }
  }
}
numbers(10);

