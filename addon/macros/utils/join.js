import Ember from 'ember';

const { get } = Ember;

export default function join(target, separator, ...dependentKeys) {
  // Default to space if no seperator is specified
  if (!separator) {
    separator = " ";
  }

  return dependentKeys
    .map((dependentKey) => get(target, dependentKey))
    .join(separator);
}
