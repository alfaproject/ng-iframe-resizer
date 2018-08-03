(function(ngIframeResizer) {
    'use strict';

    angular
        .module(ngIframeResizer, [])
        .directive(ngIframeResizer, function () {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    iFrameResize({}, element[0]);
                    
                    element.on('$destroy', function () {
                        element[0].iFrameResizer.close();
                    });
                }
            };
        });

}('ngIframeResizer'));
