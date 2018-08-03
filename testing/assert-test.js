(function (scope) {
    scope.testStuff = function testStuff() {
        
        describe( "beforeEach and afterEach work", () => {

            try {
                test( "button is truthy", () => {
                    scope.searchFeature();
                    const selectedValue = document.querySelector(".search-button");
                    scope.asserts.isTruthy( selectedValue );
    
                });
            } finally {
                test( "button is falsy", () => {
                    const selectedValue = document.querySelector(".search-button");
                    scope.asserts.isFalsy( selectedValue );
                })
                // try {
                //     const selectedValue = document.querySelector(".search-button");
                //     scope.asserts.isTruthy( selectedValue );
                //     console.error("As the button is still there, beforeEach or afterEach don't work.");
                // } catch ( error ) {
                //     console.log( "button is not there anymore, great" );
                // }
            }

        });

        describe( "compare values", () => {

            // isSameType tests
            test( "Both values (null & object) aren't equal due to different type", () => {
                scope.searchFeature();
                const value1 = null;
                const value2 = {};
                scope.asserts.isSameType( value1, value2 );
            });

            // isNotEqualArray tests
            test( "Both arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c" ];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both arrays (2nd is longer) aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c", "d", "f" ];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both nested arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                const value2 = [ "a", "b", "c", [ "e", "d" ], "f" ];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays with holes aren't equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(2), undefined ]];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both matrix-shaped arrays aren't equal", () => {
                const value1 = [ 
                    [ 1, -2, 3 ],
                    [ 4, 5, 6 ],
                    [ 7, 8, 9 ]
                ];
                const value2 = [ 
                    [ 1, 2, 3 ],
                    [ 4, 5, 6 ],
                    [ 7, 8, 9 ]
                ];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both nested empty arrays aren't equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [] ] ];
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Both arrays with holes aren't equal", () => {
                const value1 = Array(5);
                const value2 = Array(7);
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            test( "Is equal doesn't get fooled by an array like object", () => {
                const value1 = [ "a", "b" ];
                const value2 = { "0": "a", "1": "b", length: 2 };
                scope.asserts.isNotEqualArray( value1, value2 );
            });

            // isEqualArray tests

            test( "Both nested arrays are equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                const value2 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both empty arrays are equal", () => {
                const value1 = [];
                const value2 = [];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, true, false ]];
                const value2 = [ "a", 1, undefined, [ null, true, false ]];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays with holes are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(1), false ]];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both matrix-shaped arrays are equal", () => {
                const value1 = [ 
                    [ -1, 2, 3 ],
                    [ 4, -5, 6 ],
                    [ 7, 8, -9 ]
                ];
                const value2 = [ 
                    [ -1, 2, 3 ],
                    [ 4, -5, 6 ],
                    [ 7, 8, -9 ]
                ];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both nested empty arrays are equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [], [] ] ];
                scope.asserts.isEqualArray( value1, value2 );
            });

            test( "Both arrays with holes are equal", () => {
                const value1 = Array(5);
                const value2 = Array(5);
                scope.asserts.isEqualArray( value1, value2 );
            });

            // isEqual tests

            test( "Both mixed objects are equal (but different order)", () => {
                const value1 = { c: 2, a: 2, b: undefined, f: false, e: null };
                const value2 = { a: 1, c: 2, e: null, b: undefined, f: false };
                scope.asserts.isEqual( value1, value2 );
            });

            test( "Both objects (contain arrays and) are equal", () => {
                const value1 = { c: 2, b: [ 1, "a" ], a: 2 };
                const value2 = { a: 1, b: [ 1, "a" ], c: 2 };
                scope.asserts.isEqual( value1, value2 );
            });
            
            test( "Both objects are equal (but different order)", () => {
                const value1 = { c: 2, a: 2 };
                const value2 = { a: 1, c: 2 };
                scope.asserts.isEqual( value1, value2 );
            });

            test( "-0 is equal to 0", () => {
                const value1 = -0;
                const value2 = 0;
                scope.asserts.isEqual( value1, value2 );
            });

            test( "0 is equal to 0", () => {
                const value1 = 0;
                const value2 = 0;
                scope.asserts.isEqual( value1, value2 );
            });

            test( "Both values (undefined) are equal", () => {
                const value1 = { undefined: undefined };
                const value2 = { undefined: undefined };
                scope.asserts.isEqual( value1, value2 );
            });

            test( "NaN is equal to NaN", () => {
                const value1 = NaN;
                const value2 = NaN;
                scope.asserts.isEqual( value1, value2 );
            });

            // isNotEqual tests
            test( "Both objects aren't equal", () => {
                const value1 = { a: { b: 1 }, c: 2 };
                const value2 = { a: { b: 1 }, c: 2 };
                scope.asserts.isNotEqual( value1, value2 );
            });

            test( "Both mixed and nested objects aren't equal", () => {
                const value1 = { a: { b: 1 }, c: 2, f: undefined };
                const value2 = { a: { b: 1 }, c: 2 };
                scope.asserts.isNotEqual( value1, value2 );
            });

            test( "Both values aren't equal", () => {
                const value1 = { a: { b: 1 }, c: 2 };
                const value2 = [ "a", { b: 1}, "c"];
                scope.asserts.isNotEqual( value1, value2 );
            });
        });
    }
})(window);