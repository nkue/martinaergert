var searchFeature = (function () {
    const element = constructElement(
        "form",
        {
            name: "search",
            role: "search",
            method: "POST",
            class: "searchbar"
        },
        [
            child1 = constructElement(
                "input",
                {
                    class: "text-input text-input--search",
                    id: "search",
                    type: "search",
                    name: "q",
                    placeholder: "looky, looky - findy, findy!",
                    list: "eastereggs",
                    size: "50"
                }
            ),
            child2 = constructElement(
                "datalist",
                {
                    class: "form-options form-options--search",
                    id: "eastereggs"
                },
                [
                    option1 = constructElement(
                        "option",
                        {
                            class: "form-option form-option--search",
                            value: "duck"
                        }
                    )
                ]
            ),
            child3 = document.createElement("div")
        ]
    );

    function onSearchClick() {
        element.classList.add("visible");
    }

    function constructElement(tagName, attributes = {}, children = []) {
        const newElement = document.createElement(tagName);
        Object.entries(attributes).forEach(attr => {
            newElement.setAttribute(attr[0], attr[1]);
        });
        Object.keys(children).forEach(child => {
            newElement.appendChild(children[child]);
        });
        
        return newElement;
    };

    function appendElement() {
        if (element) {
            const mainElement = document.querySelector(".search-feature");
            mainElement.appendChild(element);
        } else return;
    };

    function replaceOldSearch() {
        const parent = document.querySelector(".replace-search");
        const newChild = constructElement(
            "input",
            {
                name: "search",
                role: "search-button",
                type: "submit",
                method: "POST",
                value: "Search",
                class: "search-button"
            },
            []
        );

        if (parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }

            parent.appendChild(newChild);
        } else {
            const mainElement = document.querySelector(".add-search-button");
            mainElement.appendChild(newChild);
        }

        newChild.addEventListener("click", onSearchClick);
    }

    appendElement();
    replaceOldSearch();
    
})

searchFeature();