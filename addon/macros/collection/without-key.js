import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array without an item by dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: { id: 1, name: 'foo' },
 *   notSelectedItems: withoutKey('items', 'selectedItem')
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} dependentKey The key name for the property to exclude
 */
export default function withoutKey(collectionKey, dependentKey) {
  return computed(`${collectionKey}.[]`, dependentKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .without(get(this, dependentKey));
    }
  });
}
