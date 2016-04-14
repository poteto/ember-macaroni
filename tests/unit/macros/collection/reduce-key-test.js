import Ember from 'ember';
import { module, test } from 'qunit';
import { reduceKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - reduceKey');

test("#reduceKey reduces a collection by a dependent key's value", (assert) => {
  assert.expect(1);

  const Foo = EmberObject.extend({
    result: reduceKey('items', 'prop')
  });
  const bar = Foo.create({
    items: [
      { id: 0, name: 'Michael Bolton', age: 25 },
      { id: 1, name: 'Tom Smykowski', age: 50 },
      { id: 2, name: 'Peter Gibbons', age: 25 }
    ],
    prop: 'age'
  });

  assert.equal(
    get(bar, 'result'),
    100,
    'it returns the reduced value'
  );
});
