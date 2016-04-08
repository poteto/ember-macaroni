import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array without an item by value.
 * NOTE: Due to prototype extensions, Arrays and Objects are not supported
 * TODO: Support Arrays and Objects.
 *
 * Ember.Object.extend({
 *   items: ['a', 'b', 'c'],
 *   notSelectedItems: without('items', 'a')
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String|Number} value The value to exclude
 */
export default function without(collectionKey, value) {
  return computed(`${collectionKey}.[]`, {
    get() {
      return emberArray(get(this, collectionKey))
        .without(value);
    }
  });
}
