import Ember from 'ember';
import { module, test } from 'qunit';
import { gtKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - gtKey');

test('#gtKey returns true if the left hand is greater than the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: gtKey('retirementAge', 'age')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#gtKey returns false if the left hand is not greater or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Employee = EmberObject.extend({
    isOverRetirementAge: gtKey('age', 'retirementAge')
  });
  const subject = Employee.create({
    age: 64,
    retirementAge: 65
  });
  const result = get(subject, 'isOverRetirementAge');

  assert.equal(result, expectedResult, 'it returns false');
});
