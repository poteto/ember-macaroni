import Ember from 'ember';
import { module, test } from 'qunit';
import { ltKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - ltKey');

test('#ltKey returns true if the left hand is not lesser or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const Employee = EmberObject.extend({
    isUnderRetirementAge: ltKey('age', 'retirementAge')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isUnderRetirementAge');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#ltKey returns false if the left hand is not lesser or equal to the right hand', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Employee = EmberObject.extend({
    isOverRetirementAge: ltKey('retirementAge', 'age')
  });
  const subject = Employee.create({
    age: 50,
    retirementAge: 65
  });
  const result = get(subject, 'isOverRetirementAge');

  assert.equal(result, expectedResult, 'it returns false');
});
