/*
** Copyright (c) 2020, Oracle and/or its affiliates. All rights reserved.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.info('Loaded Console Javascript');

const okitVersion = '0.3.0';

function hideNavMenu() {
    $(jqId('navigation_menu')).removeClass('okit-navigation-menu-show');
}

$(document).ready(function() {
    /*
    ** Add handler functionality
     */
    console.info('Adding Console Handlers');

    $(jqId('navigation_menu_button')).mouseover(function(e) {
        e.preventDefault();
        //$(jqId('navigation_menu')).removeClass('hidden');
        $(jqId('navigation_menu')).addClass('okit-navigation-menu-show');
    });

    $(jqId('navigation_menu_button')).mouseleave(function(e) {
        e.preventDefault();
        //$(jqId('navigation_menu')).addClass('hidden');
        $(jqId('navigation_menu')).removeClass('okit-navigation-menu-show');
    });

    $(jqId('navigation_menu')).mouseover(function(e) {
        e.preventDefault();
        //$(jqId('navigation_menu')).removeClass('hidden');
        $(jqId('navigation_menu')).addClass('okit-navigation-menu-show');
    });

    $(jqId('navigation_menu')).mouseleave(function(e) {
        e.preventDefault();
        //$(jqId('navigation_menu')).addClass('hidden');
        $(jqId('navigation_menu')).removeClass('okit-navigation-menu-show');
    });

    $(jqId('okit_version')).text('Version: ' + okitVersion);


});
