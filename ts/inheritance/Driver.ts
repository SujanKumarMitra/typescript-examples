import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

let animal: Animal;

animal = new Animal();
animal.makeSound();

animal = new Cat();
animal.makeSound();

animal = new Dog();
animal.makeSound();