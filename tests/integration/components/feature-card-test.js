import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('feature-card', 'Integration | Component | feature card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var feature = {
    "name": "Tracking unique history locations",
    "status": "canary",
    "feature-flag": "ember-unique-location-history-state",
    "description": "Store a unique identifier along with each entry in the history. Useful for data associated with each page visit, rather than the page as a whole (such as scroll position).",
    "rfc": {
      "id": 186,
      "url": "https://github.com/emberjs/rfcs/blob/master/text/0186-track-unique-history-location-state.md"
    }
  };
  this.set('feature', feature);

  this.render(hbs`{{feature-card feature=feature}}`);

  assert.equal(
    this.$('.feature-name').text().trim(),
    feature.name);
});
