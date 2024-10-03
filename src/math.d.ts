// src/math.d.ts
declare module "math" {
    function sum(a: number, b: number): number;
    function subtract(a: number, b:number): number;
    const math = {
        sum,
        subtract
    }
    export = math;
  }
  