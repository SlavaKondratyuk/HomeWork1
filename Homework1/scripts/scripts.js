'use strict'
//js is sensitive to register





// let summ = number * Number + numBer;
//
// console.log('summ',summ);


// alert(summ);
// const answer1 = confirm(`Are you ready? ${month}`);
// const answer2 = prompt('Are you ready?');
//
//
// let a = 'petay + yasya';
// console.log(typeof answer1);
// console.log(typeof answer2);
// console.log(month === typeof number);
// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));
//
// // console.log(a.length);
// // console.log(a.indexOf('+'));
//
// console.log(month.includes('Nov'));
// console.log(month.includes('nov'));


// const a = 5.6;
// const b = 4.534567892345678;
//
// console.log('a+b', a+b);
// console.log('a+b', (a+b).toFixed(5));
//
//
// let str1 = 'Transform True numBer';
//
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
//
//
// const name1 = 'John';
// const surname = 'Connor';
// const years = 40;
// const height = 180;
//
// console.log('Message: ', `'Hello ${surname} ${name1}. I\`m ${years} old. And ${height + 2 +'sm'} tall.'`);
//


// let text = 'Some text';
// let nmbr = 20;
// const result = text.length< 20&& text.length > 5;
// console.log(result);

// const obj = {
//     id: 'someId',
//     name: 'Vasa',
//     role: 'admin',
//     age: '30',
// };
//
// let resultObj = obj.role === 'admin' || obj['role'] === 'moderator';
// console.log(resultObj);
//
// if (resultObj){
//     const name = 'Bob';
//     console.log(name);
// };
//
// if (resultObj != true){
//     var nameBob = 'NotABob';
//     console.log(nameBob);
// }
//
// const resultPrompt = prompt('Enter some value');
//
// if (resultPrompt !== obj.age && 'admin'){
//     alert('No rights')
// } else {
//     alert('wellcome');
// }
//
//
// console.log(nameBob);
// console.log(name);

// let season;
//
// const monthName = 'y';
// if (monthName === 'June' || monthName === 'July' || monthName === 'August'){
//     season = 'summer';
// } else if(monthName === 'May'){
//     season = 'spring';
// } else if(monthName === 'September'){
//     season='autumn';
// } else if(monthName === 'February'){
//     season = 'winter';
// } else {
//     season = 'Unknown season!'
// }
//
// console.log(season);

// let value = 0;
// value += 50;
// value += 50;
// value -= 30;
//
// console.log(value);

// // HOMEWORK!!!!!
//
// let guest;
// let name;
//
// name = 'Mango';
// guest = name;
//
// console.log(guest);
//
//
// let day = 2;
// let month = 10;
// let year = 2017;
//
// let date = "0"+ day + "\\" + month + "\\" + year;
//
// console.log(date);

// let askName = prompt('Enter NAME!!');
// alert(askName);

// let name = 'Max';
// let date = '20/02/2031';
// let roomType = 'LUX';
//
// let message = `${name} goes to vacation on ${date}, in ${roomType} room!`
// console.log(message);


// let padding = '20px';
// let border = '5px';
// let contentWidth = '100px';
//
// let totalWidth = parseInt(padding)+ parseInt(border)+ parseInt(contentWidth) + 'px';
//
// console.log(totalWidth);


// let year = prompt('What year is it now?');
//
// if (year === '2019'){
//     alert('That is totally correct!');
// } else{
//     alert('Wow! I thought it is 2019 now. U should check ur data!');
// }


// let enterNumber = prompt('Введіть ціле число.');
//
// if (enterNumber === null){
//     alert('Come here next time, sir!');
// //    Перетворюємо введений промпт із строки в число та перевіряємо його чи воно є цілим числом
// } else if (Number.isInteger(+enterNumber)){
//     alert('Good, Enakin!');
// }else{
//     alert('You had to enter an integer number. What have you done?!');
// }
// console.log(enterNumber, typeof enterNumber);

// let num = Math.floor(Math.random()*100);
// let type;
// switch (num % 2){
//     case 0:
//         type = 'even';
//         break
//     default:
//         type = 'odd';
// }
//
// console.log(type);
// console.log(num);

// let hours = 3;
// let minutes = 32;
// let seconds = 8;
//
// const time =  `${hours < 10 ? '0' + hours : hours}: ${minutes< 10 ? '0' + minutes : minutes}: ${seconds < 10 ? '0'+ seconds : seconds}`;
// console.log('Time is: '+time);

// let hotel = prompt('enter a number of hotel from 1 to 5');
//
// if (Number.isInteger(+hotel) && (hotel > 0 && hotel < 6)){
//     switch (+hotel){
//         case 1:
//             alert("Каталог хостелов");
//             break;
//         case 2:
//             alert("Каталог бюджетных отелей")
//             break;
//         case 3:
//             alert("Каталог отелей ***")
//             break;
//         case 4:
//             alert("Каталог отелей ****")
//             break;
//         case 5:
//             alert('Beast hotels')
//             break;
//     }
// } else if (hotel === null){
//     alert('See ya!')
// } else{
//     alert('Looks like u did something wrong!');
// }


// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
//
//
// let hotel;
//
// const requiredPlaces = prompt('Enter number of seats');
//
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces != 0){
//     if (+requiredPlaces <= taba) {
//         hotel = 'Taba'
//     } else if (+requiredPlaces <= sharm){
//         hotel = 'Sharm'
//     }else if (+requiredPlaces <= hurgada){
//         hotel = 'Hurgada'
//     }
//     if (hotel && confirm(`Wanna live in ${hotel}?`)){
//         alert(`Welcome to ${hotel}!`)}
//         else if(!hotel){
//         alert('Sorry, no hotel has as much free places as U need.')
//     } else {
//         alert('You`ll regret this!')
//     }
// } else if(!requiredPlaces || +requiredPlaces === 0){
//     alert('Better luck next time!')
// }

const adminLogin = 'admin';
let adminPassword = 'password';
let logIn = prompt('Enter login, please!');
let password;
let canceledLogin = 'Canceled by user!';
let wrongLogin = 'Access denied, you are not admin!';
let canceledPassword = 'Canceled! Winter is coming!';
let wrongPassword = 'Wrong password! You`ve being exiled from the room!';
let correct = 'Welcome, master! You`ve being gone for too long!';
console.log(logIn);

if (!logIn){
    alert(canceledLogin)
} else if (adminLogin === logIn){
    password = prompt('Now enter password!');
    if (!password){
        alert(canceledPassword)
    } else if (adminPassword !== password){
        alert(wrongPassword)
    }else if(adminPassword === password){
        alert(correct)
    }
} else if (adminLogin !== logIn){
    alert(wrongLogin)
}