import User from "./User.js";
// import CalculateNetSalary from "./CalcSa.js";
import CalculateSalary from "./calcSa.js";

//let user = new User ("jaz", 2000, 5555); //instance طريقة 1 او 
let user = new User ("jaz", 2000, CalculateSalary(2000));        //الطريقة الثانية اخلي السلري داخل البروسس 
console.log(user);
