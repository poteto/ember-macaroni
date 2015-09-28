import Ember from 'ember';
import macros from 'ember-macaroni';
import { module, test } from 'qunit';

const {
  Object: EmberObject,
  get
} = Ember;

module('Utils - Computed Property Macros');

test('#findFromCollectionByKey finds an item from a collection with a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = { id: 1, name: 'Tom Smykowski' };
  const Department = EmberObject.extend({
    selectedEmployee: macros.findFromCollectionByKey('employees', 'id', 'selectedEmployeeId')
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

test('#findFromCollectionByValue finds an item from a collection with a value', (assert) => {
  assert.expect(1);

  const expectedResult = { id: 1, name: 'Tom Smykowski' };
  const Department = EmberObject.extend({
    selectedEmployee: macros.findFromCollectionByValue('employees', 'id', 1)
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

test('#rejectFromCollectionByKey rejects an item from a collection with a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = [
    { id: 1, name: 'Tom Smykowski' },
    { id: 2, name: 'Peter Gibbons' }
  ];
  const Department = EmberObject.extend({
    remainingEmployees: macros.rejectFromCollectionByKey('employees', 'name', 'terminatedEmployeeName')
  });
  const subject = Department.create({
    terminatedEmployeeName: 'Michael Bolton',
    employees: [
      { id: 0, name: 'Michael Bolton' },
      { id: 1, name: 'Tom Smykowski' },
      { id: 2, name: 'Peter Gibbons' }
    ]
  });
  const result = get(subject, 'remainingEmployees');

  assert.deepEqual(result, expectedResult, 'it returns the collection without the rejected item');
});

test('#rejectFromCollectionByValue rejects an item from a collection with a value', (assert) => {
  assert.expect(1);

  const expectedResult = [
    { id: 1, name: 'Tom Smykowski' },
    { id: 2, name: 'Peter Gibbons' }
  ];
  const Department = EmberObject.extend({
    remainingEmployees: macros.rejectFromCollectionByValue('employees', 'name', 'Michael Bolton')
  });
  const subject = Department.create({
    employees: [
      { id: 0, name: 'Michael Bolton' },
      { id: 1, name: 'Tom Smykowski' },
      { id: 2, name: 'Peter Gibbons' }
    ]
  });
  const result = get(subject, 'remainingEmployees');

  assert.deepEqual(result, expectedResult, 'it returns the collection without the rejected item');
});

test('#filterFromCollectionByKey filters an item from a collection with a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = [
    { id: 0, name: 'Michael Bolton', age: 25 },
    { id: 2, name: 'Peter Gibbons', age: 25 }
  ];
  const Department = EmberObject.extend({
    selectedEmployees: macros.filterFromCollectionByKey('employees', 'age', 'selectedAge')
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

test('#reduceCollectionByKey reduces a collection by a dependent key', (assert) => {
  assert.expect(1);

  const expectedResult = 100;
  const Department = EmberObject.extend({
    totalAge: macros.reduceCollectionByKey('employees', 'age')
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

test('#isEqualByKeys returns true if both dependent keys are equal in reference and value', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const fooObj = { name: 'foo' };
  const Department = EmberObject.extend({
    isSelected: macros.isEqualByKeys('event', 'selectedEvent')
  });
  const subject = Department.create({
    event: fooObj,
    selectedEvent: fooObj
  });
  const result = get(subject, 'isSelected');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#isEqualByKeys returns false if both dependent keys are not equal in reference and value', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Department = EmberObject.extend({
    isSelected: macros.isEqualByKeys('event', 'selectedEvent')
  });
  const subject = Department.create({
    event: { name: 'foo' },
    selectedEvent: { name: 'bar' }
  });
  const result = get(subject, 'isSelected');

  assert.equal(result, expectedResult, 'it returns false');
});

test('#getPropertiesByKeys returns a POJO with the specified keys and values from the object', (assert) => {
  assert.expect(1);

  const expectedResult = {
    firstName: 'Bill',
    lastName: 'Lumbergh'
  };
  const Employee = EmberObject.extend({
    firstAndLastName: macros.getPropertiesByKeys('firstName', 'lastName')
  });
  const subject = Employee.create({
    firstName: 'Bill',
    lastName: 'Lumbergh',
    role: 'Manager'
  });
  const result = get(subject, 'firstAndLastName');

  assert.deepEqual(result, expectedResult, 'it returns the properties in a POJO');
});

test('#ifThenElseWithKeys returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: macros.ifThenElseWithKeys('isRetired', 'retiredText', 'employedText')
  });
  const subject = Employee.create({
    retiredText: 'Left job',
    employedText: 'Still employed',
    isRetired: true
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `trueValue`');
});

test('#ifThenElseWithKeys returns the `falseValue` if the conditional is false', (assert) => {
  assert.expect(1);

  const expectedResult = 'Still employed';
  const Employee = EmberObject.extend({
    retirementStatus: macros.ifThenElseWithKeys('isRetired', 'retiredText', 'employedText')
  });
  const subject = Employee.create({
    retiredText: 'Left job',
    employedText: 'Still employed',
    isRetired: false
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `falseValue`');
});

test('#ifThenElseWithValues returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: macros.ifThenElseWithValues('isRetired', 'Left job', 'Still employed')
  });
  const subject = Employee.create({
    isRetired: true
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `trueValue`');
});

test('#ifThenElseWithValues returns the `falseValue` if the conditional is false', (assert) => {
  assert.expect(1);

  const expectedResult = 'Still employed';
  const Employee = EmberObject.extend({
    retirementStatus: macros.ifThenElseWithValues('isRetired', 'Left job', 'Still employed')
  });
  const subject = Employee.create({
    isRetired: false
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `falseValue`');
});

test('#filterCollectionByContains filters a collection by an array of values for a given property', (assert) => {
  assert.expect(1);

  const characters = [
    { name: 'Phil', type: 'rugrats' },
    { name: 'Lil', type: 'RUGRATS' },
    { name: 'Jake', type: 'adventureTime' }
  ];

  const Tommy = EmberObject.extend({
    friends: macros.filterCollectionByContains('characters', 'type', ['rugrats', 'RUGRATS'])
  });

  const subject = Tommy.create({
    characters
  });

  const expected = [
    { name: 'Phil', type: 'rugrats' },
    { name: 'Lil', type: 'RUGRATS' }
  ];

  const result = get(subject, 'friends');

  assert.deepEqual(result, expected, 'it returns only returns objects of a given property');
});
