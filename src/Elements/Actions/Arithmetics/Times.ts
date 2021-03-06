import ActionFunction from '../ActionFunction';

export default class Times extends ActionFunction {

    public name = 'times';

    getHash(): string {
        return '';
    }

    getResult(vars: any, childrenValues: any): number {
        let result = childrenValues.shift();
        for (let childrenValue of childrenValues) {
            result *= childrenValue;
        }

        return result;
    }

    public isValid(vars: any, childrenValues: Array<any>): boolean {
        if (childrenValues.length < 2) {
            return false;
        }

        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }

    toString(): string {
        return this.args.join(' x ');
    }
}
