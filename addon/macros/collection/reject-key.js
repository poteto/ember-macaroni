import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array with the items that do not match the passed value from a dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 2,
 *   selectedItem: rejectKey('items', 'id', 'selectedId') // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to reject by
 * @param {String} valueKey The key name that returns the value to reject
 */
export default function rejectKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .rejectBy(propName, get(this, valueKey));
    }
  });
}
