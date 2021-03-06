import ActionFunction from '../ActionFunction';
export default class Modulo extends ActionFunction {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): unknown;
    isValid(vars: any, childrenValues: Array<any>): boolean;
    toString(): string;
}
