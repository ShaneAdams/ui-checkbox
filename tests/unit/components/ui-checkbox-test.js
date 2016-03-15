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

test('when disabled it does not update `checked` property to true when clicked', function(assert) {
  assert.expect(2);

  var component = this.subject({
    checked: false,
    disabled: true
  });

  this.render();

  component.$('input').click();

  assert.ok(!component.$('input').prop('checked'), 'it does not update');
  assert.ok(component.$().hasClass('ff-disabled'), 'it has the class ff-disabled');
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
