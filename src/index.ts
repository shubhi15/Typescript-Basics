import { ClassGenericSample } from "./class-generics";
import { ClassDecorator } from "./class-decorator";
import { DecoratorFactory } from "./decorator-factory";
import { PropertyDecoratorSample } from "./property-decorator";
import { ParamterDecoratorSample } from "./paramter-decorator";
import { MethodGenericSample } from "./method-generics";

// const decoratorFactoryObj = new DecoratorFactory();
// decoratorFactoryObj.method();

// console.log(new ClassDecorator().toString());

// const greetObj = new PropertyDecoratorSample("Welcome to Typescript session");
// console.log(greetObj.greet());

// const paramObj = new ParamterDecoratorSample();
// paramObj.member(5, 7);

let output1 = MethodGenericSample<string>("myString");
let output2 = MethodGenericSample<number>(100);
console.log(output1);
console.log(output2);

// let st = new ClassGenericSample<number, string>(101, "Virat");
// st.display();
// let std = new ClassGenericSample<string, string>("201", "Rohit");
// std.display();

// Decorators Evaluation
// There is a well defined order to how decorators applied to various declarations inside of a class are applied:

// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
// Parameter Decorators are applied for the constructor.
// Class Decorators are applied for the class.

// Resources:
// https://www.typescriptlang.org/docs/handbook/decorators.html#:~:text=Decorators%20provide%20a%20way%20to,may%20change%20in%20future%20releases
// https://techsparx.com/nodejs/typescript/decorators/parameters.html
// DONT SEE THIS IT HAS OLD EXAMPLES https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e
