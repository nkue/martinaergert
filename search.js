// function onSearchClick() {
//     let search = prompt('What are you looking for?')

//     console.log(search);
// }

// function onSearchClick() {
//     const searchOverlay = '<div class="search-overlay"><input type="search" class="search" /><input  class="button button--submit" type="submit" value="Search" /></div>'
    
//     document.getElementById("search-form").innerHTML = searchOverlay;
// }

// (function displaySearchButton() {
//     const searchButton = [
//         '<div class="search-button" id="search-button">',
//             '<input class="button button--submit" type="submit" value="Search" onclick="onSearchClick()" />',
//         '</div>'
//     ].join("\n");

//     document.getElementById("search-form").innerHTML = searchButton;

//     function onSearchClick() {
//         const searchOverlay = [
//             '<div class="search-overlay">',
//                 '<input type="search" class="text-input text-input--search" list="eastereggs" id="search-input" />',
//                 '<datalist class="form-options form-options--search" id="eastereggs">',
//                     '<option class="form-option form-option--search" value="duck" />',
//                     '<option class="form-option form-option--search" value="1&#8364; in die Kasse" />',
//                     '<option class="form-option form-option--search" value="Aberdeen bei Sonne" />',
//                     '<option class="form-option form-option--search" value="Pato" />',
//                     '<option class="form-option form-option--search" value="SPAM" />',
//                 '</datalist>',
//                 '<input class="button button--submit" type="submit" value="Search" onclick="executeSearch()" id="search"/>',
//             '</div>'
//         ].join("\n");
    
//         document.getElementById("search-button").innerHTML = searchOverlay;
//     };
    
//     function executeSearch() {
//         const searchValue = document.getElementById("search-input").value;
//         alert(searchValue.toString());
//     };
// }());

(() => {

    const config = {
        tagName: "input",
        childType: "button",
        childClass: "button3",
        eventType: "click",
        eventClass: "searchbar"
    }

    class ReplaceAndShow {
        constructor({
            parent,
            child,
            main
        }) {
            this.parent = parent;
            this.child = child;
            this.main = main;
            this.create = this.create.bind(this);
        }

        change() {
            const parentElement = document.querySelector(this.parent);
            const oldChild = parentElement.querySelector(this.child);
            console.log("config", this);
            const newChild = constructElement(config);
            console.log(newChild);

            parentElement.replaceChild(newChild, oldChild);
        }

        create(eventClass) {
            const mainElement = document.querySelector(this.main);
            const searchForm = document.querySelector(this.parent);
            const searchBar = searchForm.cloneNode(true);
            searchBar.classList.add(eventClass);

            mainElement.appendChild(searchBar);
        }
    }

    new ReplaceAndShow({
        parent: ".form--search",
        child: ".button",
        main: ".first-level-section--main-content"
    }).change();

    function constructElement({
        tagName,
        childType,
        childClass,
        eventType,
        eventClass
    }) {
        const newElement = document.createElement(tagName);
        newElement.type = childType;
        newElement.classList.add(childClass);
        newElement.addEventListener(eventType, () => { create(eventClass) });
        console.log("new", this);

        return newElement;
    }
    // function replaceSearchButton(formclass) {
    //     const searchForm = document.querySelector(formclass);
    //     const oldSearchButton = searchForm.querySelector(".button");
    //     const parentElement = oldSearchButton.parentNode;
    //     const searchButton = document.createElement("input");
    //     searchButton.type = "button";
    //     console.log("searchButton", searchButton, "parent", parentElement);

    //     searchButton.classList.add("button1");
    //     searchButton.addEventListener("click", openSearchBar);
        
    //     parentElement.replaceChild(searchButton, oldSearchButton);
    // }

    // function createSearchBar(mainclass) {
    //     console.log("this happened");
    //     const main = document.querySelector(mainclass);
    //     const searchForm = document.querySelector(".form--search");
    //     const searchBar = searchForm.cloneNode(true);
    //     console.log("searchbar", searchBar);
    //     searchBar.classList.add("searchbar");

    //     main.appendChild(searchBar);
    // }

    // function openSearchBar() {
    //     const searchBar = document.querySelector(".searchbar");
    //     searchBar.classList.add("visible");
    // }
})();

