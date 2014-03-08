var ApplicationController = Ember.Controller.extend({
    currentUser: null,

    signedInUser: function() {
        return this.store.find('user', localStorage['currentUser']);
    }.property(),

    userSignedIn: function() {
        return localStorage['currentUser'] != null;
    }.property('currentUser'),

    actions: {
        signOut: function() {
            delete localStorage['currentUser'];
            this.set('currentUser', undefined);
        }
    }
});

export default ApplicationController;
