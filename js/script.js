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

const userSettings = [{
        id: 1,
        ingredient: "flour",
        active: true
    },
    {
        id: 2,
        ingredient: "beef",
        active: false
    },
    {
        id: 3,
        ingredient: "cheese",
        active: true
    },
    {
        id: 4,
        ingredient: "sauce",
        active: true
    },
    {
        id: 5,
        ingredient: "cucumber",
        active: true
    },
    {
        id: 6,
        ingredient: "chicken",
        active: false
    },
    {
        id: 7,
        ingredient: "potato",
        active: true
    },
    {
        id: 8,
        ingredient: "salad",
        active: true
    }

];


// 1. Создать массив объектов вида { categoryName: 'burger', products: [...]}. 'burger'  - это наше поле type

const groupProductsByType = products.reduce((acc, product) => {
    const {
        type
    } = product;
    return {
        ...acc,
        [type]: [...(acc[type] || []), product]
    };
}, {});

const productsInfo = Object.entries(groupProductsByType).reduce(
    (acc, [type, products]) => {
        return [...acc, {
            categoryName: type,
            products
        }];
    },
    []
);


// 2. Основываясь на настройки ингредиента пользователя. Создать функцию, которая вернет продукты,
//  в которых не содержится запрещенных пользователем ингредиентов.

const filterByUserPreferences = (products, userSettings) => {
    const userPreferences = userSettings.reduce((acc, {
        ingredient,
        active
    }) => {
        return !active ? [...acc, ingredient] : acc;
    }, []);
    return products.reduce((acc, product) => {
        const {
            ingredients
        } = product;
        return !ingredients.some((el) => userPreferences.includes(el)) ?
            [...(acc || []), product] :
            acc;
    }, []);
};


// 3. Создать массив объектов вида { categoryName: 'burger', products: [...]}, 
// где продукты пользователя соответствуют предпочтения пользователя по продуктам. 
// Если в категории нет продуктов после фильтрации по ингредиентам, то такую категорию мы не возвращаем.

const arrayOfProductCategoriesByUserSettings = Object.entries(filterByUserPreferences(eatArray, userSettings).reduce((total, {
    type,
    name
}) => {
    if (!total.hasOwnProperty(type)) {
        return {
            ...total,
            [type]: [name]
        };
    }
    return {
        ...total,
        [type]: [...total[type], name]
    }
}, [])).map((currentCategory) => {
    return {
        ["currentCategory"]: currentCategory[0],
        ["products"]: currentCategory[1]
    }
})


// 4. Создать функцию, которая принимает массив продуктов и строку, и возвращает отфильтрованный массив,
//  где строка входит в название продукта или ингредиента.

const getFilterProductsBySubstring = (products, substring) => {
    return products.filter(({
        type,
        ingredients
    }) => {
        if (type.includes(substring) || ingredients.includes(substring)) {
            return product;
        }
    });
};


// 5. Создать функцию, которая принимает **массив продуктов**, **массив ингредиентов**(настройки пользователя по предпочтения)
//  и **число(цену)**, и возвращает отфильтрованный массив, где цена продукта ниже или равна 3 аргументу и все ингредиенты 
//  у продукта соответствуют предпочтениям пользователя.

const filterProductsByUserPreferenceAndByPrice = (
    products,
    userSettings,
    isCorectPrice
) => {
    const userPreferences = userSettings.reduce((acc, {
        ingredient,
        active
    }) => {
        return !active ? [...acc, ingredient] : acc;
    }, []);
    return products.reduce((acc, product) => {
        const {
            ingredients,
            price
        } = product;
        return !ingredients.some((hasIngredient) =>
                userPreferences.includes(hasIngredient)
            ) && price <= isCorectPrice ?
            [...(acc || []), product] :
            acc;
    }, []);
};