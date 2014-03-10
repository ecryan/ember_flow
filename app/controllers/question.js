var QuestionController = Ember.ObjectController.extend({
    needs: ['application'],

    actions: {
        answerQuestion: function() {
            var answer = this.store.createRecord('answer', {
                answer: this.get('answer'),
                question: this.get('model'),
                date: new Date()
            });

            this.get('controllers.application.signedInUser').then(function(user) {
                answer.set('user', user);
            });

            var controller = this;

            answer.save().then(function(answer) {
                controller.get('model.answers').addObject(answer);

                controller.setProperties({
                    answer: ''
                });
            });

        }
    }
});

export default QuestionController;
