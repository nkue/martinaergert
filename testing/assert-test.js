(function (global) {
    global.testStuff = function testStuff() {

        let beforeEachCalled = false;
        let afterEachCalled = false;

        helpers.beforeEach(() => {
            afterEachCalled = false;
            beforeEachCalled = true;
        });

        helpers.afterEach(() => {
            afterEachCalled = true;
            beforeEachCalled = false;
        });

        describe( "beforeEach and afterEach work", () => {
            test( "nothing much happens, beforeEach and afterEach are just supposed to occur", () => {
                console.log("ae:", afterEachCalled, "be:", beforeEachCalled);
            });
            
            console.log("ae:", afterEachCalled, "be:", beforeEachCalled);

        });

        describe( "compare values", () => {

            // isSameType tests
            test( "[Test should fail] Both values (null & object) aren't equal due to different type", () => {
                global.searchFeature();
                const value1 = null;
                const value2 = {};
                global.asserts.areSameTypeDeep( value1, value2 );
            });

            test( "Both values have the same type", () => {
                const value1 = false;
                const value2 = true;
                global.asserts.areSameTypeDeep( value1, value2 );
            });

            // isNotEqualArray tests
            test( "Both arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c" ];
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "[Test should fail] Both arrays aren't equal but damn well are", () => { // should fail
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c", "d" ];
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both arrays (2nd is longer) aren't equal", () => {
                const value1 = [ "a", "b", "c", "d" ];
                const value2 = [ "a", "b", "c", "d", "f" ];
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both nested arrays aren't equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                const value2 = [ "a", "b", "c", [ "e", "d" ], "f" ];
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both mixed type arrays with holes aren't equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(2), undefined ]];
                global.asserts.areNotEqualDeep( value1, value2 );
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
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both nested empty arrays aren't equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [] ] ];
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both arrays with holes aren't equal", () => {
                const value1 = Array(5);
                const value2 = Array(7);
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Is equal doesn't get fooled by an array like object", () => {
                const value1 = [ "a", "b" ];
                const value2 = { "0": "a", "1": "b", length: 2 };
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            // isEqualArray tests

            test( "[Test should fail] both array equal", () => {
                const value1 = [ "a" ];
                const value2 = [ "b" ];
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "[Test should fail] Both nested arrays are equal", () => {
                const value1 = [ "a", "b", "c", [ "d", "g" ], "f" ];
                const value2 = [ "a", "b", "c", [ "d", "e" ], "f" ];
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "Both empty arrays are equal", () => {
                const value1 = [];
                const value2 = [];
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, true, false ]];
                const value2 = [ "a", 1, undefined, [ null, true, false ]];
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "Both mixed type arrays with holes are equal", () => {
                const value1 = [ "a", 1, undefined, [ null, Array(1), false ]];
                const value2 = [ "a", 1, undefined, [ null, Array(1), false ]];
                global.asserts.areEqualArray( value1, value2 );
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
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "Both nested empty arrays are equal", () => {
                const value1 = [ [], [ [], [] ] ];
                const value2 = [ [], [ [], [] ] ];
                global.asserts.areEqualArray( value1, value2 );
            });

            test( "Both arrays with holes are equal", () => {
                const value1 = Array(5);
                const value2 = Array(5);
                global.asserts.areEqualArray( value1, value2 );
            });

            // isEqual tests

            test( "Both mixed objects are equal (but different order)", () => {
                const value1 = { c: 2, a: 1, b: undefined, f: false, e: null };
                const value2 = { a: 1, c: 2, e: null, b: undefined, f: false };
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "Martin hates me", () => {
                const value1 = { a: 2, b: 1 };
                const value2 = { a: 1, b: 2 };
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "[Test should fail] Both objects (contain arrays and) are equal", () => {
                const value1 = { c: 2, b: [ 1, "a" ], a: 2 };
                const value2 = { a: 1, b: [ 1, "a" ], c: 2 };
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "Both objects (contain arrays and) are equal (but aren't)", () => {
                const value1 = { c: 2, b: [ "a", "1" ], a: 2 };
                const value2 = { a: 1, b: [ "1", "a" ], c: 2 };
                try {
                    global.asserts.areEqualObject( value1, value2 );
                } catch (ex) {
                    global.asserts.isTruthy(ex);
                }
            });
            
            test( "Both objects are equal (but different order)", () => {
                const value1 = { c: 2, a: 1 };
                const value2 = { a: 1, c: 2 };
                global.asserts.areEqualObject( value1, value2 );
            });

            test( "-0 is equal to 0", () => {
                const value1 = -0;
                const value2 = 0;
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "0 is equal to 0", () => {
                const value1 = 0;
                const value2 = 0;
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "Both values (undefined) are equal", () => {
                const value1 = { undefined: undefined };
                const value2 = { undefined: undefined };
                global.asserts.areEqualDeep( value1, value2 );
            });

            test( "NaN is equal to NaN", () => {
                const value1 = NaN;
                const value2 = NaN;
                global.asserts.areEqualDeep( value1, value2 );
            });

            // // isNotEqual tests
            test( "[Test should fail] Both objects aren't equal (but really are)", () => {
                const value1 = { a: { b: 1 }, c: 2 };
                const value2 = { a: { b: 1 }, c: 2 };
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "[Test should fail] Both objects aren't equal (but really really really are)", () => {
                const value1 = {};
                const value2 = {};
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both mixed and nested objects aren't equal", () => {
                const value1 = { a: { b: 1 }, c: 2, f: undefined };
                const value2 = { a: { b: 1 }, c: 2 };
                global.asserts.areNotEqualDeep( value1, value2 );
            });

            test( "Both values aren't equal", () => {
                const value1 = { a: { b: 1 }, c: 2 };
                const value2 = [ "a", { b: 1}, "c"];
                global.asserts.areNotEqualDeep( value1, value2 );
            });
        });
    }
})(this);