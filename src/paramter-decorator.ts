// Parameter Decorator

import * as util from "util";

function logParameter(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(
    `logParameter ${target} ${util.inspect(target)} ${String(
      propertyKey
    )} ${parameterIndex}`
  );
}

export class ParamterDecoratorSample {
  member(@logParameter x: number, @logParameter y: number) {
    console.log(`member ${x} ${y}`);
  }
}
