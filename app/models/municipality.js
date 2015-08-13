import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  community_type: DS.attr("string"),
  geojson: DS.attr()
});
