"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("############ Fetching Pending... ##########");
            const rawResponse = yield fetch('https://dummyjson.com/recipes');
            const jsonBody = yield rawResponse.json();
            const recipes = jsonBody.recipes;
            recipes.forEach(r => console.log(r.name));
            console.log("######### Finish Priniting ########");
        }
        catch (error) {
        }
    });
}
console.log("Start Printing");
fetchData();
//# sourceMappingURL=index.js.map