
arr = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
                    "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
                    "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
                    "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
                    "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
                    "age": 70
    },
            {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
                    "age": 45
    }
]


//1

strFio = arr.reduce((str, currentUser) => str += `${currentUser.first_name} ${currentUser.last_name}, `, "");
console.log(strFio);

//2

objInfo = {
        averageAge:  (arr.reduce((acc, currentUser) => acc += currentUser.age, 0)) / arr.length,
        overThirty: arr.filter((currentUser) => currentUser.age > 30).length,
        overForty: arr.filter((currentUser) => currentUser.age > 40).length,
        overEighteen: arr.filter((currentUser) => currentUser.age > 18).length,
}
console.log(objInfo);

// 3. 

newArr = arr.reduce((acc, currentUser) => {
    acc.push({
        id: currentUser.id,
        name: `${currentUser.first_name} ${currentUser.last_name}`
    });
    return acc;
}, []);

//4 

emailArr = arr.reduce((acc, currentUser) => {
     acc.push(currentUser.email);
    return acc.sort((a, b) => a.localeCompare(b));
}, []);
console.log(emailArr)

// 5

sortAscendingOverFortyArray = arr.reduce((acc, currentUser) => {
    if(currentUser.age < 40){
        acc.push(currentUser);
    }
    return acc.sort((a, b) => a.age - b.age);
}, []);


// 6. 

lastnameObj = arr.reduce((acc, currentUser) => {
    let firstLaterInLastname = currentUser.last_name[0].toLowerCase();
    if(!acc.hasOwnProperty(firstLaterInLastname)){
        acc[firstLaterInLastname] = currentUser.last_name;
    }
    return acc;
}, {});

console.log(lastnameObj)
