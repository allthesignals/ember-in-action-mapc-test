import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'project',
  name: "Project",
  click: function(evt) {
    console.log(L);
    console.log(evt);
  },
  didInsertElement: function() {
    
    var map = L.map(this.$('#map').get(0)).setView([42.373611, -71.110556], 12);
    
    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }).addTo(map);
  }
});
