import Ember from 'ember';
import { module, test } from 'qunit';
import { equalKey } from 'ember-macaroni';

const {
  Object: EmberObject,
  get
} = Ember;

module('ember-macaroni/truth - equalKey');

test('#equalKey returns true if both dependent keys are equal in reference and value', (assert) => {
  assert.expect(1);

  const expectedResult = true;
  const fooObj = { name: 'foo' };
  const Department = EmberObject.extend({
    isSelected: equalKey('event', 'selectedEvent')
  });
  const subject = Department.create({
    event: fooObj,
    selectedEvent: fooObj
  });
  const result = get(subject, 'isSelected');

  assert.equal(result, expectedResult, 'it returns true');
});

test('#equalKey returns false if both dependent keys are not equal in reference and value', (assert) => {
  assert.expect(1);

  const expectedResult = false;
  const Department = EmberObject.extend({
    isSelected: equalKey('event', 'selectedEvent')
  });
  const subject = Department.create({
    event: { name: 'foo' },
    selectedEvent: { name: 'bar' }
  });
  const result = get(subject, 'isSelected');

  assert.equal(result, expectedResult, 'it returns false');
});
