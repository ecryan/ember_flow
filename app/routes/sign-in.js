var SignInRoute = Ember.Route.extend({
    afterModel: function() {
        var usersController = this.controllerFor('users');

        var promise = this.store.findAll('user').then(function(users){
            usersController.set('model', users);

        });

        return promise;
    }
});

export default SignInRoute;
