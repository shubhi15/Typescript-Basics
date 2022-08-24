import "reflect-metadata";

export function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
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

export function BaseEntity(ctr: Function) {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString("es-ES");
}

const formatMetadataKey = Symbol("format");
export function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
export function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export type Constructor = { new (...args: any[]): any };

export function toString<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}
