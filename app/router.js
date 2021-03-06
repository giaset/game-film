import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', function() {
    this.route('show', {path: '/:game_id'});
  });
  this.route('players');
});

export default Router;
