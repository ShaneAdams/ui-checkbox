import Ember from 'ember';

export default Ember.Controller.extend({
  checked: false,
  value: 'not checked',

  actions: {
    updateValue(value) {
      this.set('checked', value);
      this.set('value', value === false ? 'not checked' : 'checked');
    }
  }
});
