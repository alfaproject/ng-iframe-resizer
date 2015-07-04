# ng-iframe-resizer
This is a basic directive that wraps [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer)
to be usable in Angular projects.

## Installation

    bower install ng-iframe-resizer --save

## Instructions
How to use the ng-iframe-resizer directive in your Angular application.

```js
// Include it in Angular as per
angular.module("app", ["ngIframeResizer"])
```

```html
<!-- After that it's ready to use -->
<iframe src="http://anotherdomain.com/iframe.html" scrolling="no" ng-iframe-resizer></iframe>
```

Also, you need to place the original [iframeResizer.contentWindow.min.js](https://raw.github.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.contentWindow.min.js)
in the page contained within your iFrame. This file is designed to be a guest on
someone else's system, so has no dependencies and won't do anything until it's
activated by a message from the containing page.

## License
Copyright &copy; 2015 [Joao Dias](https://github.com/alfaproject).
Licensed under the [MIT License](LICENSE).
