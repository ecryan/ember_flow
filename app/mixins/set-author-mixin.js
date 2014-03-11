var SetAuthorMixin = Ember.Mixin.create({
    needs: ['application'],

    setAuthorFor: function(object) {
        this.get('controllers.application.signedInUser').then(function(user){
            object.set('author', user);
        });
    }
});

export default SetAuthorMixin;
