(function(app){
    app.SearchHeroesService = ng.core.Class({
        constructor: [ng.http.Http, function(http) {

            var viewModel = this;

            viewModel.http = http;

            viewModel.url = "http://583813a18405b21200fbd5c7.mockapi.io/vaccines?search=";
            viewModel.headers = new Headers();
            viewModel.headers.append('Content-Type', 'application/json');

        }],
        searchHeroes: function (searchTerm) {
            var viewModel = this;
            var searchUrl = viewModel.url + searchTerm;

            var x = viewModel.http.get(searchUrl)
                .map(function(response) {

                    viewModel.hero = response.json();
                    return viewModel.hero;
                });

            return x;
        }
    });

})(window.app || (window.app = {}));