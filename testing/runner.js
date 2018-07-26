(function () {
    "use strict";

    window.describe = function describe( name, fn ) {
        console.log( `${name} started testing` );
        fn();
    };
    
    window.test = function test( name, fn ) {
        window.helpers.beforeEach( name );
        try {
            fn();
            console.log( `      ${name}, awesome!` );
        } catch( error ) {
            console.error( `      ${name} failed with ${error.message}!` );
        }
        window.helpers.afterEach( name );
    };

    window.helpers = {
        beforeEach( name ) {
            const boundBeforeEachConfig = beforeEachConfig.bind(window.teststuff);
            try {
                boundBeforeEachConfig();
                console.log(` basic setup for ${name} `);
            } catch ( error ) {
                console.error( ` basic setup failed for ${name} with ${error} `);
            }

        },
        afterEach( name ) {
            const boundAfterEachConfig = afterEachConfig.bind(window.teststuff);
            try {
                boundAfterEachConfig();
                console.log(` tear down for ${name} `);
            } catch ( error ) {
                console.error( ` tear down failed after ${name} with ${ error } `);
            }
        }
    };
})();
