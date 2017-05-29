
'use strict';
function statistics(result,str) {
  var sum = 0
  var array = { name : 0,summary : 0 }
  for(var i = 0;i < result.length;i++)
  {
    if(result[i] === str)
    {
      sum ++;
    }
  }
  array.name = str
  array.summary = sum
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
function second(collection) {
  var a = []
  for (var i = 0; i < collection.length; i++) {
    var num = collection.findIndex((e) => {
      return e.includes("[")
    });
    if (num < 0) {
      break;
    }
    a[0] = collection[num][0];
    a[1] = collection[num].slice(2,-1);
    collection.splice(num,1);
    for (var i = 0;i < a[1];i++)
    {
      collection.push(a[0]);
    }
  }
  return collection;
}
function third(collection) {
  var  a = []
  var  b = []
  for (var i = 0;i< collection.length;i++)
  {
    var num = collection.findIndex((e)=>{return e.includes(":")});
    if (num < 0){
      break;
    }
    a = collection[num].split(":");

    collection.splice(num,1);
    for (var i = 0;i < a[1];i++)
    {
      collection.splice(num,0,a[0]);
    }
    return collection
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
function countSameElements(collection) {
  var a = [];
  var result;
  var res = [];
  var arr = [];
  result = first(collection);
  result = second(result);
  result = third(result);
  a = fourth(result);
  for (var i = 0;i < a.length;i++)
  {
    arr = statistics(result,a[i]);
    res.push(arr);
  }
  return res;
}
