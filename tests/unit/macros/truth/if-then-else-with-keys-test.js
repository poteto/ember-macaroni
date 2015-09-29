import Ember from 'ember';
import { module, test } from 'qunit';
import { ifThenElseWithKeys } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - ifThenElseWithKeys');

test('#ifThenElseWithKeys returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: ifThenElseWithKeys('isRetired', 'retiredText', 'employedText')
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
    retirementStatus: ifThenElseWithKeys('isRetired', 'retiredText', 'employedText')
  });
  const subject = Employee.create({
    retiredText: 'Left job',
    employedText: 'Still employed',
    isRetired: false
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `falseValue`');
});
