import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns an array with the items that do not match the passed value.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: reject('items', 'id', 2) // [{ id: 1, name: 'foo' }]
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to reject by
 * @param {*} value The value to reject
 */
export default function reject(collectionKey, propName, value) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .rejectBy(propName, value);
    }
  });
}
