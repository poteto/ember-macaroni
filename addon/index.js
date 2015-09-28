import Ember from 'ember';

const {
  computed,
  get,
  getProperties,
  getWithDefault,
  isPresent,
  A: emberArray
} = Ember;

/**
 * Returns the first item with a property matching the passed value from a dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: findFromCollectionByKey('items', 'id', 'selectedId') // { id: 1, name: 'foo' }
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to find by
 * @param {String} valueKey The key name that returns the value to find
*/
export function findFromCollectionByKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .findBy(propName, get(this, valueKey));
    }
  });
}

/**
 * Returns the first item with a property matching the passed value.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: findFromCollectionByKey('items', 'id', 1) // { id: 1, name: 'foo' }
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to find by
 * @param {*} value The value to match
*/
export function findFromCollectionByValue(collectionKey, propName, value) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .findBy(propName, value);
    }
  });
}

/**
 * Returns an array with the items that do not match the passed value from a dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 2,
 *   selectedItem: rejectFromCollectionByKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to reject by
 * @param {String} valueKey The key name that returns the value to reject
*/
export function rejectFromCollectionByKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .rejectBy(propName, get(this, valueKey));
    }
  });
}

/**
 * Returns an array with the items that do not match the passed value.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: rejectFromCollectionByValue('items', 'id', 2) // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to reject by
 * @param {*} value The value to reject
*/
export function rejectFromCollectionByValue(collectionKey, propName, value) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .rejectBy(propName, value);
    }
  });
}

/**
 * Returns an array with just the items with the matched property.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: filterFromCollectionByKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to filter by
 * @param {String} valueKey The key name that returns the value to filter
*/
export function filterFromCollectionByKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .filterBy(propName, get(this, valueKey));
    }
  });
}

/**
 * Returns an array with just the items that are contained in another array.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: filterCollectionByContains('items', 'id', [1]) // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to filter by
 * @param {Array} values The array of values to filter
*/
export function filterCollectionByContains(collectionKey, propName, values = []) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .filter((item) => emberArray(values).contains(get(item, propName)));
    }
  });
}

/**
 * Returns an array without an item by dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: { id: 1, name: 'foo' },
 *   notSelectedItems: collectionWithoutKey('items', 'selectedItem')
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to filter by
 * @param {Array} values The array of values to filter
*/
export function collectionWithoutKey(collectionKey, dependentKey) {
  return computed(`${collectionKey}.[]`, dependentKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .without(get(this, dependentKey));
    }
  });
}

/**
 * Combines the values of the enumerator into a single value, using a dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
 *   selectedItem: reduceCollectionByKey('items', 'age', 0) // 7
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} dependentKey The key name for the property to reduce
 * @param {*} startValue The initial value
*/
export function reduceCollectionByKey(collectionKey, dependentKey, startValue = 0) {
  return computed(`${collectionKey}.@each.${dependentKey}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .reduce((total, current) => total + parseFloat(getWithDefault(current, dependentKey, 0)), startValue);
    }
  });
}

/**
 * Strict equality using dependent keys.
 *
 * Ember.Object.extend({
 *   employeeId: 1
 *   selectedId: 1,
 *   isSelected: isEqualByKeys('employeeId', 'selectedId') // true
 * });
 *
 * @param {String} firstKey The key name for the first property
 * @param {String} secondKey The key name for the second property
*/
export function isEqualByKeys(firstKey, secondKey) {
  return computed(firstKey, secondKey, {
    get() {
      return get(this, firstKey) === get(this, secondKey);
    }
  });
}

/**
 * Returns a POJO containing all the key-values that match the dependent keys.
 *
 * Ember.Object.extend({
 *   age: 5,
 *   name: 'foo',
 *   props: getPropertiesByKeys('age', 'name') // { age: 5, name: 'foo' }
 * });
 *
 * @param {...rest} dependentKeys Argument list of dependent keys
*/
export function getPropertiesByKeys(...dependentKeys) {
  const computedFunc = computed({
    get() {
      return getProperties(this, dependentKeys);
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}

/**
 * Ternary conditional with dependent keys.
 *
 * Ember.Object.extend({
 *   isSelected: true,
 *   selectedText: 'Is Enabled',
*    deselectedText: 'Is Disabled',
 *   displayText: ifThenElseWithKeys('isSelected', 'selectedText', 'deselectedText') // 'Is Enabled'
 * });
 *
 * @param {String} conditionalKey The key name for the conditional property
 * @param {String} trueKey The key name for the property to return when the conditional is true
 * @param {String} falseKey The key name for the property to return when the conditional is false
*/
export function ifThenElseWithKeys(conditionalKey, trueKey, falseKey) {
  return computed(conditionalKey, trueKey, falseKey, {
    get() {
      const conditionalValue = get(this, conditionalKey);
      const trueValue = get(this, trueKey);
      const falseValue = get(this, falseKey);

      return (isPresent(conditionalValue) && !!conditionalValue) ? trueValue : falseValue;
    }
  });
}

/**
 * Ternary conditional.
 *
 * Ember.Object.extend({
 *   isSelected: true,
 *   displayText: ifThenElseWithKeys('isSelected', 'Is Enabled', 'Is Disabled') // 'Is Enabled'
 * });
 *
 * @param {String} conditionalKey The key name for the conditional property
 * @param {String} trueValue The value to return when the conditional is true
 * @param {String} falseValue The value to return when the conditional is false
*/
export function ifThenElseWithValues(conditionalKey, trueValue = true, falseValue = false) {
  return computed(conditionalKey, {
    get() {
      const conditionalValue = get(this, conditionalKey);

      return (isPresent(conditionalValue) && !!conditionalValue) ? trueValue : falseValue;
    }
  });
}

export default {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  isEqualByKeys,
  getPropertiesByKeys,
  ifThenElseWithKeys,
  ifThenElseWithValues
};
