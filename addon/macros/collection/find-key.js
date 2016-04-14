import Ember from 'ember';

const {
  computed,
  get,
  A: emberArray
} = Ember;

/**
 * Returns the first item with a property matching the passed value from a dependent key.
 *
 * Ember.Object.extend({
 *   items: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
 *   selectedId: 1,
 *   selectedItem: findKey('items', 'id', 'selectedId') // { id: 1, name: 'foo' }
 * });
 *
 * @param {String} collectionKey The key name for the collection
 * @param {String} propName The key name for the property to find by
 * @param {String} valueKey The key name that returns the value to find
 */
export default function findKey(collectionKey, propName, valueKey) {
  return computed(`${collectionKey}.@each.${propName}`, valueKey, {
    get() {
      return emberArray(get(this, collectionKey))
        .findBy(propName, get(this, valueKey));
    }
  });
}
