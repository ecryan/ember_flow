import SetAuthorMixin from 'appkit/mixins/set-author-mixin';


var AskQuestionController = Ember.ArrayController.extend(SetAuthorMixin, {

    sortProperties: ['date'],
    sortAscending: true,

    latestQuestions: function() {
        console.log(this.slice(0,3));
        return this.slice(0,3);
    }.property('@each'),

    actions: {
        askQuestion: function() {
            var question = this.store.createRecord('question', {
                title: this.get('title'),
                question: this.get('question'),
                date: new Date()
            });

           this.setAuthorFor(question);

            var controller = this;

            question.save().then(function(question){
                controller.setProperties({
                    title: '',
                    question: ''
                });

                controller.transitionToRoute('question', question);
            });


        }
    }
});

export default AskQuestionController;
