export function first(param1: string) {
  console.log("first(): factory evaluated");
  return function () {
    console.log(`${param1} called`);
  };
}

export function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

export function third() {
  console.log("third(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("third(): called");
  };
}

export class DecoratorFactory {
  //   //   @first("Methos1 ")
  @second()
  @third()
  method() {
    //   first()
    console.log("Method finally called");
  }
}
