// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

//1.1 Will display: 3
//1.2 If I change it to const, it will read an error
// because a const variable can't be redefined.

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
//#2.1
//funcThree() will alert the value of Zero, since funcTwo has not been called yet.
//funcTwo() will redefine the value to 5
//funcThree() will display the value 5 since funcTwo was called.

//2.2 
//I think as a prediction it will read as an error since you
//can't redefine a variable.

//#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// //3.1
// funcFour();
// funcFive();

// //4
// const a = 1;
// function funcSix() {
//     a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// //4.1 If it is run with const it will be problematic, since it is redefined later in the function. 
// funcSix()

//5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
//So if you rename the values with const both on lines 53 and in 55, it will be the same result. However, you only change line 53 to const and don't add const to line 55. It throws an error. 

//EXERCISE TWO: TERNARY OPERATOR
//1
// const winBattle = () => {
//     return true;
// };
//2
// let experiencePoints;

// experiencePoints = winBattle ? 10 : 1;
// console.log(experiencePoints);

//EXERCISE THREE: IS IT A STRING?

// const isString = (theValue) => {
//     return typeof theValue === 'string'; 
// };

// console.log(isString('Hi'))

//Exercise Four: Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function displayColorChoices(colorOrder) {
//     colorOrder.forEach((color, index) => {
//         console.log(`The #${index + 1} choice is ${color}`);
//     });
// }

// displayColorChoices(colors)

//Exercise Five: Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

function displayColorChoices(colorOrder) {
        colorOrder.forEach((color, index) => {
            console.log(`The #${index + 1} choice is ${color}`);
        });
    }
    ///I could not solve this question

//Exercise Six: Bank Details
let bankAmount = -36000;

let vatTax = 1.17

const details = ['+4400','+8000','+4661','-3160','-2400','-3627','-5101', '545']

//Incorrect 
//details.forEach(detail => {
//     index * vatTax
// });


    const updatedDetails = details.map(detail => {
        const numberValue = parseFloat(detail);
        return numberValue*vatTax;
    });
    console.log(updatedDetails)
    let sum=0
    for(let i=0; i<updatedDetails.length; i++){
        sum +=updatedDetails[i];
    }

    console.log(bankAmount+sum);
    
