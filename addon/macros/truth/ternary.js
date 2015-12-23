import Ember from 'ember';

const { computed, get, isPresent } = Ember;

/**
 * Ternary conditional.
 *
 * Ember.Object.extend({
 *   isSelected: true,
 *   displayText: ternary('isSelected', 'Is Enabled', 'Is Disabled') // 'Is Enabled'
 * });
 *
 * @param {String} conditionalKey The key name for the conditional property
 * @param {String} trueValue The value to return when the conditional is true
 * @param {String} falseValue The value to return when the conditional is false
 */
export default function ternary(conditionalKey, trueValue = true, falseValue = false) {
  return computed(conditionalKey, {
    get() {
      const conditionalValue = get(this, conditionalKey);

      return (isPresent(conditionalValue) && !!conditionalValue) ? trueValue : falseValue;
    }
  });
}
