(function () {
    "use strict";

    window.describe = function describe(name, fn) {
        console.log(`${name} started testing`);
        fn();
    };
    
    window.test = function test(name, fn) {
        try {
            fn();
            console.log(`      ${name}, awesome!`);
        } catch(error) {
            console.error(`      ${name} failed with ${error.message}!`);
        }
    };
})();
