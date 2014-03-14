var QuestionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('question');
    }

});

export default QuestionsRoute;
