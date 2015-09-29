import Ember from 'ember';

const {
  computed,
  getProperties
} = Ember;

/**
 * Returns a POJO containing all the key-values that match the dependent keys.
 *
 * Ember.Object.extend({
 *   age: 5,
 *   name: 'foo',
 *   props: getPropertiesByKeys('age', 'name') // { age: 5, name: 'foo' }
 * });
 *
 * @param {...rest} dependentKeys Argument list of dependent keys
*/
export default function getPropertiesByKeys(...dependentKeys) {
  const computedFunc = computed({
    get() {
      return getProperties(this, dependentKeys);
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
