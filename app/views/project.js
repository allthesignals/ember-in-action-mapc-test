import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'project',
  name: "Project",
  click: function(evt) {
    console.log(evt);
  }
});
