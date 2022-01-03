function palindrome(str) {
    // your code here!
    let len = str.length;
    let toarr=str.split("");
    let revstr=toarr.reverse();
    let revname=revstr.join("")

    if(revname==str){
      return true
    }else{
      return false
    }
   
    //code end. don't edit anything below
  }

  console.log(palindrome('naman'))