function getTree(options) {
  const { width, height, ratio, round, padding } = options;
  const tiling = !isUndefined(ratio) ? treemapResquarify.ratio(ratio) : treemapResquarify;
  const tree = treemap()
    .tile(tiling)
    .size([width, height]);
  if (!isUndefined(padding)) tree.paddingOuter(padding);
  if (!isUndefined(round)) tree.round(round);
  return tree;
}
