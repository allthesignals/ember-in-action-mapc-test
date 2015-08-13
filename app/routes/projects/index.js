import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function(params) {
    params.paramMapping = {page: "page[number]",
                           perPage: "page[size]",
                           total_pages: "num_pages"};
    return this.findPaged('project', params);
  }
});
