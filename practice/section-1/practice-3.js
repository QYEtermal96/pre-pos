'use strict';

function collectSameElements(collectionA, objectB) {
  var res = [];
  for(var i = 0;i < collectionA.length;i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i] === objectB.value[j])
      {
        res.push(collectionA[i]);
      }
    }
  }
  return res;
}
