/*1. The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Add an additional argument to the function that takes the conversion rate of human to dog years.*/

console.log("Question 1:")

function dogAge(){
    dogYears = age * 7
    console.log(`Your doggie is ${dogYears} years old in dog years!`)
}

 age = 10
dogAge()

 age = 20
dogAge()

age = 1
dogAge()


/*2. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

console.log("Question 2:")

occupations = ["doctor", "lawyer", "teacher", "artist"]
locations = ["Atlanta", "Chicago", "San Francisco", "New York" ]
spouses = ["B", "J", "P", "T" ]
offspring = ["2", "3", "6", "8"]

function tellFortune(firstName){
 

            if (firstName.length === 2){
               function fortuneOne(){
                    return (`Welcome to your future ${firstName}! You will be a ${occupations[0]} and living in ${locations[0]}. Your partner's name will start with ${spouses[0]} and you will have ${offspring[0]} children! Hope that you enjoy your new life!!`)
                } console.log(fortuneOne())
            } else if( firstName.length <= 5){
                function fortuneTwo(){
                    return (`Welcome to your future ${firstName}! You will be a ${occupations[1]} and living in ${locations[1]}. Your partner's name will start with ${spouses[1]} and you will have ${offspring[1]} children! Hope that you enjoy your new life!!`)
                } console.log(fortuneTwo())
            } else if( firstName.length <= 10){
                function fortuneThree(){
                    return (`Welcome to your future ${firstName}! You will be a ${occupations[2]} and living in ${locations[2]}. Your partner's name will start with ${spouses[2]} and you will have ${offspring[2]} children! Hope that you enjoy your new life!!`)
                } console.log(fortuneThree())
            } else {
                function fortuneFour(){
                    return (`Welcome to your future ${firstName}! You will be a ${occupations[3]} and living in ${locations[3]}. Your partner's name will start with ${spouses[3]} and you will have ${offspring[3]} children! Hope that you enjoy your new life!!`)
                } console.log(fortuneFour())
            }
}



tellFortune("Li")
tellFortune("Devan")
tellFortune("Mercutio")
tellFortune("Lemonjello")




