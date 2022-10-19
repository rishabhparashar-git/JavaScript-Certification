const romanMap = {
  ones: {
    1: "i",
    4: "iv",
    5: "v",
    9: "ix",
  },
  tens: {
    1: "x",
    4: "xl",
    5: "l",
    9: "xc",
  },
  hundreds: {
    1: "c",
    4: "cd",
    5: "d",
    9: "cm",
  },
  thousands: {
    1: "m",
  },
};

function convertToRoman(num) {
  let ans = "";
  const position = ["ones", "tens", "hundreds", "thousands"];
  let pos = 0;
  while (num > 0) {
    let currNum = num % 10;
    num = Math.floor(num / 10);
    let mapping = romanMap[position[pos]];
    pos += 1;
    if (currNum === 0) {
      continue;
    }

    let currRoman;

    if (currNum < 4) {
      currRoman = mapping[1].repeat(currNum);
    }

    if (currNum === 4) {
      currRoman = mapping[4];
    }

    if (currNum > 4) {
      if (currNum === 9) {
        currRoman = mapping[9];
      } else {
        currRoman = mapping[5];
        currNum -= 5;
        currRoman = currRoman + mapping[1].repeat(currNum);
      }
    }

    ans = currRoman + ans;
  }
  return ans.toUpperCase();
}
