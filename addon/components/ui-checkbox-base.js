import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  value: null,
  type: 'checkbox',

  attributeBindings: ['type', 'checked', 'disabled', 'indeterminate', 'value'],

  change() {
    const value = this.get('value');
    const checked = this.element.checked;

    if (value && checked) {
      this.sendAction('on-change', value);
    } else {
      this.sendAction('on-change', checked);
    }
  }
});
