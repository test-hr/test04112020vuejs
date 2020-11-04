export function joinStrings(
  stringArray: (string | number | null)[],
  separator: string,
) {
  if (stringArray.length === 0) {
    return '';
  }

  if (stringArray.length === 1) {
    return String(stringArray[0]);
  }

  let returnString = '';

  const maxArrLength = stringArray.length;
  stringArray.forEach((str, i) => {
    if (i < maxArrLength - 1) {
      returnString = returnString.concat(String(str), ` ${separator} `);
    } else {
      returnString = returnString.concat(String(str));
    }
  });

  return returnString;
}
