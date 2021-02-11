// export default class

import CouldBeAnything from "./x-default-export-class";
const x1 = new CouldBeAnything();

console.log('default export class');
console.log('instance:', x1);
console.log('methold:', x1.add);

// export class

import { XClassDec } from "./x-export-class-declaration";
const x2 = new XClassDec();

console.log('export class');
console.log('instance:', x2);
console.log('method:', x2.add);


// export = class
import XClassVar = require("./x-export-class-variable");
// import * as XClassVar from "./x-export-class-variable"; // Error
// import XClassVar from "./x-export-class-variable"; // Error
// import { XClassVar } from "./x-export-class-variable"; // Error
const x3 = new XClassVar();

console.log('export =');
console.log('instance:', x3);
console.log('method:', x3.add);

import { add } from './x-export-variable';
add(1,1);