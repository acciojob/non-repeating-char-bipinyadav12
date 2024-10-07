function firstNonRepeatedChar(str) {
const count={};
	for (char of str)
		{
			if(count[char])
			 {
				count[char]+=1;
			 }
			   count[char]=1;
		}
	for (char of str){
	if (count[char]===1)
	{
		return char;
	}
	}
		return null;
	
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
