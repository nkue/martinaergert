(function () {
    "use strict";

    window.describe = function describe( name, fn ) {
        console.log( `${name} started testing` );
        fn();
    };
    
    window.test = function test( name, fn ) {

        try {
            fn();
            console.log( `      ${name}, awesome!` );
        } catch( error ) {
            console.error( `      ${name} failed with ${error.message}!` );
        }
    };

    window.helpers = {
        beforeEach( value ) {
            console.log( `creating basic setup before ${value}` );
        },
        afterEach( value ) {
            console.log( `resetting to basic setup after ${value}` );
        }
    };
})();
