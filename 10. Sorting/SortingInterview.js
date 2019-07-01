//#1 - Sort 10 schools around your house by distance:
Insertion Sort 
Rally fast on small data
Easy to code 
Space Complexity of O(1)

//#2 - eBay sorts listings by the current Bid amount:
Radix or Counting Sort
Beacuse its a fixed length of integers between 1$ and 100$

//#3 - Sport scores on ESPN
Quick Sort
Merge Sort is not used because it has worse space complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Merge Sort
Beacuse we are not sorting in memory so space complexity is not the problem and i dont want the worst case of Quick Sort O(n^2). We only want performance.


//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort
Insertion sort works better on almost sorted data.

//#6 - Temperature Records for the past 50 years in Canada
Radix Sort or Counting Sort if the numbers have no decimal places
But with decimal places we use Quick Sort to save on space complexity


//#7 - Large user name database needs to be sorted. Data is very random.
Merge Sort if we have enough memory
Quick Sort if we want to save on memory

//#8 - You want to teach sorting for the first time
Bubble Sort, Selection Sort