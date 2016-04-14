import Ember from 'ember';
import { module, test } from 'qunit';
import { ternaryKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - ternaryKey');

test('#ternaryKey returns the `trueValue` if the conditional is true', (assert) => {
  assert.expect(1);

  const expectedResult = 'Left job';
  const Employee = EmberObject.extend({
    retirementStatus: ternaryKey('isRetired', 'retiredText', 'employedText')
  });
  const subject = Employee.create({
    retiredText: 'Left job',
    employedText: 'Still employed',
    isRetired: true
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `trueValue`');
});

test('#ternaryKey returns the `falseValue` if the conditional is false', (assert) => {
  assert.expect(1);

  const expectedResult = 'Still employed';
  const Employee = EmberObject.extend({
    retirementStatus: ternaryKey('isRetired', 'retiredText', 'employedText')
  });
  const subject = Employee.create({
    retiredText: 'Left job',
    employedText: 'Still employed',
    isRetired: false
  });
  const result = get(subject, 'retirementStatus');

  assert.deepEqual(result, expectedResult, 'it returns the `falseValue`');
});
