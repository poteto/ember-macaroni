import Ember from 'ember';

const {
  computed,
  get
} = Ember;

/**
 * Strict equality using dependent keys.
 *
 * Ember.Object.extend({
 *   employeeId: 1
 *   selectedId: 1,
 *   isSelected: equalKey('employeeId', 'selectedId') // true
 * });
 *
 * @param {String} firstKey The key name for the first property
 * @param {String} secondKey The key name for the second property
*/
export default function equalKey(firstKey, secondKey) {
  return computed(firstKey, secondKey, {
    get() {
      return get(this, firstKey) === get(this, secondKey);
    }
  });
}
