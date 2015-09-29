import findFromCollectionByKey from './macros/collection/find-from-collection-by-key';
import findFromCollectionByValue from './macros/collection/find-from-collection-by-value';
import rejectFromCollectionByKey from './macros/collection/reject-from-collection-by-key';
import rejectFromCollectionByValue from './macros/collection/reject-from-collection-by-value';
import filterFromCollectionByKey from './macros/collection/filter-from-collection-by-key';
import filterFromCollectionByContains from './macros/collection/filter-from-collection-by-contains';
import collectionWithoutKey from './macros/collection/collection-without-key';
import reduceCollectionByKey from './macros/collection/reduce-collection-by-key';

import isEqualByKeys from './macros/truth/is-equal-by-keys';
import ifThenElseWithKeys from './macros/truth/if-then-else-with-keys';
import ifThenElseWithValues from './macros/truth/if-then-else-with-values';
import gte from './macros/truth/gte';
import gt from './macros/truth/gt';
import lte from './macros/truth/lte';
import lt from './macros/truth/lt';

import getPropertiesByKeys from './macros/general/get-properties-by-keys';
import joinWith from './macros/general/join-with';

export {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  getPropertiesByKeys,
  joinWith,
  isEqualByKeys,
  ifThenElseWithKeys,
  ifThenElseWithValues,
  gte,
  gt,
  lte,
  lt
};

export default {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  getPropertiesByKeys,
  joinWith,
  isEqualByKeys,
  ifThenElseWithKeys,
  ifThenElseWithValues,
  gte,
  gt,
  lte,
  lt
};
