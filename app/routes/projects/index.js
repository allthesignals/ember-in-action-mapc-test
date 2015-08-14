import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function(params) {
    // params.paramMapping = {page: "page[number]",
    //                        perPage: "page[size]",
    //                        total_pages: "num_pages"};

     // seems weird but this is how we can filter
     // params["fields[projects]"] = "title,description,image";
     // params["filter[municipalities]"] = "bedford--0AF5CD07-A66C-E311-8EB6-96147297305B";
    // return this.findPaged('project', params);
    return this.store.findAll("project",params);
  }
});
