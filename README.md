<img src="http://i.imgur.com/XV4VFJl.jpg" title="Macaroni" align="right" width="33%">

# ember-macaroni

[![npm version](https://badge.fury.io/js/ember-macaroni.svg)](http://badge.fury.io/js/ember-macaroni) [![Build Status](https://travis-ci.org/poteto/ember-macaroni.svg?branch=master)](https://travis-ci.org/poteto/ember-macaroni) [![Ember Observer Score](http://emberobserver.com/badges/ember-macaroni.svg)](http://emberobserver.com/addons/ember-macaroni)

Keep your app code DRY and copypasta free with computed property <strong>mac</strong>a<strong>ro</strong>ni<strong>s</strong> (macros) for Ember.js 1.13.x and greater.

## Why
Computed property macros (CPM) are great for DRYing up your code, and Ember.js ships with a [few handy computed macros](http://emberjs.com/api/classes/Ember.computed.html). This addon adds a few more functional-style macros, and can be thought of as the "lodash equivalent" of Ember CPM libraries.

Chaining is not supported... yet.

## Usage
First, import the macro(s) you need, or the whole thing:

```js
import { findFromCollectionByKey } from 'ember-macaroni'; // imports a named macro
import macros from 'ember-macaroni'; // imports all the things
const { findFromCollectionByValue } = macros; // destructuring

export default Ember.Component.extend({
  items: null,
  selectedId: null,
  selectedItem: findFromCollectionByKey('items', 'id', 'selectedId'),
  hansel: findFromCollectionByValue('items', 'name', 'Hansel'),

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
  - [findFromCollectionByKey](#findfromcollectionbykey)
  - [findFromCollectionByValue](#findfromcollectionbyvalue)
  - [rejectFromCollectionByKey](#rejectfromcollectionbykey)
  - [rejectFromCollectionByValue](#rejectfromcollectionbyvalue)
  - [filterFromCollectionByKey](#filterfromcollectionbykey)
  - [filterFromCollectionByIncludes](#filterfromcollectionbyincludes)
  - [collectionWithoutKey](#collectionwithoutkey)
  - [reduceCollectionByKey](#reducecollectionbykey)
* [Truth](#truth)
  - [isEqualByKeys](#isequalbykeys)
  - [ifThenElseWithKeys](#ifthenelsewithkeys)
  - [ifThenElseWithValues](#ifthenelsewithvalues)
  - [gte](#gte)
  - [gt](#gt)
  - [lte](#lte)
  - [lt](#lt)
* [General](#general)
  - [getPropertiesByKeys](#getpropertiesbykeys)
  - [joinWith](#joinwith)

---

### Collection

#### `findFromCollectionByKey`

Returns the first item with a property matching the passed value from a dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to find by
- `@param {String} valueKey` The key name that returns the value to find

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: findFromCollectionByKey('items', 'id', 'selectedId') // { id: 1, name: 'foo' }
});
```

**[⬆ back to top](#available-macros)**

#### `findFromCollectionByValue`

Returns the first item with a property matching the passed value.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to find by
- `@param {*} value` The value to match`

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedItem: findFromCollectionByValue('items', 'id', 1) // { id: 1, name: 'foo' }
});
```

**[⬆ back to top](#available-macros)**

#### `rejectFromCollectionByKey`

Returns an array with the items that do not match the passed value from a dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to reject by
- `@param {String} valueKey` The key name that returns the value to reject

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 2,
  selectedItem: rejectFromCollectionByKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `rejectFromCollectionByValue`

Returns an array with the items that do not match the passed value.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to reject by
- `@param {*} value` The value to reject

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedItem: rejectFromCollectionByValue('items', 'id', 2) // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `filterFromCollectionByKey`

Returns an array with just the items with the matched property.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to filter by
- `@param {String} valueKey` The key name that returns the value to filter

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: filterFromCollectionByKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `filterFromCollectionByIncludes`

Returns an array with just the items that are contained in another array.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to filter by
- `@param {Array} values` The array of values to filter

```js
Ember.Object.extend({
  items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  selectedId: 1,
  selectedItem: filterFromCollectionByIncludes('items', 'id', [1]) // [{ id: 1, name: 'foo' }]
});
```

**[⬆ back to top](#available-macros)**

#### `collectionWithoutKey`

Returns an array without an item by dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} propName` The key name for the property to exclude

```js
Ember.Object.extend({
  items: [1, 2, 3],
  selectedItem: 1,
  remainingItems: collectionWithoutKey('items', 'selectedItem') // [2, 3]
});
```

**[⬆ back to top](#available-macros)**

#### `reduceCollectionByKey`

Combines the values of the enumerator into a single value, using a dependent key.

- `@param {String} collectionKey` The key name for the collection
- `@param {String} dependentKey` The key name for the property to reduce
- `@param {*} startValue` The initial value

```js
Ember.Object.extend({
  items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
  selectedItem: reduceCollectionByKey('items', 'age', 0) // 7
});
```

**[⬆ back to top](#available-macros)**

---

### Truth

#### `isEqualByKeys`

Strict equality using dependent keys.

- `@param {String} firstKey` The key name for the first property
- `@param {String} secondKey` The key name for the second property

```js
Ember.Object.extend({
  employeeId: 1
  selectedId: 1,
  isSelected: isEqualByKeys('employeeId', 'selectedId') // true
});
```

**[⬆ back to top](#available-macros)**

#### `ifThenElseWithKeys`

Ternary conditional with dependent keys.

- `@param {String} conditionalKey` The key name for the conditional property
- `@param {String} trueKey` The key name for the property to return when the conditional is true
- `@param {String} falseKey` The key name for the property to return when the conditional is false

```js
Ember.Object.extend({
  isSelected: true,
  selectedText: 'Is Enabled',
  deselectedText: 'Is Disabled',
  displayText: ifThenElseWithKeys('isSelected', 'selectedText', 'deselectedText') // 'Is Enabled'
});
```

**[⬆ back to top](#available-macros)**

#### `ifThenElseWithValues`

Ternary conditional.

- `@param {String} conditionalKey` The key name for the conditional property
- `@param {String} trueValue` The value to return when the conditional is true
- `@param {String} falseValue` The value to return when the conditional is false

```js
Ember.Object.extend({
  isSelected: true,
  displayText: ifThenElseWithValues('isSelected', 'Is Enabled', 'Is Disabled') // 'Is Enabled'
});
```

**[⬆ back to top](#available-macros)**

#### `gte`

Greater than or equal to comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstGreaterThanOrEqualToSecond: gte('first', 'second') // true
});
```

**[⬆ back to top](#available-macros)**

#### `gt`

Greater than comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstGreaterThanSecond: gt('first', 'second') // true
});
```

**[⬆ back to top](#available-macros)**

#### `lte`

Lesser than or equal to comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstLesserThanOrEqualToSecond: lte('first', 'second') // false
});
```

**[⬆ back to top](#available-macros)**

#### `lt`

Lesser than comparison between two dependent keys.

- `@param {String} lhsKey` The key name for the left hand side of the operator
- `@param {String} rhsKey` The key name for the right hand side of the operator

```js
Ember.Object.extend({
  first: 5,
  second: 2,
  isFirstLessThanSecond: lt('first', 'second') // false
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
