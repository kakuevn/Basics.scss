# Basics.scss

Basics.scss is a micro util library with the most often used classes.

## Variables

You can change variables to customise distance, size, and color. 

```
// Used for fonts
$fontReg: 1em;
$fontSm: 0.8em;
$fontLg: 1.5em;
$fontXl: 2em;
$fontSlim: 300;
$fontMed: 400;
$fontBold: 600;
$fontXBold: 700;

// Base white color
$colorWhite: #fff;

// Used for margins and paddings
$distanceSm: 0.5em;
$distanceMd: 1em;
$distanceLg: 2em;
$distanceXl: 4em;
```

For that, you need to import basics-custom.scss file that has no vars:

```
@import 'your-vars-file.scss';
@import "node_modules/basics.css/src/basics-custom.scss";
```

## Docs

### Flexbox

`flex` - display flex

`flex-start` - justify-content: flex-start

`flex-center` - justify-content: center

`flex-end` - justify-content: flex-end

`flex-between` - justify-content: space-between

`flex-around` - justify-content: space-around

`flex-top` - align-items: flex-start

`flex-middle` - align-items: center

`flex-bottom` - align-items: flex-end

`flex-stretch` - align-items: stretch

`flex-column` - flex-direction: column

`flex-wrap` - flex-wrap: wrap

`flex-{1-3}` - flex-grow: {1-3}, e.g. `flex-1` would be `{ flex-grow: 1; }`

`self-start` - flex-start

`self-center` - align-self: center

`self-end` - align-self: flex-end

### Margins and Paddings

Margins and paddings work in the same principle `{margin|padding}-{side}-{size}`, where `{side}` is optional if you want to set the same margin/padding on all sides.

`{side}` can be one of `top`, `right`, `bottom`, or `left`.

`{size}` has `sm`, `md`, `lg`, and `xl`. Those can be customized with your own sizes.

So you'd use it in this way

```
<div class="margin-top-md">...</div>
<div class="margin-bottom-lg">...</div>

<p class="padding-left-sm">...</p>
<p class="padding-right-xl">...</p>

<span class="margin-sm">...</span> // sets margin: $sm;
<span class="margin-auto">...</span> // sets margin for left and right as auto
```

There are also zero margin and padding classes that set either all or one of the sides to `0`. They are structured as `no-{margin|padding}-{side}`, where `{side}` is optional. So that would be

```
<div class="no-margin">...</div> // sets margin: 0
<div class="no-padding-left">...</div> // sets padding-left: 0
<div class="no-margin-top">...</div> // sets margin-top: 0
```

### Text

All the style changes that can be done with text are prefixed with `text-`, i.e.

```
text-underline // sets text-decoration: underline;
text-slim // sets font-weight: $fontSlim;
text-medium // sets font-weight: $fontMed;
text-bold // font-weight: $fontBold;
text-xbold // sets font-weight: $fontXBold;
text-center // sets text-align: center;
text-right // sets text-align: right;
text-uppercase // sets text-transform: uppercase;
text-lowercase // sets text-transform: lowercase;
text-sm // sets font-size: $fontSm;
text-regular // sets font-size: $fontReg;
text-lg // sets font-size: $fontLg;
text-xl // sets font-size: $fontXl;
text-italic // font-style: italic;
text-white // sets color: $colorWhite !important;
```

### Other

There are few more classes, similar to bootstrap that help with positioning of things on the page.

`clear-{side}` - sets clear on either of the sides or both, e.g. `clear-both` will be `clear:both`

`pos-{absolute|relative}` - sets `positioning` either absolute or relative, e.g. `pos-absolute`

`no-list` - sets `list-style: none` and `padding-left: 0`. Used for `ul` or `li` elements.