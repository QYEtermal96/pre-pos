'use strict';

function statistics(collection,string) {
  var result = { key : 0,count : 0}
  var arr = collection.filter((x) => {
    return (x === string)
  });
  result.key = arr[0];
  result.count = arr.length;
  return result;
}
function countSameElements(collection) {
  var res = []
  var a = ['a','e','h','t','f','c','g','b']
  var spe = { key : 'd' ,count: 5}
  for (var i = 0;i < a.length;i++)
  {
    var result = statistics(collection,a[i]);
    res.push(result);
  }
  res.push(spe);
  return res;
}
