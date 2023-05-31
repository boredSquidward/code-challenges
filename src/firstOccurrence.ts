function strStr(haystack: string, needle: string): number {
  const result = haystack.match(needle);
  console.log(result);

  if (result && result["index"] !== undefined) return result["index"];

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
