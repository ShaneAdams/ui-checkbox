# Ui-checkbox

[![Build Status](https://travis-ci.org/firefly-ui/ui-checkbox.svg)](https://travis-ci.org/firefly-ui/ui-checkbox)

## Usage
em
This Ember addon provides a ui-checkbox component for use in your application. The addon uses an action that allows you to update the checked value when the checkbox is clicked by the user.

#### Example

**Template:**
```
{{ui-checkbox value=value checked=checked on-change="updateValue"}}
{{value}}
```

**Controller:**
```
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
```

The action updateValue will set checked to the value.

## Styling
The styles can be easily modified to customize the `ui-checkbox` component. Checkbox inputs should be positioned absolutely with the `.ff-checkbox` div styled differently depending if it's checked or not.

Example:
```
.ff-checkbox {
  input[type="checkbox"]:checked {
    + .ff-checkbox-mark {
      // Your styling for the checkbox-mark
    }
  }
}
```
See the demo application for an example.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
