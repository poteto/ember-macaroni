import Ember from 'ember';
import joinUtil from '../utils/join';

const { computed } = Ember;

/**
 * Returns a string of values joined together with a separator.
 *
 * Ember.Object.extend({
 *   firstName: 'Derek',
 *   lastName: 'Zoolander',
 *   fullName: join('firstName', 'lastName') // 'Derek Zoolander'
 * });
 *
 * @param {...rest} dependentKeys Argument list of dependent keys
*/
export default function join(...dependentKeys) {
  const computedFunc = computed({
    get() {
      return joinUtil(this, null, ...dependentKeys);
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
