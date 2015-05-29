import Ember from 'ember';
import layout from '../templates/components/ui-checkbox';

export default Ember.Component.extend({
  tagName: 'button',
  layout: layout,

  classNameBindings: ['checked:active'],

  click() {
    this.toggleProperty('checked');
  }
});
