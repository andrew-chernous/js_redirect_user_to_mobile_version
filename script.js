/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($, Drupal) {

  Drupal.behaviors.razgradbild = {
    attach: function (context, settings) {
      if (screen.width <= 800) {
        window.location = "http://jquery.com/";
      }
      if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
        location.replace("http://jquery.com/");
      }
    }
  };
})(jQuery, Drupal);