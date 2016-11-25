(function(app) {
    app.HeroSearchComponent =
        ng.core.Component({
            selector: 'search-heroes',
            templateUrl: 'app/hero-search/hero-search.html',
            providers: [app.SearchHeroesService]
        })
            .Class({
                constructor:
                    [
                        app.SearchHeroesService,
                        ng.router.Router,

                        function(search, router) {

                            var viewModel = this;
                            viewModel.search = search;
                            viewModel.router = router;

                            viewModel.searchTerms = new Rx.Subject();

                        }
                    ],

                searchTest: function (param) {
                    var viewModel = this;

                    viewModel.searchTerms.next(param);
                },
                ngOnInit: function () {
                    var viewModel = this;

                    viewModel.heroes = viewModel.searchTerms
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (param){
                            if (param) {

                                return viewModel.search.searchHeroes(param);
                            } else {

                                return Rx.Observable.of([]);
                            }
                        });
                },
                gotoDetail: function(hero) {
                    var link = "detail/" + hero.id;

                    this.router.navigateByUrl(link);
                }

            });
})(window.app || (window.app = {}));