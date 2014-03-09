var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.route('about');
  this.resource('question', { path: '/question/:id'});
  this.route('ask-question');
  this.route('sign-in');
});

export default Router;
