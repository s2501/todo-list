(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                ng.http.HttpModule,
                app.routing
            ],
            declarations: [
                app.AppComponent,
                app.HeroListComponent,
                app.HeroDetailsComponent,
                app.DashboardComponent,
                app.HeroSearchComponent,
                app.addHeroComponent
            ],
            providers: [
                app.HeroicServices,
                app.SearchHeroesService
            ],
            bootstrap: [
                app.AppComponent
            ]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));

/*
 * regarding ngForms
 * you can read more at
 * https://angular.io/docs/js/latest/guide/forms.html
 */