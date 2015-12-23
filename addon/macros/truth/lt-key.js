import Ember from 'ember';
import compare from '../utils/compare';

const {
  computed,
  get
} = Ember;

/**
 * Lesser than comparison between two dependent keys.
 *
 * Ember.Object.extend({
 *   first: 5,
 *   second: 2,
 *   isFirstLessThanSecond: ltKey('first', 'second') // false
 * });
 *
 * @param {String} lhsKey The key name for the left hand side of the operator
 * @param {String} rhsKey The key name for the right hand side of the operator
*/
export default function ltKey(lhsKey, rhsKey) {
  return computed(lhsKey, rhsKey, {
    get() {
      return compare(get(this, lhsKey), get(this, rhsKey), 'lt');
    }
  });
}
