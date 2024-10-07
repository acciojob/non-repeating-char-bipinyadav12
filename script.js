function firstNonRepeatedChar(str) {
const count={};
	for (let char of str)
		{
			if(count[char])
			   {
				  count[char] +=1;
			   }
			else
			  {
			   count[char] = 1;
			  }
		 }
	for (let char of str)
	   {
	     if (count[char]===1)
	       {
		     return char;
	       } 
	   }
		return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
