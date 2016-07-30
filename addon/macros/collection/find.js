import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns the first item with a property matching the passed value.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedItem: find('items', 'id', 1) // { id: 1, name: 'foo' }
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to find by
 * @param {*} value The value to match
 */
export default function find(collectionKey, propName, value) {
  return computed(`${collectionKey}.@each.${propName}`, {
    get() {
      return emberArray(get(this, collectionKey))
        .findBy(propName, value);
    }
  });
}
