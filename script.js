function firstNonRepeatedChar(str) {
const count={};
	for (char of str)
		{
			if(count[char])
			 {
				count[char]+=1;
			 }
			   count[char]+1;
		}
	if (count[char]===1)
	{
		return char;
	}
	else {
		return null;
	}
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
