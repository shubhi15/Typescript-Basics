export class ClassGenericSample<T, U> {
  Id: T;
  Name: U;
  constructor(id: T, name: U) {
    this.Id = id;
    this.Name = name;
  }
  display(): void {
    console.log(`Id = ${this.Id}, Name = ${this.Name}`);
  }
}
