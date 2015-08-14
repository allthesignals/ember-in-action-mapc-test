import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Router.map(function() {
// });

export default Router.map(function() {
  // this.route('projects', function() {});
  // this.route('project');
  this.resource('projects', function() {
    this.resource('project', { path: '/:project_id' });
  });
  this.route('municipality');
  this.route('subregion');
  this.route('municipalities', function() {});
  this.route('subregions', function() {});
  this.route('place');
});