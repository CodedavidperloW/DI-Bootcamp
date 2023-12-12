let nestedArrays = [
    [1,2,3]
    [4,"hello",6],
    [7,8,9]
]


//get hello
console.log(nestedArrays.length)

let colors = ["blue", "yellow", "green"]
colors[1] ="pink"
console.log(colors.length)


//Array Methods
//Concentrate on how to implement
//W3 Schools Javascript Methods
let colorsA =["blue", "yellow", "green"]
// add to the end
colorsA.push("purple")
//remove the end
colorsA.pop();
console.log(colorsA)

let colorsC = ["brown", "black", "yellow"]
colorsC.splice(1,1,"smokey blue")
colorsC.splice(3,0,"sunset pink")

colorsC.splice(4,0,"happy green", "rocky red")
colorsC.shift()
colorsC.splice(0,1,"smokey grey")
console.log(colorsC)
let newArray = colorsC.slice(2)
console.log(newArray);