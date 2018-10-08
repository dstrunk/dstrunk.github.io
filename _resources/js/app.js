/**
 * Load all of the project's JavaScript dependencies.
 */
window._ = require('lodash');
window.axios = require('axios');
window.jsonp = require('jsonp');
window.turbolinks = require('turbolinks');
window.Vue = require('vue');

/**
 * Start turbolinks
 */
turbolinks.start();

/**
 * Create a fresh Vue application instance and attach it to the page.
 * Then, begin adding components to the application.
 */
document.addEventListener('turbolinks:load', function() {
  const app = new Vue({
    el: '#app',
  });

  if (typeof Prism !== undefined) {
    Prism.highlightAll();
  }
});
