
// Задание: (База пользователей)

let usersNum = +prompt('Введите количество пользователей');

while ((usersNum == '') || isNaN(usersNum)) {
    usersNum = +prompt('Введите количество пользователей');
}

let usersBase = [{},]

for (let i = 0; i < usersBase.length; i++) {
    usersBase.push({
        name: prompt('Введите Имя'),
        age: +prompt('Введите Возраст'),
    })

    if (usersBase.length > usersNum) {
        break;
    }
}

usersBase.splice(0, 1)

for (const key in usersBase) {
    for (const x in usersBase[key]) {
        console.log(`Объект: ${key}; ключ: ${x}; значение ключа: ${usersBase[key][x]}.`);
    }
}





/*
// Задание: (Корзина товаров)
let payPrice = 0;

let order = receipt();
for (const key in order) {
    console.log(`Вы заказали - ${key}: ${order[key].info}`);
    payPrice += order[key].price;
}

console.log(`Общая стоимость: ${payPrice + 9000} сум. Включая доставку (9000 сум).`);

 */


