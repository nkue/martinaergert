(function () {
    "use strict"

    window.searchFeature = function searchFeature() {
        
        const element = constructElement(
            "form",
            {
                name: "search",
                role: "search",
                method: "POST",
                class: "searchbar"
            },
            [
                constructElement(
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
                constructElement(
                    "datalist",
                    {
                        class: "form-options form-options--search",
                        id: "eastereggs"
                    },
                    [
                        constructElement(
                            "option",
                            {
                                class: "form-option form-option--search",
                                value: "duck"
                            }
                        )
                    ]
                ),
                constructElement(
                    "input",
                    {
                        class: "button button--submit",
                        type: "submit",
                        id: "submit",
                        value: "",
                        accesskey: "enter"
                    }
                )
            ]
        );
    
        function showElement(element) {
            element.classList.add("visible");
        }
    
        function constructElement( tagName, attributes = {}, children = [] ) {
            const newElement = document.createElement( tagName );
            Object.entries( attributes ).forEach(([ prop, value ]) => {
                newElement.setAttribute( prop, value );
            });
            children.forEach(child => newElement.appendChild( child ));
            
            return newElement;
        }
    
        function appendElement(element) {
            const mainElement = document.querySelector(".search-feature");
            if (mainElement) {
                mainElement.appendChild(element);
            }
        }
    
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
                }
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
    
            newChild.addEventListener("click", () => showElement(element));
        }
    
        appendElement(element);
        replaceOldSearch();
        
    };
})();