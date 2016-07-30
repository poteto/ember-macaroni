import Ember from 'ember';
import { module, test } from 'qunit';
import { without } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - without');

test('#without returns the collection without the item', (assert) => {
  assert.expect(1);

  const Foo = EmberObject.extend({
    remainingLetters: without('letters', 'a')
  });
  const bar = Foo.create({
    letters: ['a', 'b', 'c']
  });

  assert.deepEqual(
    get(bar, 'remainingLetters'),
    ['b', 'c'],
    'it returns the found item'
  );
});
