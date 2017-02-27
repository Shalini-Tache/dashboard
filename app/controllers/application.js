import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  groupedFeatures: groupBy('model', 'status')
});
