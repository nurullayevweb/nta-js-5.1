var elText = document.querySelector(".js-text");
var elErrorText = document.querySelector(".js-error-text");

function checkFizzBuzz(num) {
   if (num < 3) {
      return elErrorText.textContent = "Eng kamida 3 sonini kiriting";
   }
   if (num % 3 == 0 && num % 5 == 0) {
      return elText.textContent = "FIZZBUZZ";
   }
   if (num % 3 == 0) {
      return elText.textContent = "FIZZ";
   }
   if (num % 5 == 0) {
      return elText.textContent = "BUZZ";
   }
   else {
      return elErrorText.textContent = `${num} soni 3 ga ham 5 ga ham bo'linmaydi`;
   };
}

var numberbuzz = Number(prompt("Fizzbuz o'yini uchun son kiriting"))
checkFizzBuzz(numberbuzz)