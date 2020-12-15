const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const lengthValidation = 4 <= login.length && login.length <= 16;
  return lengthValidation;
};

const isLoginUnique = function (allLogins, login) {
  const uniquenessValidation = allLogins.includes(login);
  return uniquenessValidation;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login) === false) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
    return message;
  }

  if (isLoginUnique(allLogins, login) === true) {
    message = "Такой логин уже используется!";
    return message;
  }

  allLogins.push(login);
  message = "Логин успешно добавлен!";
  console.log(logins);
  return message;
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
console.log(addLogin(logins, "jquer"));
