import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ui-checkbox', 'component:ui-checkbox', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: ['component:ui-checkbox-base']
});

test('it renders', function(assert) {
  assert.expect(2);

  var component = this.subject();

  assert.equal(component._state, 'preRender');

  this.render();

  assert.equal(component._state, 'inDOM');
});

test('it updates `checked` property to true when clicked', function(assert) {
  assert.expect(1);

  var component = this.subject({
    checked: false,
  });

  this.render();

  component.$('input').click();

  assert.equal(component.$('input').prop('checked'), true, 'it updates');
});

test('it unchecks a value', function(assert) {
  assert.expect(2);

  var component = this.subject({
    checked: false
  });

  this.render();

  component.$('input').click();

  assert.equal(component.$('input').prop('checked'), true, 'it checks a value');

  component.$('input').click();

  assert.equal(component.$('input').prop('checked'), false, 'it unchecks a value');
});
