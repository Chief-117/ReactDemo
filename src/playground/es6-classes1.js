class Person{
    constructor(name = 'Anonymous',age=0){
        this.name = name || 'test';
        this.age = age;
    }
    getGretting(){
        // return 'Hi '+this.name+'!';
        return `Hi, I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person{
  constructor(name,age,major){
    super(name,age)
    this.major = major;
  }
  hasMajor(){
      return !!this.major
  }
  getDescription(){
      let description = super.getDescription();

      if(this.hasMajor()){
          description += ` Their major is ${this.major}`
      }
      return description;
  }
}
class Traveler extends Person{
    constructor(name,age,location){
        super(name,age)
        this.location=location;
    }
    // hasLoc(){
    //     return !!this.location;
    // }
    getLocation(){
        let loc = super.getGretting();
        if(this.location){
            loc += ` I'm visisting from ${this.location}`
        }
        return loc
    }
}
//Traveler -> Person
//Add support for homeLocation
//Override getGretting
// Hi , I am xxx .... . I'm visiting from Taiwan 
//Hi , I am xxx .... .
const me = new Student('Noah Tseng',26,'Computer Science');
const traveler = new Traveler('Test Demo',26,'Taiwan')
const traveler2 = new Traveler()
console.log(traveler.getLocation())
console.log(traveler2.getLocation())
console.log(me)
console.log(me.hasMajor())
// console.log(me.getGretting())
console.log(me.getDescription())

const other = new Student();
console.log(other.hasMajor())
console.log(other.getDescription())






//set up constuctor to take name and age(default = 0)
//getDescription - Noah Tseng is 26 years old.

// class Noah{
//     constructor(name,age=0){
//         this.name = name;
//         this.age = age;
//         console.log('test')
//     }
//     getDescription(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }
// const test = new Noah('noah tseng',26);
// console.log(test.getDescription())