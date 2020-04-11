export const countWords = (str: string) => {
  if (str == undefined || str.length === 0) {
    return;
  }
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
};
