// Class Decorators:
// A Class Decorator is declared just before a class declaration.
// The class decorator is applied to the constructor of the class.

// https://www.typescriptlang.org/docs/handbook/decorators.html#:~:text=Decorators%20provide%20a%20way%20to,may%20change%20in%20future%20releases

export type Constructor = { new (...args: any[]): any };
export function toString<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}

@toString
export class ClassDecorator {
  public foo = "foo";
  public num = 24;
}
