(function (scope) {
    "use strict";

    const registry = {
        beforeEach: "",
        afterEach: ""
    };

    scope.describe = function (name, fn) {
        console.log( `${name} started testing` );
        fn();
    };
    
    scope.test = function test( name, fn ) {
        scope.helpers.beforeEach();
        try {
            fn();
            console.log( `      ${name}, awesome!` );
        } catch( error ) {
            console.error( `      ${name} failed with ${error.message}!` );
        }
        scope.helpers.afterEach();
    };

    scope.helpers = {
        beforeEach() {
            const bodyContent = document.querySelector("body");
            const clonedBody = bodyContent.cloneNode(true);
            registry.beforeEach = clonedBody;
        },
        afterEach() {
            const htmlTag = document.querySelector("html");
            const bodyTag = document.querySelector("body");
            htmlTag.replaceChild(registry.beforeEach, bodyTag);
            registry.beforeEach = registry.afterEach;
        }
    };
})(window);
