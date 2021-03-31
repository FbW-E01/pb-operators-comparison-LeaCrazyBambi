const apples = 20;
const oranges = 30;
console.log(apples === oranges);
console.log(apples !== oranges);
console.log(apples > oranges);
console.log(apples <= oranges);
console.log(oranges > apples);

const mangoes = 5;
console.log((mangoes * apples) > (mangoes + oranges));
console.log((mangoes - apples) < (oranges / mangoes));
console.log(apples === oranges === mangoes);
console.log((apples / mangoes) === (oranges / mangoes));
console.log((mangoes + apples) > (oranges - mangoes));
console.log((mangoes + apples) < (oranges - mangoes));
console.log((mangoes + apples) === (oranges - mangoes));