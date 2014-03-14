/**
 * Created by Rick on 3/9/14.
 */
var Answer = DS.Model.extend({
    answer: DS.attr('string'),
    date: DS.attr('date'),
    author: DS.belongsTo('user')
});

export default Answer;

Answer.FIXTURES = [
    {
        id: 301,
        answer: 'You can fees from a bowl',
        date: '2013-01-01T12:00:00',
        author: 203
    },
    {
        id: 302,
        answer: 'What about a steak bowl?',
        date: '2013-02-02T12:00:00',
        author: 202
    }
];