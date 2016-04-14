import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array with just the items that are contained in another array.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: filterContains('items', 'id', [1]) // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to filter by
 * @param {Array} values The array of values to filter
 */
export default function filterContains(collectionKey, propName, values = []) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .filter((item) => emberArray(values).contains(get(item, propName)));
    }
  });
}
