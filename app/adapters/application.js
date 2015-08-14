import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://mfia.prep.mapc.org'
});