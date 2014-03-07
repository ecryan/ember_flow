var IndexController = Ember.ArrayController.extend({
    siteTitle: 'Welcome to Emberflow',

    currentTime: function() {
        return new Date();
    }.property()
});

export default IndexController;
