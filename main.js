var elText = document.querySelector(".js-text");
var elErrorText = document.querySelector(".js-error-text");
var numberbuzz=Number(prompt("Fizzbuz o'yini uchun son kiriting"))
var a = 3;
var b = 5;

if (numberbuzz < a) {
   elErrorText.textContent = "Eng kamida 3 sonini kiriting";
} else if (numberbuzz % a == 0 && numberbuzz % b == 0) {
   elText.textContent = "FIZZBUZZ";
} else if (numberbuzz % a == 0) {
   elText.textContent = "FIZZ";
} else if (numberbuzz % b == 0 ) {
   elText.textContent = "BUZZ";
} else {
   elErrorText.textContent = `${numberbuzz} soni 3 ga ham 5 ga ham bo'linmaydi`;
};
