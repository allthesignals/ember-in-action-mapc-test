import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://mfia.dev.mapc.org'
});