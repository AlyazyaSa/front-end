class User {

cnt =0;
  constructor(name, address, age) {
    this.cnt +=1;
    this.name = name;
    this.address = address;
    this.age = age;
  }

  getInfo() {
    console.log(`yore id is ${this.cnt}\n Hello M.R ${this.name}\n Your Adress is : ${this.address} \n And your Age is ${this.age}`);
  }
}

let user = new User("JAZ", "Oman", 23)
// console.log(user.getInfo())
user.getInfo();




