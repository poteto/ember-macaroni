import Ember from 'ember';
import join from '../utils/join';

const { computed } = Ember;

/**
 * Returns a string of values joined together with a separator.
 *
 * Ember.Object.extend({
 *   firstName: 'Derek',
 *   lastName: 'Zoolander',
 *   fullName: joinWith(' ', 'firstName', 'lastName') // 'Derek Zoolander'
 * });
 *
 * @param {String} seperator Separator to join values with
 * @param {...rest} dependentKeys Argument list of dependent keys
 */
export default function joinWith(separator, ...dependentKeys) {
  const computedFunc = computed({
    get() {
      return join(separator, ...dependentKeys);
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
