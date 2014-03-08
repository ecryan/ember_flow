var SignInController = Ember.Controller.extend({
    needs: ['users', 'application'],
    users: Ember.computed.alias("controllers.users"),
    app: Ember.computed.alias('controllers.application'),

    actions: {
        signIn: function() {
            var userToLogin,
                email;
            email = this.get('email');
            userToLogin = this.get('users').findBy('email', email);
            localStorage['currentUser'] = userToLogin.id;
            this.get('app').set('currentUser', userToLogin.id);
        }
    }

});

export default SignInController;
