(class ReplaceAndShowSearchBar {
    constructor({
        parent,
        child,
        main,
        config = {
            tagName,
            childType,
            childClass,
            eventType,
            eventClass
        }
    }) {
        this.parent = parent;
        this.child = child;
        this.main = main;
        this.config = config;
    }

    state = {
        visible: false
    }

    findExistingElement() {
            const parentElement = document.querySelector(this.parent);
            const oldChild = parentElement.querySelector(this.child);

            return oldChild;
    }

    constructNewElement() {
        const newElement = document.createElement(config.tagName);
        newElement.type = config.childType;
        newElement.classList.add(config.childClass);

        return newElement;
    }

    addCustomEventListener() {
        const element = document.querySelector(config.elementClass);
        element.addEventListener(config.eventType, () => { showElement() });
    }

    showElement() {
        if (!state.visible === true) {
            state.visible = true;
        }
    }

    replaceExistingElement() {
        parentElement.replaceChild(newChild, oldChild);
    }

    cloneExistingElement() {
        const searchForm = document.querySelector(this.parent);
        const searchBar = searchForm.cloneNode(true);
        searchBar.classList.add(config.eventClass);
    }

    appendNewElement() {
        const mainElement = document.querySelector(this.main);
        mainElement.appendChild(searchBar);
    }
});

const config = {
    tagName: "input",
    childType: "button",
    childClass: "button3",
    eventType: "click",
    eventClass: "searchbar"
}

new ReplaceAndShowSearchBar({
    parent: ".form--search",
    child: ".button",
    main: ".first-level-section--main-content",
    config: config
}); 
