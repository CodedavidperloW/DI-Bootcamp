let numberOfCoffees = prompt("How many coffees?")
numberOfCoffees = Number(numberOfCoffees)


for (let i = numberOfCoffees; i >= 1; i--) {
    let currentDrink = i-1
    console.log(`${i} cups of coffee to drink, not enough time in the day! Sip it down, and get to work, ${currentDrink} more cups to drink today.`)
    if(i===1){
        console.log(`${i} cup of coffee to drink, not enough time in the day! Sip it down, and get to work, ${currentDrink} cups left to drink today.`)
    }
}