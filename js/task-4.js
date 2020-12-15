const formatString = function (string) {
  let message;
  if (string.length <= 40) {
    message = string;
  } else {
    message = string.slice(0, 40);
    message = message + "...";
  }
  return message;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
