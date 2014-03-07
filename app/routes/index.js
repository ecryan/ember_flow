export default Ember.Route.extend({
  model: function() {
    var questions = [
        {
            title: 'How do i feed hamsters?',
            author: 'Tom Dale'
        },
        {
            title: 'Are humans really insane?',
            author: 'Tomster the hamster'
        }
    ];

      return questions;
  }
});
