import Ember from 'ember';

export default Ember.Controller.extend({
  checked: false,
  value: 'itemA',

  actions: {
    updateValue(value) {
      this.set('checked', value);
    }
  }
});
