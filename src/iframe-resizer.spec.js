'use strict';

describe('directive: ng-iframe-resizer', function () {
    var element, scope;

    beforeEach(function () {
        module('ngIframeResizer');

        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();

            element = '<iframe src="about:blank" ng-iframe-resizer></iframe>';

            element = $compile(element)(scope);
            scope.$digest();
        });
    });

    describe('with default settings', function () {
        it ('it should have the id "iFrameResizer0"', function () {
            expect(element.attr('id')).toEqual('iFrameResizer0');
        });
    });
});
