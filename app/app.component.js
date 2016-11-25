(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
        .Class({
            constructor: function() {

                var viewModel = this;

                viewModel.title = "TODO: list";

            }

        });
})(window.app || (window.app = {}));