(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
        .Class({
            constructor: function() {

                var viewModel = this;

                viewModel.title = "Tour of heroes";

            }

        });
})(window.app || (window.app = {}));