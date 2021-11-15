//Utility

//Business
function pigLatin(text) {
	const vowels = ["a", "e", "i", "o", "u"];
  let lowerCaseText = text.toLowerCase();
  let ay = "ay";
  let way = "way";
  let result = "";
  let textCopy = text.slice(1);
  
 for (let v = 0; v <lowerCaseText.length; v++) {

   for (let i = 0; i < vowels.length; i++) {
   console.log(lowerCaseText[v]);
    console.log(vowels[i]);
  	if (lowerCaseText[v] === vowels[i]) {
   // if (lowerCaseText[0] === vowels[i]) {
    //result = lowerCaseText.slice(1);
    result = lowerCaseText.slice(v);
    result = result.concat(lowerCaseText.substring(0,v));
    result = result.concat("way");
    return result;
    break;
    }
    else {
    	//result = lowerCaseText.slice(1)
      result = lowerCaseText.slice(v);
      result = result.concat(lowerCaseText.substring(0,v));
      result = result.concat(lowerCaseText[0], ay);
     // break;
    }
    }
   }
    console.log(result);
    return result;
}    