import Ember from 'ember';
import compare from '../utils/compare';

const {
  computed,
  get
} = Ember;

/**
 * Lesser than or equal to comparison between two dependent keys.
 *
 * Ember.Object.extend({
 *   first: 5,
 *   second: 2,
 *   isFirstLesserThanOrEqualToSecond: lte('first', 'second') // false
 * });
 *
 * @param {String} lhsKey The key name for the left hand side of the operator
 * @param {String} rhsKey The key name for the right hand side of the operator
*/
export default function lte(lhsKey, rhsKey) {
  return computed(lhsKey, rhsKey, {
    get() {
      return compare(get(this, lhsKey), get(this, rhsKey), 'lte');
    }
  });
}
