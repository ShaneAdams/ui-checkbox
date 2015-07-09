import Ember from 'ember';
import layout from '../templates/components/ui-checkbox';

export default Ember.Component.extend({
  layout: layout,
  value: null,
  classNames: ['ff-checkbox'],

  actions: {
    sendChange(value) {
      this.sendAction('on-change', value);
    }
  }
});
