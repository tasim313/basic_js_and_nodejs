// var name = "Tasim";  // Decliering variable

// console.log(name);

// var age = 25;

// console.log(age);

// var hasHobbies = true;

// console.log(hasHobbies);

// const summarizeUser = function(userName, userAge, userHasHobbies){
//     return ('Name is ' + userName + ', age is '+ userAge + ' and the user has hobbies: ' + userHasHobbies);
// }

// console.log(summarizeUser(name, age, hasHobbies));

// //This is another way to declier to function
// const newsummarizeUser = (userName, userAge, userHasHobbies) =>{
//     return ('Name is ' + userName + ', age is '+ userAge + ' and the user has hobbies: ' + userHasHobbies);

// }

// console.log(newsummarizeUser(name, age, hasHobbies));


// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(1,2));

// const newadd = (a, b) => a + b ;

// console.log(newadd(10, 20));


// const addOne = a => a + 1;

// console.log(addOne(10));


// const addRandom = () => 10 + 13;

// console.log(addRandom());

// const person = {
//     name: "Tasim",
//     age: 25,
//     great(){
//         console.log('Hi , I am ' + this.name);
//     }

// };

// const printName = (personData) =>{
//     console.log(personData.name)
// }

// printName(person);

// const printName = ({ name, great }) =>{
//     console.log(name, great);
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);


// console.log(person)

// person.great();
// const person = {
//     name: "Tasim",
//     age: 25,
//     great(){
//         console.log('Hi , I am ' + this.name);
//     }

// };

// console.log(person)

// person.great();


// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programing');
// console.log(hobbies);

// const copiedArray = hobbies.slice();  // copied value
// console.log(copiedArray);
// const nestedArray = [hobbies];
// console.log(nestedArray);

// const newArray = [...hobbies];
// console.log(newArray);

// const toArray = (arg1, arg2, arg3) =>{
//    return [arg1, arg2, arg3];
// };

// console.log(toArray(1, 2, 3));

// const toArray1 = (...args) =>{
//     return args;
// };

// console.log(toArray1(1,2,3,4));



// const fetchData = callback =>{
//     const promise = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             callback('Done!');
//           }, 1500);
//     })
// };


// setTimeout(()=>{
//     console.log('Time is Done!');
//     fetchData(text => {
//         console.log(text);
//     })
// }, 2000);

const fetchData = () =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Done!');
          }, 1500);
    });
    return promise;
};


setTimeout(()=>{
    console.log('Time is Done!');
    fetchData().then(text => {
        console.log(text);
        return  fetchData();
        })
        .then(text2 =>{
            console.log(text2);
    });
}, 2000);