import CompareOperator from './CompareOperator';

export default class GreaterOrEqual extends CompareOperator {

    public name = 'greaterOrEqual';

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        return childrenValues[0] >= childrenValues[1];
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length === 2;
    }

    public toString(): string {
        return this.getOperands().join(' >= ');
    }
}
