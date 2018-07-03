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
            this.toggleElement = this.toggleElement.bind(this);
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
            this.addToggleEventListener();
            this.replaceExistingElement();
            this.cloneExistingElement();
            this.appendNewElement();
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

        addToggleEventListener() {
            this.state.newChild.addEventListener(config.eventType, () => { this.toggleElement() });
        }

        toggleElement() {
            this.state.clonedElement.classList.toggle("visible");
        }

        replaceExistingElement() {
            this.state.oldParent.replaceChild(this.state.newChild, this.state.oldChild);
        }

        cloneExistingElement() {
            const parentElementOriginal = document.querySelector(this.parent);
            const childElementClone = parentElementOriginal.cloneNode(true);
            childElementClone.classList.add(config.eventClass);

            this.state.clonedElement = childElementClone;
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
