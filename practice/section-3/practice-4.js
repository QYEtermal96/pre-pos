'use strict';
function statistics(result,str) {
  var sum = 0
  var array = { key : 0,count : 0 }
  for(var i = 0;i < result.length;i++)
  {
    if(result[i] === str)
    {
      sum ++;
    }
  }
  array.key = str
  array.count = sum
  return array;
}
function first(collection) {
  var  a = []
  for (var i = 0;i< collection.length;i++)
  {
    var num = collection.findIndex( (e) => {return e.includes("-")});
    if (num < 0){
      break;
    }
    a = collection[num].split("-");
    collection.splice(num,1);
    for (var i = 0;i < a[1];i++)
    {
      collection.push(a[0]);
    }
  }
  return collection;
}
function fourth(collection) {
  var a = [];
  for (var i = 0;i < collection.length; i++ )
  {
    if( a.findIndex((e) => {return e === collection[i]}) < 0)
    {
      a.push(collection[i]);
    }
  }
  return a;
}
function createUpdatedCollection(collectionA, objectB) {
  var a = [];
  var res = [];
  var arr =[];
  collectionA = first(collectionA);
  a = fourth(collectionA);
  for (var i = 0;i < a.length;i++)
  {
    arr = statistics(collectionA,a[i]);
    res.push(arr);
  }
  for(var i = 0;i < res.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (res[i].key === objectB.value[j]) {
        res[i].count -= Math.floor(res[i].count / 3);
      }
    }
  }
  return res;
}
