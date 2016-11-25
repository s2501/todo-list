(function(app) {
    app.Hero =
        ng.core.Class({
            constructor: function(obj) {

                var viewModel = this;

                viewModel.id = obj.id;
                viewModel.name = obj.name;
            }
        });
})(window.app || (window.app = {}));