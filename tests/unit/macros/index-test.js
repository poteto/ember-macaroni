import Ember from 'ember';
import { module, test } from 'qunit';
import {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  isEqualByKeys,
  getPropertiesByKeys,
  ifThenElseWithKeys,
  ifThenElseWithValues
} from 'ember-macaroni';
import macros from 'ember-macaroni';

const {
  typeOf,
  isPresent
} = Ember;

module('ember-macaroni - index');

function isValid(func) {
  return isPresent(func) && typeOf(func) === 'function';
}

test('it exports named macros', function(assert) {
  assert.ok(isValid(findFromCollectionByKey), 'findFromCollectionByKey is defined and is a function');
  assert.ok(isValid(findFromCollectionByValue), 'findFromCollectionByValue is defined and is a function');
  assert.ok(isValid(rejectFromCollectionByKey), 'rejectFromCollectionByKey is defined and is a function');
  assert.ok(isValid(rejectFromCollectionByValue), 'rejectFromCollectionByValue is defined and is a function');
  assert.ok(isValid(filterFromCollectionByKey), 'filterFromCollectionByKey is defined and is a function');
  assert.ok(isValid(filterFromCollectionByContains), 'filterFromCollectionByContains is defined and is a function');
  assert.ok(isValid(collectionWithoutKey), 'collectionWithoutKey is defined and is a function');
  assert.ok(isValid(reduceCollectionByKey), 'reduceCollectionByKey is defined and is a function');
  assert.ok(isValid(isEqualByKeys), 'isEqualByKeys is defined and is a function');
  assert.ok(isValid(getPropertiesByKeys), 'getPropertiesByKeys is defined and is a function');
  assert.ok(isValid(ifThenElseWithKeys), 'ifThenElseWithKeys is defined and is a function');
  assert.ok(isValid(ifThenElseWithValues), 'ifThenElseWithValues is defined and is a function');
});

test('it exports `default`', function(assert) {
  const {
    findFromCollectionByKey,
    findFromCollectionByValue,
    rejectFromCollectionByKey,
    rejectFromCollectionByValue,
    filterFromCollectionByKey,
    filterFromCollectionByContains,
    collectionWithoutKey,
    reduceCollectionByKey,
    isEqualByKeys,
    getPropertiesByKeys,
    ifThenElseWithKeys,
    ifThenElseWithValues
  } = macros;

  assert.ok(isValid(findFromCollectionByKey), 'findFromCollectionByKey is defined and is a function');
  assert.ok(isValid(findFromCollectionByValue), 'findFromCollectionByValue is defined and is a function');
  assert.ok(isValid(rejectFromCollectionByKey), 'rejectFromCollectionByKey is defined and is a function');
  assert.ok(isValid(rejectFromCollectionByValue), 'rejectFromCollectionByValue is defined and is a function');
  assert.ok(isValid(filterFromCollectionByKey), 'filterFromCollectionByKey is defined and is a function');
  assert.ok(isValid(filterFromCollectionByContains), 'filterFromCollectionByContains is defined and is a function');
  assert.ok(isValid(collectionWithoutKey), 'collectionWithoutKey is defined and is a function');
  assert.ok(isValid(reduceCollectionByKey), 'reduceCollectionByKey is defined and is a function');
  assert.ok(isValid(isEqualByKeys), 'isEqualByKeys is defined and is a function');
  assert.ok(isValid(getPropertiesByKeys), 'getPropertiesByKeys is defined and is a function');
  assert.ok(isValid(ifThenElseWithKeys), 'ifThenElseWithKeys is defined and is a function');
  assert.ok(isValid(ifThenElseWithValues), 'ifThenElseWithValues is defined and is a function');
});
