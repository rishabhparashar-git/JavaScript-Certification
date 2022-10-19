function rot13(str) {
  let ans = "";
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i += 1) {
    let currChar = str[i];
    //checking if it is a character
    if (currChar.toLowerCase() === currChar.toUpperCase()) {
      ans += currChar;
    } else {
      let actualPosition = a.indexOf(currChar);
      let encryptedPosition = actualPosition + 13;
      if (encryptedPosition > 25) {
        encryptedPosition -= 26;
      }
      ans += a[encryptedPosition];
    }
  }
  return ans;
}

console.log(rot13("SERR PBQR PNZC"));
