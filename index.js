
   // Задание: (База пользователей)
            
var base = {
    user: {
        id: 1,
    },

    user: {
        id: 2,
    },

    user: {
        id: 3,
    },
}

for (base.user.id = 1; base.user.id <= 3; base.user.id++) {
    base.user.name = prompt('Введите имя пользователя');
    base.user.age = +prompt('Введите возраст пользователя');
    console.log(`Пользователь: ${base.user.id}.
Имя: ${base.user.name}.
Возраст: ${base.user.age}.`);
}






/*
    Задание: (Корзина товаров)
            Вам дается ссылка на js файл ее вы подключете перед вашим script.js:
    -->
            <script src="https://proweb.uz/javaScript/receipt.js"></script>
           <!-- которая отдает function receipt() а эта функция отдает вам случайный объект
            Например:
            {
                'Lavash': {
                    info: 'Big Cheese',
                    price: 15000
                },
                'Hot-dog': {
                    info: 'mini',
                    price: 8500
                },
                'Cola': {
                    info: '1.5 L',
                    price: 9000
                }
            }
Вы должны при помощи цикла взять данные из этой ссылки и вывести конечную строку в console:
    Где будет выведен список заказа и в конце общая стоимость заказа сразу c доставкой.
    Должно выглядеть так
    Вы заказали Lavash Big Cheese, Hot-dog mini, Cola 1.5 L,  | Общая стоимость 41500 сумм с доставкой (9000)
     -->
*/


// второе дз не получилось



/* function receipt() {
    const arrayReceipt = [
    {
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    },
    {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    },
    {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

let pay  */