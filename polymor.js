class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' eats food');
  }
}

class Alligator extends Animal {
  eats() {
    console.log(this.name + ' eats fishes');
  }
}

let murphy = new Alligator('Murphy');
murphy.eats();  
murphy.eat(); 