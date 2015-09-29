const comparisonMap = {
  gt(lhs, rhs) {
    return lhs > rhs;
  },
  gte(lhs, rhs) {
    return lhs >= rhs;
  },
  lt(lhs, rhs) {
    return lhs < rhs;
  },
  lte(lhs, rhs) {
    return lhs <= rhs;
  }
};

export default function compare(lhs, rhs, operator) {
  return !!(comparisonMap[operator](lhs, rhs));
}
