// collection
import findFromCollectionByKey from './macros/collection/find-from-collection-by-key';
import findFromCollectionByValue from './macros/collection/find-from-collection-by-value';
import rejectFromCollectionByKey from './macros/collection/reject-from-collection-by-key';
import rejectFromCollectionByValue from './macros/collection/reject-from-collection-by-value';
import filterFromCollectionByKey from './macros/collection/filter-from-collection-by-key';
import filterFromCollectionByContains from './macros/collection/filter-from-collection-by-contains';
import reduceCollectionByKey from './macros/collection/reduce-collection-by-key';
import withoutKey from './macros/collection/without-key';

// truth
import equalKey from './macros/truth/equal-key';
import ifThenElseWithKeys from './macros/truth/if-then-else-with-keys';
import ifThenElseWithValues from './macros/truth/if-then-else-with-values';
import gteKey from './macros/truth/gte-key';
import gtKey from './macros/truth/gt-key';
import lteKey from './macros/truth/lte-key';
import ltKey from './macros/truth/lt-key';

// general
import getPropertiesByKeys from './macros/general/get-properties-by-keys';
import joinWith from './macros/general/join-with';

export {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  reduceCollectionByKey,
  withoutKey,
  getPropertiesByKeys,
  joinWith,
  equalKey,
  ifThenElseWithKeys,
  ifThenElseWithValues,
  gteKey,
  gtKey,
  lteKey,
  ltKey
};

export default {
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  reduceCollectionByKey,
  withoutKey,
  getPropertiesByKeys,
  joinWith,
  equalKey,
  ifThenElseWithKeys,
  ifThenElseWithValues,
  gteKey,
  gtKey,
  lteKey,
  ltKey
};
