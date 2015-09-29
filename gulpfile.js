var elixir = require('laravel-elixir');

// Get Bower Directory Path (elixir.json)
var components = elixir.config.bowerDir;

// Get Bower Package Paths
var paths = {
   'jquery': components + '/jquery/dist/',
   'bootstrap': components + '/bootstrap/',
}

// Create App.css
elixir(function(mix) {
  mix.sass('metaphor-ui.scss');
});