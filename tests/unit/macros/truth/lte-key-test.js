import Ember from 'ember';
import { module, test } from 'qunit';
import { lteKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - lteKey');

test('#lteKey returns true if the left hand is not lesser or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: lteKey('age', 'retirementAge')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#lteKey returns true if the left hand is equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: lteKey('age', 'retirementAge')
  });
  const subject = Employee.create({
    age: 65,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#lteKey returns false if the left hand is not lesser or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Employee = EmberObject.extend({
    isOverRetirementAge: lteKey('retirementAge', 'age')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isOverRetirementAge');

  assert.equal(result, expectedResult, 'it returns false');
});
