type compareSignature = <T>(value1: T, value2: T, ...otherValues: T[]) => boolean;

let compare: compareSignature = (...args): boolean => {
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] !== args[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(compare('string', 'string')); // true
console.log(compare('string', 'otherstring')); // false
console.log(compare(true, false)); // false