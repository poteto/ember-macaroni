import Ember from 'ember';
import { module, test } from 'qunit';
import { getPropertiesByKeys } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/general - getPropertiesByKeys');

test('#getPropertiesByKeys returns a POJO with the specified keys and values from the object', (assert) => {
  assert.expect(1);

  const expectedResult = {
    firstName: 'Bill',
    lastName: 'Lumbergh'
  };
  const Employee = EmberObject.extend({
    firstAndLastName: getPropertiesByKeys('firstName', 'lastName')
  });
  const subject = Employee.create({
    firstName: 'Bill',
    lastName: 'Lumbergh',
    role: 'Manager'
  });
  const result = get(subject, 'firstAndLastName');

  assert.deepEqual(result, expectedResult, 'it returns the properties in a POJO');
});
