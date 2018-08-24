(function (scope) {
    "use strict";

    const registry = {
        beforeEach: [],
        afterEach: []
    };

    scope.describe = function (name, fn) {
        console.log( `${name} started testing` );
        fn();
    };
    
    scope.test = function test( name, fn ) {
        registry.beforeEach.forEach(function (item) {
            item();
        });
        try {
            fn();
            console.log( `      ${name}, awesome!` );
        } catch( error ) {
            console.error( `      ${name} failed with ${error.message}!` );
        }
        registry.afterEach.forEach(function (item) {
            item();
        });
    };

    scope.helpers = {
        beforeEach(fn) {
            registry.beforeEach.push(fn);
        },
        afterEach(fn) {
            registry.afterEach.push(fn);
        }
    };
})(window);
