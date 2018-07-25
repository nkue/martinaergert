(function () {
    window.testStuff = function testStuff() {

        describe("feature/search", () => {

            // window.helpers.beforeEach(test.name, {
            //     // do something useful
            // });

            // window.helpers.afterEach(test.name, {
            //     // remove everything deemed useful previously
            // });
            test( "Both arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c" ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both arrays (2nd is longer) aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c", "d", "f" ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both nested arrays are equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                const value2 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both nested arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                const value2 = [ "a", "b", "c", [ "e", "d" ], "f" ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both empty arrays are equal", () => {
                const value1 = [];
                const value2 = [];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, true, false ]];
                const value2 = [ "a", 1, undefined, [ null, true, false ]];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays with holes are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(1), false ]];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays with holes are not equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(2), undefined ]];
                window.asserts.isEqualArray( value1, value2 );
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
                window.asserts.isEqualArray( value1, value2 );
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
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both nested empty arrays are equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [], [] ] ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both nested empty arrays are not equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [] ] ];
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both arrays with holes are equal", () => {
                const value1 = Array(5);
                const value2 = Array(5);
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Both arrays with holes aren't equal", () => {
                const value1 = Array(5);
                const value2 = Array(7);
                window.asserts.isEqualArray( value1, value2 );
            });

            test( "Is equal doesn't get fooled by an array like object", () => {
                const value1 = [ "a", "b" ];
                const value2 = { "0": "a", "1": "b", length: 2 };
                window.asserts.isEqualArray( value1, value2 );
            });

            // test( "Both objects are equal", () => {
            //     const value1 = { a: { b: 1 }, c: 2 };
            //     const value2 = { a: { b: 1 }, c: 2 };
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "Both mixed and nested objects are not equal", () => {
            //     const value1 = { a: { b: 1 }, c: 2, f: undefined };
            //     const value2 = { a: { b: 1 }, c: 2 };
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "Both objects are equal (but different order)", () => {
            //     const value1 = { c: 2, a: 2 };
            //     const value2 = { a: 1, c: 2 };
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "Both mixed objects are equal (but different order)", () => {
            //     const value1 = { c: 2, a: 2, b: undefined, f: false, e: null };
            //     const value2 = { a: 1, c: 2, e: null, b: undefined, f: false };
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "Both objects (contain arrays and) are equal", () => {
            //     const value1 = { c: 2, b: [ 1, "a" ], a: 2 };
            //     const value2 = { a: 1, b: [ 1, "a" ], c: 2 };
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "Both values aren't equal", () => {
            //     const value1 = { a: { b: 1 }, c: 2 };
            //     const value2 = [ "a", { b: 1}, "c"];
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "NaN is equal to NaN", () => {
            //     const value1 = NaN;
            //     const value2 = NaN;
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "-0 is equal to 0", () => {
            //     const value1 = -0;
            //     const value2 = 0;
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test( "0 is equal to 0", () => {
            //     const value1 = 0;
            //     const value2 = 0;
            //     window.asserts.isEqual( value1, value2 );
            // });

            // test("A search button was found", () => {
            //     const name = "Search Button";
            //     const selectedValue = document.querySelector(".search-button");
            //     window.asserts.isTruthy(selectedValue, name);
            // });
            // test("A search button was created and found", () => {
            //     const name = "Search Button";
            //     window.searchFeature();
            //     const selectedValue = document.querySelector(".search-button");
            //     window.asserts.isTruthy(selectedValue, name);
            // })
            // test("A test class is present", () => {
            //     const selectedValue = document.querySelector(".test");
            //     const name = "Test Class";
            //     window.asserts.isTruthy(selectedValue, name);
            // });
            // test("An element with class search-feature is present", () => {
            //     const selectedValue = document.querySelector(".search-feature");
            //     const name = "Search Feature Element";
            //     window.asserts.isTruthy(selectedValue, name);
            // });
            // test("There is no element with class search-feature", () => {
            //     const selectedValue = document.querySelector(".search-feature");
            //     const name = "Search Feature Element";
            //     window.asserts.isFalsy(selectedValue, name);
            // });
            // test("There is no element with class falsy-test", () => {
            //     const selectedValue = document.querySelector(".falsy-test");
            //     const name = "Falsy Test Element";
            //     window.asserts.isFalsy(selectedValue, name);
            // });
            // test("The two values are strictly equal", () => {
            //     const value1 = 42;
            //     const value2 = 42;
            //     const name = "The Truth is always equal"
            //     window.asserts.toBe(value1, value2, name);
            // });
        });
    }
})();