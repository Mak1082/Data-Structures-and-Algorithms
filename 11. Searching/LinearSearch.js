var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
  return item === 'Godzilla';
});

beasts.find(function(item){
  return item === 'Godzilla';
})

beasts.includes('Godzilla')

// All these built-in functions in javascript use linear search
// Linear Search is just traversing through a data structure until we find the required value. O(n)
// Worst case is when the data to be looked for is at the end of the list