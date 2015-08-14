import Ember from 'ember';

export default Ember.Component.extend({
  // templateName: 'project',
  // name: "Project",
  didInsertElement: function() {
    this.map = L.map(this.$('#map').get(0));

    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
      // minZoom: 0,
      // maxZoom: 20
    }).addTo(this.map);
    
    if (this.get("geojson").type) {
      this.geojson = L.geoJson(this.get("geojson"));
      var bounds = this.geojson.getBounds();
      this.geojson.addTo(this.map);  
      this.map.fitBounds(bounds);
    } else {
      this.map.setView([42.373611, -71.110556], 12);
    }
  }
});
