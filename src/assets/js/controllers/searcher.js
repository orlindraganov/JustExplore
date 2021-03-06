const searcher = (function(data) {
  var objTree = data();
  const findBeginningWith = function(value) {
    const results = [];

    function dfs(value, node, results) {
      if (node.name.toLowerCase().indexOf(value.toLowerCase()) === 0) {
        results.push(node);
      }

      if (node.childNodes && node.childNodes.length) {
        for (var childNode of node.childNodes) {
          dfs(value, childNode, results);
        }
      }
    }

    dfs(value, objTree, results);
    return results;
  };

  const findExactMatch = function(value) {
    function dfs(value, node) {
      if (node.name.toLowerCase() === value.toLowerCase()) {
        return node;
      }

      if (node.childNodes && node.childNodes.length) {
        for (var childNode of node.childNodes) {
          var result = dfs(value, childNode);
          if (result) {
            return result;
          }
        }
      }
    }

    var result = dfs(value, objTree);
    return result;
  };

  const getTopNode = objTree;

  return {
    findBeginningWith,
    findExactMatch,
    getTopNode
  };
})(databaseFunction);
