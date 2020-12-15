const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  const checkResult =
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
  return checkResult;
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
