//polymorphism

// What is Polymorphism in OOP (JavaScript)?

// Polymorphism means “many forms”.
// In OOP with JavaScript, it allows different classes to define methods with the same name, but each provides its own implementation.

// This lets you treat objects of different classes through a common interface, while their actual behavior depends on the specific class.

//  Example: Animal Inheritance
class Animal {
  speak() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

class Cow extends Animal {
  speak() {
    console.log("Moo!");
  }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Cow()];

animals.forEach(animal => {
  animal.speak(); // same method call, but different behaviors
});

//  Output:
// Woof! Woof!
// Meow!
// Moo!


// Here:

// All objects (Dog, Cat, Cow) share the same method name speak() (common interface).

// But each class overrides the method with its own version (different implementation).

// At runtime, JavaScript decides which method to call → this is runtime polymorphism.

//  Why Polymorphism in OOP is Important?

// Code Reusability – Write general code for Animal, and subclasses handle the details.

// Extensibility – Add a new class (e.g., Lion) without touching existing code.

// Flexibility – Work with different types of objects using the same interface.

//  Real-Life Analogy

// Think of the drive() method:

// A Car drives differently from a Bike.

// But when you call drive(), you don’t need to care what type it is — each handles it in its own way.

//  In short:
// Polymorphism in OOP (JavaScript) allows objects of different classes to be treated as objects of a common superclass, while still executing their specific behavior.

//Abstract oop

// 1. What is Object-Oriented Programming (OOP)?
// OOP is a programming style centered around classes and objects.

// a class is used to make objects.

// 5. The 4 Main Principles of OOP
// Abstraction: Hides unnecessary complexity and shows only the essential features to the user.
// (Example: A phone has a camera() feature without exposing internal functions such as verifyTemperature().)

// Encapsulation: Keeps properties and methods private to protect the internal state and only expose what is needed.

// Inheritance: Allows a new class (child) to inherit properties and methods from an existing class (parent), promoting code reuse.

// Polymorphism: Allows methods to have different implementations in child classes that override parent class methods.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    this.#checkEngine();  // internally call the private method
    console.log(`${this.make} ${this.model} engine started.`);
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }

  // Private method, not accessible outside the class
  #checkEngine() {
    console.log('Checking engine status...');
  }
}

const myCar = new Car('Tata', 'Punch', 2024);
myCar.startEngine();  //  Checking engine status... Tata Punch engine started.
myCar.drive();        //  Tata Punch is driving.

// inheritence oop
//Inheritance is when one class (or object) gets access to the properties and methods of another class.

//It allows us to reuse code (don’t repeat yourself).

//Child classes can extend parent classes and even override some behavior.

//Think of it like real life:
//A Car is a type of Vehicle.

     //All vehicles have wheels, engine, and start().

    //A car inherits those, but can add extra things like airConditioning() or radio().

    // Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
}

// Child Class (inherits from Animal)
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }
}

// Using the classes
const myDog = new Dog("Buddy", "German Shepherd");
myDog.eat();   // inherited from Animal
myDog.bark();  // specific to Dog