(() => {

    const config = {
        tagName: "input",
        childType: "button",
        childClass: "button3",
        eventType: "click",
        eventClass: "searchbar"
    }

    class ReplaceAndShowSearchBar {
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
            this.config.tagName = config.tagName;
            this.config.childType = config.childType;
            this.config.childClass = config.childClass;
            this.config.eventType = config.eventType;
            this.config.eventClass = config.eventClass;
            this.state = {
                visible: false,
                oldParent: "",
                oldChild: "",
                newChild: "",
                clonedElement: ""
            }
        }

        doStuff() {
            this.findExistingElement();
            this.constructNewElement();
            this.addCustomEventListener();
            this.replaceExistingElement();
            this.cloneExistingElement();
            this.appendNewElement();
            this.showElement();
        }

        findExistingElement() {
            const parentElement = document.querySelector(this.parent);
            const oldChild = parentElement.querySelector(this.child);
            
            this.state.oldParent = parentElement;
            this.state.oldChild = oldChild;
        }

        constructNewElement() {
            const newElement = document.createElement(config.tagName);
            newElement.type = config.childType;
            newElement.classList.add(config.childClass);

            return this.state.newChild = newElement;
        }

        addCustomEventListener() {
            this.state.newChild.addEventListener(config.eventType, () => { showElement() });
        }

        showElement() {
            if (!this.state.visible === true) {
                this.state.visible = true;
            }
        }

        replaceExistingElement() {
            this.state.oldParent.replaceChild(this.state.newChild, this.state.oldChild);
        }

        cloneExistingElement() {
            const searchForm = document.querySelector(this.parent);
            const searchBar = searchForm.cloneNode(true);
            searchBar.classList.add(config.eventClass);

            this.state.clonedElement = searchBar;
        }

        appendNewElement() {
            const mainElement = document.querySelector(this.main);
            mainElement.appendChild(this.state.clonedElement);
        }
    }

    new ReplaceAndShowSearchBar({
        parent: ".form--search",
        child: ".button",
        main: ".first-level-section--main-content",
        config: config
    }).doStuff();
})();
