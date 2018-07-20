(function () {
    "use strict";

    window.asserts = {
        isTruthy(selectedValue, name) {
            if (!selectedValue) {
                throw new Error(`    ${name} has value: ${selectedValue} and is not truthy!`);
            }
        },
        isFalsy(selectedValue, name) {
            if (selectedValue) {
                throw new Error(`    ${name} has value: ${selectedValue} and is not falsy!`);
            }
        },
        toBe(value1, value2, name) {
            if (value1 !== value2) {
                throw new Error(`    ${name}: ${value1} is not equal to ${value2}`)
            }
        }
    }
})();