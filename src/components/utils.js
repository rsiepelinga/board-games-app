function cleanString (str) {
  return str.replaceAll('&amp;', "&")
    .replaceAll('&amp;', "&")
    .replaceAll('&#10;', "\n")
    .replaceAll('&#039;', "'")
    .replaceAll('&rsquo;', "'")
    .replaceAll('&mdash;', "—")
    .replaceAll('&ndash;', "-")
    .replaceAll('&#195;&#182;', "ã");
}

export default cleanString;