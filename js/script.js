const eatArray = [{
        id: 1,
        name: "Биг Тейсти",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Тройной чизбургер",
        price: 2.3,
        currency: "usd",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
    {
        id: 3,
        name: "Чизбургер",
        price: 1,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
    {
        id: 4,
        name: "Картофель фри",
        price: 2,
        currency: "usd",
        ingredients: ["potato"],
        type: "snack",
        available: true
    },
    {
        id: 5,
        name: "Картофель по-деревенски",
        price: 2,
        currency: "usd",
        ingredients: ["potato"],
        type: "snack",
        available: false
    },
    {
        id: 6,
        name: "Чикен МакНаггетс™",
        price: 5,
        currency: "euro",
        ingredients: ["chicken"],
        type: "chicken",
        available: true
    },
    {
        id: 7,
        name: "Стрипсы",
        price: 2.6,
        currency: "euro",
        ingredients: ["chicken"],
        type: "chicken",
        available: false
    },
    {
        id: 8,
        name: "МакЧикен",
        price: 4.3,
        currency: "euro",
        ingredients: ["chicken", "flour", "cheese", "sauce"],
        type: "burger",
        available: false
    },



];


//    1. Собрать в массив ингредиентов (без повторения).

const filteredProducts = [
    ...new Set(products.map(({
        ingredients
    }) => ingredients).flat()),
];


//    2. Создать функцию, которая принимает массив продуктов и id, и возвращает продукт с таким же id.

const findProducts = (products, id) =>
    products.find(({
        id: currentId
    }) => currentId === id);


//    3. Создать массив с отсортированными продуктами по цене.

const sortedProductsByPrice = products.sort((a, b) => a.price - b.price);


//    4. Сгруппировать продукты по типам. Создать объект, где ключ это тип, а значение - массив с продуктами.

const groupProductsByType = products.reduce((acc, product) => {
    const {
        type
    } = product;
    return {
        ...acc,
        [type]: [...(acc[type] || []), product]
    };
}, {});


//    5. Создать массив с продуктами, которые доступны.

const availableDishArray = eatArray.filter(dish => dish.available);


//    6. Создать функцию, которая принимает массив продуктов и строку = название ингредиента, и возвращает массив с продуктами, 
//    где содержится такой ингредиент.

const findProductByIngredient = (enterArray, substring) =>
    products.filter((product) => product.ingredients.includes(substring));


//    7. Создать функцию, которая принимает массив продуктов и массив ингредиентов, и возвращает массив с продуктами,
//     где содержатся такие ингредиенты.

const findProductByIngredients = (products, enterIngredients) => {
    return products.reduce((acc, product) => {
        const {
            ingredients
        } = product;
        return ingredients.some((el) => enterIngredients.indexOf(el) >= 0) ?
            [...acc, product] :
            [...acc];
    }, []);
};


//    8. Создать функцию, которая принимает массив продуктов и цену, и возвращает массив продуктов, 
//    где цена продукта ниже или равна цене из второго аргумента функции.

const getProductsFilterByPrice = (products, searchingPrice) =>
    eatArray.filter(({
        price
    }) => price <= searchingPrice);


//    9. Создать функцию, которая принимает массив продуктов и массив айдишников, и возвращает строку, 
//    где строка включает в себя название продуктов и их цену через запятую, у которых айдишники совпадают.
//    Например: `"Биг Тейсти: цена 4€, Картофель по-деревенски: 2$"`

const getPriceString = (products, idArray) => {
    return products.reduce((total, {
        id,
        name,
        price,
        currency
    }) => {
        if (idArray.includes(id)) {
            return [...total, `${name}: цена ${price} ${currency}`];
        }
        return total;
    }, []).join(", ");
};


//    10. Создать функцию, которая принимает массив продуктов и массив айдишников, и возвращает объект,
//     c общими суммами цен продуктов(у которых айдишники совпадают) по каждой валюте.
//    Например: `{ euro: 20, usd: 6}`

const objectFromProductsByCurrency = (products, enterId) => {
    return products.reduce(
        (acc, product) => {
            if (enterId.includes(id)) {
                return {
                    ...acc,
                    [currency]: acc[currency] + price
                };
            }
            return acc;
        }, {
            euro: 0,
            usd: 0
        }
    );
};


//    11. Создать функцию, которая принимает массив продуктов и массив айдишников, и вывести строку,
//     где число равно сумме цен продуктов + значок валюты. При этом если, у нас попадают продукты с разными валютами, 
//     то мы должны получить сумму в евро и перевести доллары в евро(использовать для этого курс евро/доллар).

const getSumOfAllProductsById = (products, enterId) => {
    return (
        products.reduce((acc, product) => {
            const {
                id,
                price,
                currency
            } = product;
            if (enterId.includes(id)) {
                const currentPrice = currency == "usd" ? price * 0.85 : price;
                return acc + currentPrice;
            }
            return acc;
        }, 0) + "€"
    );
};