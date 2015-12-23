import Ember from 'ember';
import { module, test } from 'qunit';
import { ternary } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - ternary');

test('#ternary returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: ternary('isRetired', 'Left job', 'Still employed')
  });
  const subject = Employee.create({
    isRetired: true
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `trueValue`');
});

test('#ternary returns the `falseValue` if the conditional is false', (assert) => {
  assert.expect(1);

  const expectedResult = 'Still employed';
  const Employee = EmberObject.extend({
    retirementStatus: ternary('isRetired', 'Left job', 'Still employed')
  });
  const subject = Employee.create({
    isRetired: false
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `falseValue`');
});
