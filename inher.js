class Animal {
    alive = true;
   eat(){
          console.log('this ${this.name} is eating');
   }
    sleep()
        {
        console.log('this ${this.name} is eating');
        }
    
}
class rabbit extends animals{
    name = "rabbit";
}
class lion extends animals{
    name= "fox";
}
class Goat extends animals{
    name = "Goat";
}
const rabbit = new rabbit();
const lion = new rabbit();
const Goat = new Goat();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();