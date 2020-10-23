import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let shape: Shape;

shape = new Circle( 5, "red" );
console.log( `Color=${shape.getColor()}, Area =:${shape.getArea()}` );

shape = new Rectangle( 10, 20, "green" );
console.log( `Color=${shape.getColor()}, Area =:${shape.getArea()}` );
