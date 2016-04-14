import Ember from 'ember';
import { module, test } from 'qunit';
import { gteKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - gteKey');

test('#gteKey returns true if the left hand is greater than the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: gteKey('retirementAge', 'age')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#gteKey returns true if the left hand is equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: gteKey('retirementAge', 'age')
  });
  const subject = Employee.create({
    age: 65,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#gteKey returns false if the left hand is not greater or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Employee = EmberObject.extend({
    isOverRetirementAge: gteKey('age', 'retirementAge')
  });
  const subject = Employee.create({
    age: 64,
    retirementAge: 65
  });
  const result = get(subject, 'isOverRetirementAge');

  assert.equal(result, expectedResult, 'it returns false');
});
