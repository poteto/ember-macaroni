import Ember from 'ember';
import { module, test } from 'qunit';
import { reduceKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/collection - reduceKey');

test('#reduceKey reduces a collection by a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = 100;
  const Department = EmberObject.extend({
    totalAge: reduceKey('employees', 'age')
  });
  const subject = Department.create({
    employees: [
      { id: 0, name: 'Michael Bolton', age: 25 },
      { id: 1, name: 'Tom Smykowski', age: 50 },
      { id: 2, name: 'Peter Gibbons', age: 25 }
    ]
  });
  const result = get(subject, 'totalAge');

  assert.equal(result, expectedResult, 'it returns the reduced value');
});
