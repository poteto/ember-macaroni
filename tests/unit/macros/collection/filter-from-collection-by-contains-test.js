import Ember from 'ember';
import { module, test } from 'qunit';
import { filterFromCollectionByContains } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - filterFromCollectionByContains');

test('#filterFromCollectionByContains filters a collection by an array of values for a given property', (assert) => {
  assert.expect(1);

  const expectedResult = [
    { name: 'Phil', type: 'rugrats' },
    { name: 'Lil', type: 'RUGRATS' }
  ];
  const characters = [
    { name: 'Phil', type: 'rugrats' },
    { name: 'Lil', type: 'RUGRATS' },
    { name: 'Jake', type: 'adventureTime' }
  ];
  const Tommy = EmberObject.extend({
    friends: filterFromCollectionByContains('characters', 'type', ['rugrats', 'RUGRATS'])
  });
  const subject = Tommy.create({ characters });
  const result = get(subject, 'friends');

  assert.deepEqual(result, expectedResult, 'it returns only returns objects of a given property');
});
