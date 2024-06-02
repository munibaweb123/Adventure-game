#! /usr/bin/env node
import inquirer from "inquirer";

//--------------------------- games variable ------------------------------
let enimies = ["Zombie" , "Ghost" , "Monster" , "Dragon"];
let maxEnemyHealth = 75;
let EnemyAttackDamageToHero = 25;

//--------------------------- player variable ------------------------------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let HealthPotionHealthAmount = 30;
let HealthPotionDropChance = 50;

//--------------------------- while loop ---------------------------------
let gameRunning = true;

console.log("Welcome to DeadZone!")

Game:
while(gameRunning){
    let enemyHealth = Math.floor(Math.random()* maxEnemyHealth + 1)
    let enemyIndex = Math.floor(Math.random()* enimies.length)
    let enemy = enimies[enemyIndex]
    console.log(`# ${enemy} has appeared # \n`)

    while(enemyHealth>0){
        console.log(` Your health ${heroHealth}`)
        console.log(`${enemy} Health: ${enemyHealth}`)

        let options = await inquirer.prompt({
            name: "ans",
            type:"list",
            message:"What would you like to do?",
            choices:["1. Attack" , "2. Take Health Potion" , "3. Run"]
        })

        if(options.ans === "1. Attack"){
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random()*attackDamageToEnemy + 1)
            let damageToHero=Math.floor(Math.random()*EnemyAttackDamageToHero + 1)

            enemyHealth -= damageToEnemy
            heroHealth -= damageToHero

            console.log(`You strike the ${enemy} for ${damageToEnemy}`)
            console.log(`${enemy} strike you for ${damageToHero} damage.`)

            if(heroHealth < 1){
                console.log(`You loose, ${enemy} Wins!`)
                console.log("You have taken too much damage. you are too weak to continue.")
                break;
            }
        }
            else if(options.ans === "2. Take Health Potion"){
                if(numHealthPotion > 0){
                    heroHealth += HealthPotionHealthAmount
                    numHealthPotion--

                    console.log(`you use health potion for ${HealthPotionHealthAmount}`)
                    console.log(`you now have ${heroHealth} health`)
                    console.log(`you have ${numHealthPotion} health potions left.`)

                }
                else{
                    console.log(`You have no health potion left, defeat enemy for a chance to get health potion.`)
                }
            }
            else if(options.ans === "3. Run"){
                console.log(`you run away from ${enemy}`)
                continue Game;
            }
        }
        if(heroHealth <1){
            console.log(`You are out of battle. you are too weak.`)
            break;
        }

        console.log(`${enemy} is defeated.`)
        console.log(`you have ${heroHealth} health`)
        let randomNumber = Math.floor(Math.random()*100 +1)
        if(randomNumber< HealthPotionDropChance){
            numHealthPotion++
            console.log(`Enemy give you health potion`)
            console.log(`Your health is ${heroHealth}`)
            console.log(`Your health potion is ${numHealthPotion}`)
        }

        let userOption = await inquirer.prompt({
            name:"ans",
            type:"list",
            message:"What you would like to do now?",
            choices:["continue","exit"]

})
if(userOption.ans==="continue"){
    console.log(`You are continue to your adventure`)
}else{
    console.log(`You successfully exit from DeadZone`)
    break;
}
console.log(`Thank you for Playing.\n`)
    }

