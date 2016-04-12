import Ember from 'ember';
import { module, test } from 'qunit';
import { join } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/general - join');

test('#join returns a string of values joined with a separator', (assert) => {
  assert.expect(1);
  const expectedResult = 'Bill Lumbergh';
  const Employee = EmberObject.extend({
    fullName: join('firstName', 'lastName')
  });
  const subject = Employee.create({
    firstName: 'Bill',
    lastName: 'Lumbergh'
  });
  const result = get(subject, 'fullName');

  assert.deepEqual(result, expectedResult, 'it returns a string of values joined with a separator');
});
