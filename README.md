This feature implements a custom, Javascript-written search.

In order to use this feature, you will need to place <div class="search-feature"></div> into your HTML.
Furthermore, you will need to include <script src="search-feature.js"></script> right before the closing </body> tag.

Example:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <-- your HTML goes from here -->

            // somewhere here, you need to enter:
            <div class="search-feature"></div>

        <-- to here -->
        <script src="search-feature.js"></script>
    </body>
</html>
```

The feature will look for the div specified above and implement the required HTML via Javascript.

--------------------------

To add a button for opening the search overlay, you will need to add a further line of HTML. Place <div class="add-search-button"></div> where you plan on displaying the button.

Example:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <-- your HTML goes from here -->

            // somewhere here, you need to enter:
            <div class="search-feature"></div>

            // somewhere here you'd place:
            <div class="add-search-button"></div>

        <-- to here -->
        <script src="search-feature.js"></script>
    </body>
</html>
```

--------------------------

You already have an HTML search implemented? That's great! This will allow for a search to be displayed even when the Javascript could not be loaded. In this case, however, this feature will replace your HTML search with a button. This button is then responsible for opening the search bar via a click handler.
For this to work, please add a wrapper <div class="replace-search"></div> around your entire HTML search (including any buttons you might have).

Example:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <-- your HTML goes from here -->
            <div class="replace-search">
                <form role="HTML-search" class="your-search">
                    <input class="your-input" />
                    <datalist class="your-search--datalist">
                    </datalist>
                    <div class="your-search-button"></div>
                </form>
            </div>
            // somewhere here, you need to enter:
            <div class="search-feature"></div>

        <-- to here -->
        <script src="search-feature.js"></script>
    </body>
</html>
```