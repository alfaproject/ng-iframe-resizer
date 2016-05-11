# ng-iframe-resizer
This is a basic directive that wraps [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer)
to be usable in Angular projects.

## Installation

    bower install ng-iframe-resizer --save

## Instructions
How to use the ng-iframe-resizer directive in your Angular application:

- Include the following two JS files in your project:

```html
<script src="[your bower_components folder]/iframe-resizer/js/iframeResizer.js" type="text/javascript"></script>
<script src="[your bower_components folder]/ng-iframe-resizer/dist/iframe-resizer.js" type="text/javascript"></script>
```

- Tell Angular to include the module as per usual:
```js
angular.module("app", ["ngIframeResizer"])
```

- You need to place the original [iframeResizer.contentWindow.min.js](https://raw.github.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.contentWindow.min.js)
in the source page within your iFrame. This file is designed to be a guest on
someone else's system, so has no dependencies and won't do anything until it's
activated by a message from the iFrame's parent page.
```html
<script src="iframeResizer.contentWindow.min.js" type="text/javascript"></script>
```

- After that, it's ready to use as an Angular directive (attribute):
```html
<iframe src="http://anotherdomain.com/iframe.html" scrolling="no" ng-iframe-resizer></iframe>
```


## License
Copyright &copy; 2015 [Joao Dias](https://github.com/alfaproject).
Licensed under the [MIT License](LICENSE).
