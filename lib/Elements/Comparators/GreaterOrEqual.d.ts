import Comparator from './Comparator';
export default class GreaterOrEqual extends Comparator {
    name: string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): boolean;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
}
