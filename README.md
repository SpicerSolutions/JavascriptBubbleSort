# JavascriptBubbleSort
A javascript implementation for a bubble sort.

One of the first things I was taught was how to sort an array. Most modern languages have functions to do this for you but it’s still worth knowing the basics behind how. You would be surprised the number of times the same principles are used to perform other operations. Below is my Bubble sort written in Javascript.

A bubble sort works by accending the array and comparing the value at your current location “O(n)” with the value in the next location “O(n+1)”. If the value in the next location is less than the value of your current location “O(n+1) < O(n)” then the two values are swapped “O(n+1) = O(n) and visa versa”.

You can expand on the bubble sort further by running comparisons both accending and descending at the same time, this is known as a double bubble sort. The descending sort has to compare the current position with the one before “O(n-1) > O(n)”, if true the positions are swapped
