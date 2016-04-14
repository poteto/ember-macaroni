import Ember from 'ember';

const {
  computed,
  get,
  getWithDefault,
  A: emberArray
} = Ember;

/**
 * Combines the values of the enumerator into a single value, using a property.
 *
 * Ember.Object.extend({
 *   items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
 *   selectedItem: reduce('items', 'age', 0) // 7
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to reduce
 * @param {*} startValue The initial value
 */
export default function reduce(collectionKey, propName, startValue = 0) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .reduce((total, current) => total + parseFloat(getWithDefault(current, propName, 0)), startValue);
    }
  });
}
