import { Meditation } from "./meditation";
import {Root, Recipe} from "./iife";
////////////////////////////////////// Exercise 1 ///////////////////////////
// const morning_meditation = new Meditation(5);
// morning_meditation.start();


////////////////////////////////////// Exercise 2 ///////////////////////////


//################# Soltion 1 ####################
// function isPrime(num: number): Promise<string>{
//     return new Promise((resolve, reject) => {
//         // Simulate some asynchronous operation
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) resolve("false");    

//         if(num>1) resolve("true");
//         else reject("false");
//     });
// }


// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');

//################# Soltion 2 ####################
// async function isPrime(num: number){
//     const result = await new Promise((resolve, reject) => {
//         // Simulate some asynchronous operation
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) resolve(false);
//         if(num>1) resolve(false);
//         else resolve(false);
//     });
//     console.log(result);
// }

// console.log('start');
// isPrime(7);
// console.log('end');


////////////////////////////////////// Exercise 3 ///////////////////////////

// fetch('https://dummyjson.com/recipes')
//  .then((rawResponse: Response) => rawResponse.json())
//  .then((jsonBody: Root) => console.log(jsonBody.recipes))
//  .catch(console.error);
// Remember to use try/catch in case of network problems
async function fetchData() {
    try {
        console.log("############ Fetching Pending... ##########");
        const rawResponse: Response = await fetch('https://dummyjson.com/recipes');
        const jsonBody: Root = await rawResponse.json();
        const recipes: Recipe[] = jsonBody.recipes;
        recipes.forEach(r=> console.log(r.name));
        console.log("######### Finish Priniting ########");
    } catch (error) {
        
    }    
}
console.log("Start Printing");
fetchData();