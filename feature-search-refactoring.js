(function searchFeature() {

    function createElement(tagName, attributes = {}, children = []) {
        const newElement = document.createElement(tagName);
        const mainElement = document.querySelector(".first-level-section--main-content");
        const childElements = children.map(child1 => {
            console.log(children);
            document.createElement(child1[0]);
        });
        console.log(children);
        console.log(childElements);
        newElement.type = attributes.childType;
        newElement.classList.add(attributes.childClass);
        mainElement.appendChild(newElement);
        mainElement.appendChild(childElements);

        return newElement;
    };

    createElement(
        tagName = "div",
        attributes = {
            className: "test",
            childClass: "testChild",
            childType: "span"
        },
        children = [
            something = [
                tagName = "div"
            ],
            somethingElse = [
                tagName = "someTest"
            ] 
        ]
    );

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
                oldParent: "",
                oldChild: "",
                newChild: "",
                clonedElement: "",
                visible: false
            }
        }

        doStuff() {
            this.findExistingElement();
            this.constructNewElement();
            this.replaceExistingElement();
            this.cloneExistingElement();
            this.appendNewElement();
            this.addToggleEventListener(this.state.newChild);
            this.addToggleEventListener(this.state.clonedElement.querySelector(".button"));
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

        addToggleEventListener(element) {
            element.addEventListener(config.eventType, () => this.toggleElement());

            document.addEventListener('keydown', event => {
                const keyName = event.key;
              
                if (this.state.visible === true && keyName === 'Escape') {
                    event.preventDefault();
                    this.toggleElement();
                }
            });

            document.addEventListener('keypress', (event) => {
                const keyName = event.key;
                
                if (event.ctrlKey && keyName === 'q' && this.state.visible === false) {
                    event.preventDefault();
                    this.toggleElement();
                };
            });
        }

        toggleElement() {
            this.state.clonedElement.classList.toggle("visible");
            const otherChild = this.state.clonedElement.querySelector(".text-input");
            otherChild.classList.toggle("hidden");
            this.state.visible = !this.state.visible;
        }

        replaceExistingElement() {
            this.state.oldParent.replaceChild(this.state.newChild, this.state.oldChild);
            const otherChild = document.querySelector(".text-input");

            otherChild.classList.add("hidden");
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

    const config = {
        tagName: "input",
        childType: "button",
        childClass: "button",
        eventType: "click",
        eventClass: "searchbar"
    }

    new ReplaceAndShowSearchBar({
        parent: ".form--search",
        child: ".button",
        main: ".first-level-section--main-content",
        config
    }).doStuff();
})();
