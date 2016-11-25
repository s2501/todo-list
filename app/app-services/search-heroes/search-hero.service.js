(function(app){
    app.SearchHeroesService = ng.core.Class({
        constructor: [ng.http.Http, function(http) {

            var viewModel = this;

            viewModel.http = http;

            viewModel.url = "http://57ed26849815a81100234d00.mockapi.io/v1/heroes?search=";
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