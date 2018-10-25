function bubbleSort( arrayToSort )
{

  do
  {

    changed=false;

    // loop through the array
    for( i=0;i<(arrayToSort.length-1);i++)
	{

	  // if the O(n) > O(n+1) move O(n) to O(n+1) and O(n+1) to O(n)
	  if ( arrayToSort[i] > arrayToSort[i+1] )
	  {

	    current=arrayToSort[i+1];	  

	    arrayToSort[i+1]=arrayToSort[i];
		arrayToSort[i]=current;

	    changed=true;

	  }

	}

  }
  while( changed==true );
  // break out of loop if no changes are made.

  return arrayToSort;

}
