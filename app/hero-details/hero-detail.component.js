(function(app) {
    app.HeroDetailsComponent =
        ng.core.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-details/hero-detail.html',
            provider: [ app.HeroicServices ]
        })
        .Class({
            constructor:
                [
                    ng.router.ActivatedRoute,
                    ng.common.Location,
                    app.HeroicServices,
                    function(route, location, service) {
                        var viewModel = this;
                        viewModel.route = route;
                        viewModel.service = service;
                        viewModel.location = location;
                        viewModel.hero = null;
                }],
                ngOnInit: function() {
                    var viewModel = this;
                    viewModel.route.params.forEach(function(obj){
                        var id = obj.id;
                        viewModel.service.getSingleHero(id)
                            .then(function (result){
                                viewModel.hero = result;
                            })
                            .catch(function(reason) {
                                console.log(reason);
                            });
                    });
                },
                goBack: function() {
                    this.location.back();
                },
                save: function() {
                    var viewModel = this;
                    viewModel.service.updateHero(viewModel.hero)
                        .then(function (result){
                            viewModel.goBack();
                        })
                        .catch(function(reason) {
                            console.log(reason);
                        });
                }
        });
})(window.app || (window.app = {}));