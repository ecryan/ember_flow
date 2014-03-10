/**
 * Created by Rick on 3/7/14.
 */
var User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    questions: DS.hasMany('question', {
        async: true
    }),

    fullName:  function() {
        return this.get('firstName') + ' ' + this.get('lastName');

    }.property('firstName', 'lastName')

});

User.FIXTURES = [
    {
        id: 201,
        firstName: 'Tom',
        lastName: 'Dale',
        email: 'tom@tom.net',
        questions: [101]
    },
    {
        id: 202,
        firstName: 'Tomster',
        lastName: 'Hamster',
        email: 'tomster@hamster.com',
        questions: [102]
    },
    {
        id: 203,
        firstName: 'Random',
        lastName: 'Guy',
        email: 'random@gmail.com'
    }

];

export default User;

