import Ember from 'ember';
import { module, test } from 'qunit';
import { ifThenElseWithValues } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - ifThenElseWithValues');

test('#ifThenElseWithValues returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: ifThenElseWithValues('isRetired', 'Left job', 'Still employed')
  });
  const subject = Employee.create({
    isRetired: true
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `trueValue`');
});
