import Ember from 'ember';

const {
  computed,
  get
} = Ember;

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
      return dependentKeys
        .map((dependentKey) => get(this, dependentKey))
        .join(separator);
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
