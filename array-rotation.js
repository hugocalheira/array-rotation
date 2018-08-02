/**
* Rotate the array's elements
* @list: array's elements that will be rotate
* @pos: number of elements in operation - default: 1
* @left: boolean indicating the direction - default: left
*/
array_rotate = function(list, pos=1, left=true) { 
  (left) ? list.push(...list.splice(0,pos)) : list.push(...list.splice(0,list.length-pos)); 
  return list;
}
