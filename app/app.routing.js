(function(app){

    app.routing = ng.router.RouterModule.forRoot([
        {
            path: 'heroes',
            component: app.HeroListComponent
        },
        {
            path: 'dashboard',
            component: app.DashboardComponent
        },
        {
            path: 'detail/:id',
            component: app.HeroDetailsComponent
        },
        {
            path: 'add',
            component: app.addHeroComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ]);
})(window.app || (window.app = {}));