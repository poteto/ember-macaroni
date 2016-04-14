import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array with just the items with the matched property.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: filterKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to filter by
 * @param {String} valueKey The key name that returns the value to filter
 */
export default function filterKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .filterBy(propName, get(this, valueKey));
    }
  });
}
