var QuestionsController = Ember.ArrayController.extend({
    siteTitle: 'Welcome to Emberflow',

    currentTime: function() {
        return new Date();
    }.property()
});

export default QuestionsController;
