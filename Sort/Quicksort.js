const quicksort = (arr) => {
  if (!Array.isArray(arr)) {
    return 'Not a Array';
  }

  if (arr.length <= 1) {
    return arr;
  };
  
  const left = [],
  			right = [],
        pivot = arr[0];
        
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
    	left.push(arr[i]);
    } else {
    	right.push(arr[i]);
    }
  }
  
  return [...quicksort(left), pivot, ...quicksort(right)];
}