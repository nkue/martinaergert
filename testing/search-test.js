(function () {
    window.testStuff = function testStuff() {

        describe("feature/search", () => {

            // window.helpers.beforeEach(test.name, {
            //     // do something useful
            // });

            // window.helpers.afterEach(test.name, {
            //     // remove everything deemed useful previously
            // });
            test( "Both arrays are equal", () => {
                let value1 = [ "a", "b", "c", "d" ];
                let value2 = [ "a", "b", "c" ];
                window.asserts.isEqual( value1, value2 );
            });

            test( "Both arrays (2nd is longer) are equal", () => {
                let value1 = [ "a", "b", "c", "d" ];
                let value2 = [ "a", "b", "c", "d", "f" ];
                window.asserts.isEqual( value1, value2 );
            });

            test( "Both objects are equal", () => {
                let value1 = { a: { b: 1 }, c: 2 };
                let value2 = { a: { b: 1 }, c: 2 };
                window.asserts.isEqual( value1, value2 );
            });

            test( "Both objects are equal (but different order)", () => {
                let value1 = { c: 2, a: 2 };
                let value2 = { a: 1, c: 2 };
                window.asserts.isEqual( value1, value2 );
            });

            test( "Both values are equal", () => {
                let value1 = { a: { b: 1 }, c: 2 };
                let value2 = [ "a", { b: 1}, "c"];
                window.asserts.isEqual( value1, value2 );
            });

            test( "NaN is equal to NaN", () => {
                let value1 = NaN;
                let value2 = NaN;
                window.asserts.isEqual( value1, value2 );
            });

            test( "-0 is equal to 0", () => {
                let value1 = -0;
                let value2 = 0;
                window.asserts.isEqual( value1, value2 );
            });

            test( "0 is equal to 0", () => {
                let value1 = 0;
                let value2 = 0;
                window.asserts.isEqual( value1, value2 );
            });

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