# This feature implements a custom, Javascript-written search.

**In order to use this feature, you will need to place `<div class="search-feature"></div>` into your HTML, just before the script tags at the end of your `<body>`.
Furthermore, you will need to include `<script src="search-feature.js"></script>` right before the closing `</body>` tag.**

### Example:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- your HTML goes from here -->

        <!-- to here -->
        <!-- right before the script tag, enter: -->
        <div class="search-feature"></div>
        <script src="search-feature.js"></script>
    </body>
</html>
```

The feature will look for the div specified above and implement the required HTML via Javascript.

You will also need to add the following classes to your CSS:

```css
:root {
    /* Color variables */
    --color__primary--light: #8eacbb;
    --color__secondary: #ffa000;
    --color__secondary--dark: #c67100;
    --color__secondary--light: #ffd149;

    /* other */
    --border-radius: 5px;
}

.searchbar {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(117, 111, 111, 0.7);
}

    .searchbar > .text-input--search {
        max-width: 50%;
        height: 3rem;
        border-radius: var(--border-radius);
    }

    .searchbar > .button {
        max-width: 10%;
        height: 3rem;
        margin-bottom: 0;
        border-radius: var(--border-radius);
        background: url(./icons8-search.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-color: var(--color__secondary--dark);
    }

.visible {
    display: flex;
}

.text-input:hover {
    border-color: var(--color__secondary--dark);
    cursor: text;
}

    .text-input--search {
        width: 100%;
        margin-left: 0;
    }

.button {
    min-height: 2rem;
    width: 100%;
    border: none;
    box-shadow: 2px 2px 2px var(--color__primary--light);
    font-weight: bold;
    background-color: var(--color__secondary);
    text-transform: uppercase;
    transition: background-color 1s ease, border-radius 1s ease;
}

.button:hover {
    border-radius: var(--border-radius);
    background-color: var(--color__secondary--light);
    cursor: pointer;
}
```

--------------------------

**To add a button for opening the search overlay, you will need to add a further line of HTML. Place `<div class="add-search-button"></div>` where you plan on displaying the button.**

### Example:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- your HTML goes from here -->


            <!-- somewhere here you'd place: -->
            <div class="add-search-button"></div>

        <!-- to here -->
        <!-- right before the script tag, enter: -->
        <div class="search-feature"></div>
        <script src="search-feature.js"></script>
    </body>
</html>
```

--------------------------

**You already have an HTML search implemented? That's great! This will allow for a search to be displayed even when the Javascript could not be loaded. In this case, however, this feature will replace your HTML search with a button. This button is then responsible for opening the search bar via a click handler.
For this to work, please add a wrapper `<div class="replace-search"></div>` around your entire HTML search (including any buttons you might have).**

### Example:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- your HTML goes from here -->
            <div class="replace-search">
                <form role="HTML-search" class="your-search">
                    <input type="search" class="your-input" />
                    <datalist class="your-search--datalist">
                    </datalist>
                    <input type="submit" class="your-search-button"></input>
                </form>
            </div>
            <!-- somewhere here, you need to enter: -->
            <div class="search-feature"></div>

        <!-- to here -->
        <script src="search-feature.js"></script>
    </body>
</html>
```