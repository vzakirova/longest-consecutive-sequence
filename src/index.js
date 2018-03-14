module.exports = function longestConsecutiveLength(array) {
  // your solution here

  let sortedArray = array.sort(comparator);
  
  // для цепочки длиной больше одного элемента 
  // элементов должно быть как минимум 2
  if (sortedArray.length < 2)
    return sortedArray.length;

  let length = 1;
  let result = 1;

  for (let i = 0; i < sortedArray.length; i++)
  {
    if (sortedArray[i] + 1 === sortedArray[i + 1])
    {
      length++;      
    }
    else if (sortedArray[i] !== sortedArray[i + 1]) // повторяющиеся числа!!!
            length = 1;
    
    if (length > result)
      result = length;
  }

  return result;

  function comparator(x, y)
  {
    return x-y;
  }
}
