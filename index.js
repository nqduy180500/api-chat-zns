var longestPalindrome = function(s) {
    let checkListI2=[],c="",max="";
    for(let i = 0 ;i<s.length ; i++ ){
    if(checkListI2.indexOf(s[i])<0){
    	c =getLongSub(s,s[i]);
        if(c.length>max.length) max=c;
   		 	checkListI2.push(s[i])
    }
    }
    return max;
};
var checkdx = function(s) {
    for(let i = 1 ;i<s.length/2 ; i++ ){
        if(s[i] != s[s.length-i-1]){
            return false;
        }
    }
    return true;
};
var getLongSub = function(s,t) {
  let i2 = s.indexOf(t,0),listI2=[];
  while(i2>=0){
  	listI2.push(i2);
    i2=s.indexOf(t,i2+1)
  }
  let max="";
  let c=s.slice(listI2[0],listI2[listI2.length-1]+1);
  if(checkdx(c)) return c;
  for(let i = 0 ; i < listI2.length -1; i++){
  		for(let j = i+1 ; j < listI2.length ; j++){
      		c = s.slice(listI2[i],listI2[j]+1);
          if(checkdx(c) && c.length>max.length) max=c;
  		}
  }
  return max;
};