import Ember from 'ember';
import { module, test } from 'qunit';
import { reduce } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - reduce');

test("#reduce reduces a collection by a property's value", (assert) => {
  assert.expect(1);

  const Foo = EmberObject.extend({
    result: reduce('items', 'age')
  });
  const bar = Foo.create({
    items: [
      { id: 0, name: 'Michael Bolton', age: 25 },
      { id: 1, name: 'Tom Smykowski', age: 50 },
      { id: 2, name: 'Peter Gibbons', age: 25 }
    ]
  });

  assert.equal(
    get(bar, 'result'),
    100,
    'it returns the reduced value'
  );
});
