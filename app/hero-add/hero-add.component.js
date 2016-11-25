(function(app) {
    app.addHeroComponent =
        ng.core.Component({
            selector: 'add-hero',
            templateUrl: 'app/hero-add/hero-add.html',
            provider: [ app.HeroicServices ]
        })
            .Class({
                constructor:
                    [
                        ng.common.Location,
                        app.HeroicServices,
                        ng.router.Router,
                        function(location, service, router) {
                            var viewModel = this;
                            viewModel.service = service;
                            viewModel.location = location;
                            viewModel.router = router;
                            viewModel.newHeroName = null;
                        }
                    ],
                goBack: function() {
                    this.location.back();
                },
                addHero: function() {
                    var viewModel = this;
                    if(this.newHeroName) {
                        this.service.addHero(this.newHeroName)
                            .then(function (result) {
                                viewModel.router.navigateByUrl('heroes');
                            })
                            .catch(function(reason) {
                                console.log(reason);
                            });
                    }

                }
            });
})(window.app || (window.app = {}));