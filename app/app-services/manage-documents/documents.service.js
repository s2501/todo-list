(function(app) {

    app.DocumentsServices = ng.core.Class({
        constructor: [ng.http.Http, function(http) {

            var viewModel = this;

            viewModel.http = http;

            viewModel.url = "http://583813a18405b21200fbd5c7.mockapi.io/documents/";
            viewModel.headers = new Headers();
            viewModel.headers.append('Content-Type', 'application/json');

        }],
        getHeroes: function() {

            var letsMakeAPromise = this.http.get(this.url)
                .toPromise()
                .then(function (response){
                    return response.json();
                })
                .catch(function(reason) {
                    console.log(reason);
                });

            return letsMakeAPromise;
        },
        updateHero: function(obj) {
            var viewModel = this;

            var putUrl = this.url + obj.id;

            var objData = obj;

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            var letsMakeAPromise = viewModel.http.put(putUrl, objData, viewModel.headers)
                .toPromise()
                .then(function () {
                    return obj;
                })
                .catch(function(reason) {
                    console.log(reason);
                });

            return letsMakeAPromise;
        },
        addHero: function(name) {

            var viewModel = this;

            var objData = {
                "name": name
            };

            var letsMakeAPromise = viewModel.http.post(this.url, objData, viewModel.headers)
                .toPromise()
                .then(function () {
                    return objData;
                })
                .catch(function(reason) {
                    console.log(reason);
                });

            return letsMakeAPromise;
        },
        deleteHero: function(heroId) {

            var viewModel = this;

            var urlToDelete = viewModel.url + heroId;

            var letsMakeAPromise = viewModel.http.delete(urlToDelete, {headers: viewModel.headers})
                .toPromise()
                .then(function () {
                    return null;
                })
                .catch(function(reason) {
                    console.log(reason);
                });

            return letsMakeAPromise;
        },
        getSingleHero: function(id) {
            var viewModel = this;
            viewModel.id = id;

            return viewModel.getHeroes().then(function(result) {
                return result.find(function (hero){
                    return hero.id == viewModel.id;
                });
            });
        }
    });

})(window.app || (window.app = {}));