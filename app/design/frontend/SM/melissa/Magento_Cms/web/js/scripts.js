define([
    'jquery',
    'sm/plugins/slick'
], function ($, slick) {
    'use strict';
    return function() {
        $('.products-grid').slick();
    };
});