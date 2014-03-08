module.exports = function (server) {

    // Create an API namespace, so that the root does not
    // have to be repeated for each end point.
    server.namespace('/api', function () {

            // Return fixture data for '/api/'
            server.get('/question/:id', function (req, res) {
//                var question = {
//                    "question": [
//                        {
//                            id: 101,
//                            title: 'How do i feed hamsters FROM STUB API?',
//                            author: 'Tom Dale',
//                            date: '2013-01-01T12:00:00',
//                            question: 'Tomster cant eat using a knife and a fork. How do we feed him?'
//                        },
//                        {
//                            id: 102,
//                            title: 'Are humans insane?',
//                            author: 'Tomster the Hamster',
//                            date: '2013-02-02T12:00:00',
//                            question: 'I mean are they totally nuts?'
//                        }
//                    ]
//                };

                res.send(question);
            });

        }
    )
    ;

}
;