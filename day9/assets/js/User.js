class user{
    constructor( name , age , country , type = "customer"){
        this.name = name ;
        this.age = age ;
        this.country = country ;
        this._type = type ;
    }

    
     // set type(value){
    //     if(value.length < 4){
    //         console.log("name is too short !");
    //     }else{
    //         this._type = value;
    //     }
    // }

    get type(){
        return this._type; // عامل نفسه برايفت _
    }

    getinfo(){
        console.log(` userName is => ${this.name} , \n 
                      userAge is ==> ${this.age}  ,\n
                      userCountry is ==> ${this.country} \n,
                      type is ==> ${this.type}`);
    }

}

let user = new user("jaz","oman", "Dhank");
user.type="admin" // ماقدر يلعب فوق لانه سيتر
 console.log(user)
 user.getInfo();