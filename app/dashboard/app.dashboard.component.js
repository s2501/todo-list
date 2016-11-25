(function(app) {
    app.DashboardComponent =
        ng.core.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            providers: [app.HeroicServices]
        })
            .Class({
                constructor: [
                    app.HeroicServices,
                    ng.router.Router,
                    function(service, router) {

                    var viewModel = this;

                    viewModel.service = service;
                    viewModel.router = router;

                    }
                ],
                ngOnInit: function() {
                    var viewModel = this;
                    viewModel.service.getHeroes()
                        .then(function (result) {
                            viewModel.heroes = result.slice(0, 4);
                        })
                        .catch(function(reason) {
                            console.log(reason);
                        });
                },
                goToDetail: function(hero) {
                    var link = "detail/" + hero.id;

                    this.router.navigateByUrl(link);
                }

            });
})(window.app || (window.app = {}));