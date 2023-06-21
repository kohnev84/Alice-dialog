let cityFrom = "Moscow";
let new2 = false;
let text = '';
if (new2 === true) {
    text = "Здравствуйте! Укажите откуда вы хотите отправится."
}
if (cityFrom !== false) {
    console.log('Условие работает')
}
if (new2 === false &&  cityFrom === false) {
    cityFrom = "Moscow";
    text = "Укажите город прибытия"
}
console.log(cityFrom)
console.log(text)