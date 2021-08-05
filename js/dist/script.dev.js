"use strict";

arr = [{
  "id": 7,
  "email": "michael.lawson@reqres.in",
  "first_name": "Michael",
  "last_name": "Lawson",
  "avatar": "https://reqres.in/img/faces/7-image.jpg",
  "age": 23
}, {
  "id": 8,
  "email": "lindsay.ferguson@reqres.in",
  "first_name": "Lindsay",
  "last_name": "Ferguson",
  "avatar": "https://reqres.in/img/faces/8-image.jpg",
  "age": 20
}, {
  "id": 9,
  "email": "tobias.funke@reqres.in",
  "first_name": "Tobias",
  "last_name": "Funke",
  "avatar": "https://reqres.in/img/faces/9-image.jpg",
  "age": 40
}, {
  "id": 10,
  "email": "byron.fields@reqres.in",
  "first_name": "Byron",
  "last_name": "Fields",
  "avatar": "https://reqres.in/img/faces/10-image.jpg",
  "age": 36
}, {
  "id": 11,
  "email": "george.edwards@reqres.in",
  "first_name": "George",
  "last_name": "Edwards",
  "avatar": "https://reqres.in/img/faces/11-image.jpg",
  "age": 70
}, {
  "id": 12,
  "email": "rachel.howell@reqres.in",
  "first_name": "Rachel",
  "last_name": "Howell",
  "avatar": "https://reqres.in/img/faces/12-image.jpg",
  "age": 45
}]; // 1. Получить строку c именами и фамилиями всех пользователей через запятую.
// 2. Получить объект, где были бы **a)** данные о среднем возрасте пользователей, **b)** количество пользователей старше **30, 
// c)** количество пользователей старше 40**,  d)** количество пользователей старше 18 ****
// 3. Создать новый массив пользователей, где объект пользователя должен содержать только id  и поле, 
// отвечающее за имя пользователя, которое должно содержать имя и фамилию.
// 4. Создать массив из emails по алфавиту.
// 5. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву **Y,** а значит и такого поля не должно быть в объекте.
// Пример того, что надо получить, когда пользователи имеют следующие фамилии `Yasenko`, `Felton` , `Ford`, `Ferdinand`:
//     {
//        y: ['Yasenko'],
//        f: ['Felton', 'Ford', 'Ferdinand'
//     }
//1

strFio = arr.reduce(function (str, currentUser) {
  return str += "".concat(currentUser.first_name, " ").concat(currentUser.last_name, ", ");
}, "");
averageAge = arr.reduce(function (acc, currentUser, index, arr) {
  return acc += currentUser.age;
}, 0);
overThirty = arr.reduce(function (acc, currentUser) {
  if (currentUser.age > 30) {
    acc++;
  }

  return acc;
}, 0);
overForty = arr.reduce(function (acc, currentUser) {
  if (currentUser.age > 40) {
    acc++;
  }

  return acc;
}, 0);
overEighteen = arr.reduce(function (acc, currentUser) {
  if (currentUser.age > 18) {
    acc++;
  }

  return acc;
}, 0);
objInfo = arr.reduce(function (acc, currentUser, index, arr) {
  return {
    averageAge: averageAge / arr.length,
    overThirty: overThirty,
    overForty: overForty,
    overEighteen: overEighteen
  };
}, {}); // 3. Создать новый массив пользователей, где объект пользователя должен содержать только id  и поле, 
// отвечающее за имя пользователя, которое должно содержать имя и фамилию.

newArr = arr.reduce(function (acc, currentUser) {
  acc.push({
    id: currentUser.id,
    name: "".concat(currentUser.first_name, " ").concat(currentUser.last_name)
  });
  return acc;
}, []);
emailArr = arr.reduce(function (acc, currentUser) {
  acc.push(currentUser.email);
  return acc.sort(function (a, b) {
    return a.localeCompare(b);
  });
}, []); // 5. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

sortAscendingOverFortyArray = arr.reduce(function (acc, currentUser) {
  if (currentUser.age < 40) {
    acc.push(currentUser);
  }

  return acc.sort(function (a, b) {
    return a.age - b.age;
  });
}, []); // 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву.
// Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву **Y,** 
//а значит и такого поля не должно быть в объекте.
// Пример того, что надо получить, когда пользователи имеют следующие фамилии `Yasenko`, `Felton` , `Ford`, `Ferdinand`:
//     {
//        y: ['Yasenko'],
//        f: ['Felton', 'Ford', 'Ferdinand'
//     }
//1

lastnameObj = arr.reduce(function (acc, currentUser, index, currentArr) {
  var firstLaterInLastname = currentUser.last_name[0].toLowerCase();
  var newObj = {};

  if (acc.hasOwnProperty(firstLaterInLastname)) {
    acc.firstLaterInLastname = "fdsfs";
  }

  acc[firstLaterInLastname] = "fdsfs";
  return acc;
}, {});
console.log(Object.getOwnPropertyNames(lastnameObj));