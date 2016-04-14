import Ember from 'ember';
import { module, test } from 'qunit';
import { filterKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - filterKey');

test('#filterKey filters an item from a collection with a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = [
    { id: 0, name: 'Michael Bolton', age: 25 },
    { id: 2, name: 'Peter Gibbons', age: 25 }
  ];
  const Department = EmberObject.extend({
    selectedEmployees: filterKey('employees', 'age', 'selectedAge')
  });
  const subject = Department.create({
    selectedAge: 25,
    employees: [
      { id: 0, name: 'Michael Bolton', age: 25 },
      { id: 1, name: 'Tom Smykowski', age: 50 },
      { id: 2, name: 'Peter Gibbons', age: 25 }
    ]
  });
  const result = get(subject, 'selectedEmployees');

  assert.deepEqual(result, expectedResult, 'it returns the filtered collection');
});
