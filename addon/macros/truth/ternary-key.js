import Ember from 'ember';

const { computed, get, isPresent } = Ember;

/**
 * Ternary conditional with dependent keys.
 *
 * Ember.Object.extend({
 *   isSelected: true,
 *   selectedText: 'Is Enabled',
 *   deselectedText: 'Is Disabled',
 *   displayText: ternaryKey('isSelected', 'selectedText', 'deselectedText') // 'Is Enabled'
 * });
 *
 * @param {String} conditionalKey The key name for the conditional property
 * @param {String} trueKey The key name for the property to return when the conditional is true
 * @param {String} falseKey The key name for the property to return when the conditional is false
 */
export default function ternaryKey(conditionalKey, trueKey, falseKey) {
  return computed(conditionalKey, trueKey, falseKey, {
    get() {
      const conditionalValue = get(this, conditionalKey);
      const trueValue = get(this, trueKey);
      const falseValue = get(this, falseKey);

      return (isPresent(conditionalValue) && !!conditionalValue) ? trueValue : falseValue;
    }
  });
}
