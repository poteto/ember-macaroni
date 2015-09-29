import Ember from 'ember';
import { module, test } from 'qunit';
import { isEqualByKeys } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - isEqualByKeys');

test('#isEqualByKeys returns true if both dependent keys are equal in reference and value', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const fooObj = { name: 'foo' };
  const Department = EmberObject.extend({
    isSelected: isEqualByKeys('event', 'selectedEvent')
  });
  const subject = Department.create({
    event: fooObj,
    selectedEvent: fooObj
  });
  const result = get(subject, 'isSelected');

  assert.equal(result, expectedResult, 'it returns true');
});
