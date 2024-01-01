class Animal 
{
    constructor(name){
        this.name=name;
    }


//the function
print()
       {
    console.log(`Animal Mame is : ${this.name}`);
       }
}

//this is inherit from animal class
class Dog extends Animal {

    constructor(name,speed){
        super(name); //title is come from parent
        this._speed=speed;
    }


//the function
run()
       {
    this.print();
    console.log(`Animal Mame is : ${title.speed}`);
       }
}

let animal = new Animal("Dog")
animal.print();
animal.run();
