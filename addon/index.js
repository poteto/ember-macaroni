// collection
import findFromCollectionByKey from './macros/collection/find-from-collection-by-key';
import findFromCollectionByValue from './macros/collection/find-from-collection-by-value';
import rejectFromCollectionByKey from './macros/collection/reject-from-collection-by-key';
import rejectFromCollectionByValue from './macros/collection/reject-from-collection-by-value';
import filterFromCollectionByKey from './macros/collection/filter-from-collection-by-key';
import filterFromCollectionByContains from './macros/collection/filter-from-collection-by-contains';
import collectionWithoutKey from './macros/collection/collection-without-key';
import reduceCollectionByKey from './macros/collection/reduce-collection-by-key';

// truth
import equalKey from './macros/truth/equal-key';
import ternaryKey from './macros/truth/ternary-key';
import ternary from './macros/truth/ternary';
import gteKey from './macros/truth/gte-key';
import gtKey from './macros/truth/gt-key';
import lteKey from './macros/truth/lte-key';
import ltKey from './macros/truth/lt-key';

// general
import getPropertiesByKeys from './macros/general/get-properties-by-keys';
import joinWith from './macros/general/join-with';

export {
  // collection
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  // truth
  equalKey,
  ternaryKey,
  ternary,
  gteKey,
  gtKey,
  lteKey,
  ltKey,
  // general
  getPropertiesByKeys,
  joinWith
};

export default {
  // collection
  findFromCollectionByKey,
  findFromCollectionByValue,
  rejectFromCollectionByKey,
  rejectFromCollectionByValue,
  filterFromCollectionByKey,
  filterFromCollectionByContains,
  collectionWithoutKey,
  reduceCollectionByKey,
  // truth
  equalKey,
  ternaryKey,
  ternary,
  gteKey,
  gtKey,
  lteKey,
  ltKey,
  // general
  getPropertiesByKeys,
  joinWith
};
