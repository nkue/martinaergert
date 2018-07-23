describe("feature/search", () => {
    test("A search button was found", () => {
        const name = "Search Button";
        try {
            console.log("I've entered try");
            const selectedValue1 = document.querySelector(".search-button");
            console.log("I'm in try", selectedValue1);
            window.asserts.isFalsy(selectedValue1, name);
        } finally {
            console.log("I've entered finally");
            window.searchFeature();
            const selectedValue2 = document.querySelector(".search-button");
            console.log("I'm in finally", selectedValue2);
            window.asserts.isTruthy(selectedValue2, name);
        }
    });
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
    // test("There two values are strictly equal", () => {
    //     const value1 = 42;
    //     const value2 = 42;
    //     const name = "The Truth is always equal"
    //     window.asserts.toBe(value1, value2, name);
    // });
});