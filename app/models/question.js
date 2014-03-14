/**
* Created by Rick on 3/7/14.
*/
var Question = DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('date'),
    question: DS.attr('string'),
    author: DS.belongsTo('user'),
    answers: DS.hasMany('answer', {async: true})
});

Question.FIXTURES = [
    {
        id: 101,
        title: 'How do i feed hamsters YEAAAAAA?',
        author: 201,
        date: '2013-01-01T12:00:00',
        question: 'Tomster cant eat using a knife and a fork. How do we feed him?',
        answers: [301, 302]
    },
    {
        id: 102,
        title: 'Are humans insane?',
        author: 202,
        date: '2013-02-02T12:00:00',
        question: 'I mean are they totally nuts?'
    }


];

export default Question;
