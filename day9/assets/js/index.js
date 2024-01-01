//fetch(url) ابحث عنه 
//   .then(response => response.json())
//   .then(json => condole.log(json))
//   .then(err => condole.log(err))

//==============using fetch in function=======================//
// let user = 
// {
    // name : "jaz",
    // age : 23,
    // address : "oman"
    // }

    let userInput = prompt("Enter your GitHub username:");
    const url =`https://api.github.com/users/${userInput}`;

 async function loadData()
 {
    let obj = await fetch(url);
    let dtt = await obj.json();
    await console.log(dtt) ;

    document.querySelector("#main").innerHTML = `<img src=${dtt.avatar_url} alt="Avatar">`;
 }
loadData();
let dtt = loadData();
console.log(dtt.avatar_url);