import Ember from 'ember';

const {
  computed,
  get,
  getWithDefault,
  A: emberArray
} = Ember;

/**
 * Combines the values of the enumerator into a single value, using a dependent key to determine the property key.
 * NOTE: Due to the difficulties surrounding dynamic dependent keys, this computed property will be computed every time you call for it (`volatile`)
 * TODO: Add proper dependent keys to this and remove `volatile`
 *
 * Ember.Object.extend({
 *   items: [{ name: 'foo', age: 2 }, { name: 'bar', age: 5 }],
 *   prop: 'age',
 *   selectedItem: reduceKey('items', 'prop', 0) // 7
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} dependentKeyProp The key name for the property to reduce
 * @param {*} startValue The initial value
 */
export default function reduceKey(collectionKey, dependentKeyProp, startValue = 0) {
  return computed(`${collectionKey}.[]`, {
    get() {
      let propName = get(this, dependentKeyProp);
      return emberArray(get(this, collectionKey))
        .reduce((total, current) => total + parseFloat(getWithDefault(current, propName, 0)), startValue);
    }
  }).volatile();
}
