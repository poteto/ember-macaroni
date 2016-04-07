# ember-macaroni [![npm version](https://badge.fury.io/js/ember-macaroni.svg)](http://badge.fury.io/js/ember-macaroni) [![Build Status](https://travis-ci.org/poteto/ember-macaroni.svg?branch=master)](https://travis-ci.org/poteto/ember-macaroni) [![Ember Observer Score](http://emberobserver.com/badges/ember-macaroni.svg)](http://emberobserver.com/addons/ember-macaroni)

Keep your app code DRY and copypasta free with computed property <strong>mac</strong>a<strong>ro</strong>ni<strong>s</strong> (macros) for Ember.js 1.13.x and greater.

![](http://i.imgur.com/XV4VFJl.jpg)

## Why
Computed property macros (CPM) are great for DRYing up your code, and Ember.js ships with a [few handy computed macros](http://emberjs.com/api/classes/Ember.computed.html). This addon adds a few more functional-style macros, and can be thought of as the "lodash equivalent" of Ember CPM libraries.

Chaining is not supported... yet.

## Usage
First, import the macro(s) you need, or the whole thing:

```js
import { findKey } from 'ember-macaroni'; // imports a named macro
import macros from 'ember-macaroni'; // imports all the things
const { find } = macros; // destructuring

export default Ember.Component.extend({
  items: null,
  selectedId: null,
  selectedItem: findKey('items', 'id', 'selectedId'),
  hansel: find('items', 'name', 'Hansel'),

  init() {
    this.items = [
      { id: 1, name: 'Derek Zoolander' },
      { id: 2, name: 'Hansel' },
      { id: 3, name: 'Mugatu' }
    ];
  },

  actions: {
    selectPerson(id) {
      Ember.set(this, 'selectedId', id);
    }
  }
});
```

## Available macros

* [Collection](#collection)
  - [filterContains](#filtercontains)
  - [filterKey](#filterkey)
  - [findKey](#findkey)
  - [find](#find)
  - [reduceKey](#reducekey)
  - [reduce](#reduce)
  - [rejectKey](#rejectkey)
  - [reject](#reject)
  - [withoutKey](#withoutkey)
  - [without](#without)
* [Truth](#truth)
  - [equalKey](#equalKey)
  - [ternaryKey](#ternaryKey)
  - [ternary](#ternary)
  - [gteKey](#gteKey)
  - [gtKey](#gtKey)
  - [lteKey](#lteKey)
  - [ltKey](#ltKey)
* [General](#general)
  - [getPropertiesByKeys](#getpropertiesbykeys)
  - [joinWith](#joinwith)
  - [join](#join)

---

### Collection

#### `filterContains`

Returns an array with just the items that are contained in another array.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to filter by
- `@param {Array} values` The array of values to filter

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: filterContains('items', 'id', [1]) // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `filterKey`

Returns an array with just the items with the matched property.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to filter by
- `@param {String} valueKey` The key name that returns the value to filter

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: filterKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `findKey`

Returns the first item with a property matching the passed value from a dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to find by
- `@param {String} valueKey` The key name that returns the value to find

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: findKey('items', 'id', 'selectedId') // { id: 1, name: 'foo' }
});
```

**[⬆ back to top](#available-macros)**

#### `find`

Returns the first item with a property matching the passed value.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to find by
- `@param {*} value` The value to match`

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedItem: find('items', 'id', 1) // { id: 1, name: 'foo' }
});
```

**[⬆ back to top](#available-macros)**

#### `reduceKey`

Combines the values of the enumerator into a single value, using a dependent key to determine the property key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} dependentKeyProp` The key name for the property to reduce
- `@param {*} startValue` The initial value

```js
Ember.Object.extend({
  items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
  prop: 'age',
  selectedItem: reduceKey('items', 'prop', 0) // 7
});
```

**[⬆ back to top](#available-macros)**

#### `reduce`

Combines the values of the enumerator into a single value, using a property.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to reduce
- `@param {*} startValue` The initial value

```js
Ember.Object.extend({
  items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
  selectedItem: reduce('items', 'age', 0) // 7
});
```

**[⬆ back to top](#available-macros)**

#### `rejectKey`

Returns an array with the items that do not match the passed value from a dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to reject by
- `@param {String} valueKey` The key name that returns the value to reject

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 2,
  selectedItem: rejectKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `reject`

Returns an array with the items that do not match the passed value.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to reject by
- `@param {*} value` The value to reject

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedItem: reject('items', 'id', 2) // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `withoutKey`

Returns an array without an item by dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to exclude

```js
Ember.Object.extend({
  items: [1, 2, 3],
  selectedItem: 1,
  remainingItems: withoutKey('items', 'selectedItem') // [2, 3]
});
```

**[⬆ back to top](#available-macros)**

#### `without`

Returns an array without an item by value.

- `@param {String} collectionKey` The key name for the collection
- `@param {String|Number} value` The value to exclude

```js
Ember.Object.extend({
  items: [1, 2, 3],
  remainingItems: without('items', 1) // [2, 3]
});
```

**[⬆ back to top](#available-macros)**

---

### Truth

#### `equalKey`

Strict equality using dependent keys.

- `@param {String} firstKey` The key name for the first property
- `@param {String} secondKey` The key name for the second property

```js
Ember.Object.extend({
  employeeId: 1
  selectedId: 1,
  isSelected: equalKey('employeeId', 'selectedId') // true
});
```

**[⬆ back to top](#available-macros)**

#### `ternaryKey`

Ternary conditional with dependent keys.

- `@param {String} conditionalKey` The key name for the conditional property
- `@param {String} trueKey` The key name for the property to return when the conditional is true
- `@param {String} falseKey` The key name for the property to return when the conditional is false

```js
Ember.Object.extend({
  isSelected: true,
  selectedText: 'Is Enabled',
  deselectedText: 'Is Disabled',
  displayText: ternaryKey('isSelected', 'selectedText', 'deselectedText') // 'Is Enabled'
});
```

**[⬆ back to top](#available-macros)**

#### `ternary`

Ternary conditional.

- `@param {String} conditionalKey` The key name for the conditional property
- `@param {String} trueValue` The value to return when the conditional is true
- `@param {String} falseValue` The value to return when the conditional is false

```js
Ember.Object.extend({
  isSelected: true,
  displayText: ternary('isSelected', 'Is Enabled', 'Is Disabled') // 'Is Enabled'
});
```

**[⬆ back to top](#available-macros)**

#### `gteKey`

Greater than or equal to comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstGreaterThanOrEqualToSecond: gteKey('first', 'second') // true
});
```

**[⬆ back to top](#available-macros)**

#### `gtKey`

Greater than comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstGreaterThanSecond: gtKey('first', 'second') // true
});
```

**[⬆ back to top](#available-macros)**

#### `lteKey`

Lesser than or equal to comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstLesserThanOrEqualToSecond: lteKey('first', 'second') // false
});
```

**[⬆ back to top](#available-macros)**

#### `ltKey`

Lesser than comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstLessThanSecond: ltKey('first', 'second') // false
});
```

**[⬆ back to top](#available-macros)**

---

### General

#### `getPropertiesByKeys`

Returns a POJO containing all the key-values that match the dependent keys.

- `@param {...rest} dependentKeys` Argument list of dependent keys

```js
Ember.Object.extend({
  age: 5,
  name: 'foo',
  props: getPropertiesByKeys('age', 'name') // { age: 5, name: 'foo' }
});
```

**[⬆ back to top](#available-macros)**

#### `joinWith`

Returns a string of values joined together with a separator.

- `@param {String} seperator` Separator to join values with
- `@param {...rest} dependentKeys` Argument list of dependent keys

```js
Ember.Object.extend({
  firstName: 'Derek',
  lastName: 'Zoolander',
  fullName: joinWith(' ', 'firstName', 'lastName') // 'Derek Zoolander'
});
```

**[⬆ back to top](#available-macros)**

#### `join`

Returns a string of values joined together with a default separator (" ").

- `@param {...rest} dependentKeys` Argument list of dependent keys

```js
Ember.Object.extend({
  firstName: 'Derek',
  lastName: 'Zoolander',
  fullName: join('firstName', 'lastName') // 'Derek Zoolander'
});
```

**[⬆ back to top](#available-macros)**

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
