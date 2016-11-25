(function(app) {
    app.DocumentListComponent =
        ng.core.Component({
            selector: 'documents',
            templateUrl: 'app/documents-list/documents-list.html',
            providers: [app.DocumentsServices, app.SearchHeroesService]
        })
            .Class({
                constructor: [
                    app.DocumentsServices,
                    app.SearchHeroesService,
                    ng.router.Router,
                    function(service, search, router) {

                        var viewModel = this;

                        viewModel.service = service;
                        viewModel.search = search;
                        viewModel.router = router;

                        viewModel.selectedHero = null;

                    }],
                ngOnInit: function() {
                    this.getHeroes();
                },
                onSelect: function(hero){
                    this.selectedHero = hero;
                },
                getHeroes: function() {
                    var viewModel = this;
                    viewModel.service.getHeroes()
                        .then(function (result) {
                            viewModel.heroes = result;
                        })
                        .catch (function(reason) {
                            console.log(reason);
                        });
                },
                delete: function(hero) {
                    var viewModel = this;

                    viewModel.service.deleteHero(hero.id)
                        .then(function () {
                            viewModel.heroes = viewModel.heroes.filter(function (item){
                                return item !== hero;
                            });
                            if (viewModel.selectedHero === hero) {
                                viewModel.selectedHero = null;
                            }
                        })
                        .catch (function(reason) {
                            console.log(reason);
                        });

                },
                goToDetail: function() {
                    var link = "detail/" + this.selectedHero.id;

                    this.router.navigateByUrl(link);
                },
                onChange: function(item, state){
                    item.done = state;

                    var viewModel = this;
                    viewModel.service.updateHero(item)
                        .then(function (result){
                            viewModel.getHeroes();
                        })
                        .catch(function(reason) {
                            console.log(reason);
                        });
                }

            });
})(window.app || (window.app = {}));