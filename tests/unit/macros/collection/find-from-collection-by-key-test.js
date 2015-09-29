import Ember from 'ember';
import { module, test } from 'qunit';
import { findFromCollectionByKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - findFromCollectionByKey');

test('#findFromCollectionByKey finds an item from a collection with a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = { id: 1, name: 'Tom Smykowski' };
  const Department = EmberObject.extend({
    selectedEmployee: findFromCollectionByKey('employees', 'id', 'selectedEmployeeId')
  });
  const subject = Department.create({
    selectedEmployeeId: 1,
    employees: [
      { id: 0, name: 'Michael Bolton' },
      { id: 1, name: 'Tom Smykowski' },
      { id: 2, name: 'Peter Gibbons' }
    ]
  });
  const result = get(subject, 'selectedEmployee');

  assert.deepEqual(result, expectedResult, 'it returns the found item');
});
