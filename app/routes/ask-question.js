var AskQuestionRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('question');
    }

});

export default AskQuestionRoute;
