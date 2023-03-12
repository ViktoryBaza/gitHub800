

/* const one = document.querySelectorAll('input[name="one"]')
for (const f of one) {
  if (f.checked) {
        console.log(f.value)
  }
} */

/* const test__question = document.querySelector('.test__question');

ones.onclick = function () {
    const figure = test__question.querySelector('input[name="one"]:checked').value;
    alert(`Поздравляю, вы выбрали ${figure}.`)
}
 */

const test__question = document.querySelector('.test__question');

ones.onclick = function () {
    const quest= test__question.querySelector('input[name="one"]:checked').value;
    const quest2 = test__question.querySelector('input[name="two"]:checked').value;
    const quest3 = test__question.querySelector('input[name="three"]:checked').value;
    const quest4 = test__question.querySelector('input[name="four"]:checked').value;
    const quest5 = test__question.querySelector('input[name="five"]:checked').value;
    const quest6 = test__question.querySelector('input[name="six"]:checked').value;
    const quest7 = test__question.querySelector('input[name="seven"]:checked').value;
    const quest8 = test__question.querySelector('input[name="eight"]:checked').value;
    const quest9 = test__question.querySelector('input[name="nine"]:checked').value;
    const quest10 = test__question.querySelector('input[name="ten"]:checked').value;
    const quest11 = test__question.querySelector('input[name="eleven"]:checked').value;
    const quest12 = test__question.querySelector('input[name="twelve"]:checked').value;
    const quest13 = test__question.querySelector('input[name="thirteen"]:checked').value;
    const quest14 = test__question.querySelector('input[name="fourteen"]:checked').value;
    const quest15 = test__question.querySelector('input[name="fifteen"]:checked').value;
    const quest16 = test__question.querySelector('input[name="sixteen"]:checked').value;
    const quest17 = test__question.querySelector('input[name="seventeen"]:checked').value;
    const quest18 = test__question.querySelector('input[name="eighteen"]:checked').value;
    const quest19 = test__question.querySelector('input[name="nineteen"]:checked').value;
    const quest20 = test__question.querySelector('input[name="twenty"]:checked').value;

   const test__result = (+(+quest) +(+quest2) +(+quest3)+(+quest4)+(+quest5)+(+quest6)+(+quest7)+(+quest8)+(+quest9)+(+quest10)+(+quest11)+(+quest12)+(+quest13)+(+quest14)+(+quest15)+(+quest16)+(+quest17)+(+quest18)+(+quest19)+(+quest20))
   
   if(test__result <= 40){
    document.getElementsByClassName('result__pro')[0].textContent = `Наша совместимость ${test__result}%`;
    document.getElementsByClassName('result__text')[0].textContent = `Думаю, у нас нет шансов, но спасибо за уделённое на прохождение теста время `;
   }
   else if(test__result > 40 && test__result <= 70 ){
    document.getElementsByClassName('result__pro')[0].textContent = `Наша совместимость ${test__result}%`;
    document.getElementsByClassName('result__text')[0].textContent = `Шанс не очень большой, но можно попробовать`;
   }
   else if(test__result > 70 && test__result <= 95 ){
    document.getElementsByClassName('result__pro')[0].textContent = `Наша совместимость ${test__result}%`;
    document.getElementsByClassName('result__text')[0].textContent = `Отличный результат! Думаю, мы могли бы поладить. Мой ник в телеге - @Rrrrrrrrrrrrrrrrrrrr00`;
    /* document.getElementsByClassName('result__myLink')[0].textContent =   */
    
  }
   else  {
    document.getElementsByClassName('result__pro')[0].textContent = `Наша совместимость ${test__result}%`;
    document.getElementsByClassName('result__text')[0].textContent = `Это наивысшая совместимость!!! Хороший повод написать мне. Мой ник в телеге - @Rrrrrrrrrrrrrrrrrrrr00`;
   }
}
