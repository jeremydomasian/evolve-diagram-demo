/*
*   AUTHORS: The EVOLVE Team (evolveauthoring.com) - Daryl Hedley, Wesley Atkinson, Sal Ali
*/


Modernizr.load([
    {
        test: window.JSON,
        nope: 'libraries/json2.js'
    },
    {
        test: window.console == undefined,
        yep: 'libraries/consoles.js'
    },
    {
        test: Modernizr.video || Modernizr.audio,
        nope: 'libraries/swfObject.js',
        complete: function() {
            yepnope.injectJs("adapt/js/adapt.min.js");
        }
    }
]);