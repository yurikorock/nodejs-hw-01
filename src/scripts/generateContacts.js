import { faker } from '@faker-js/faker';

const createFakeContact = () => {
  const randomId = faker.string.uuid();
  const randomName = faker.person.fullName();
  const randomPhoneNumber = faker.phone.number();
  const randomEmail = faker.internet.email();
  const randomJobTitle = faker.person.jobTitle();
  return {
    id: randomId,
    fullName: randomName,
    phonenumber: randomPhoneNumber,
    email: randomEmail,
    jobTitle: randomJobTitle,
  };
};

const generateContacts = async (number) => {};

generateContacts(5);

// У файлі src / scripts / generateContacts.js опишіть функцію generateContacts.
// Вона має за допомогою функції createFakeContact, створювати передану кількість
// згенерованих контактів, а потім додавати їх до масиву у файлі src / db / db.json
// і записувати їх назад у файл src / db / db.json.

//     Переконайтесь, що ваша функція generateContacts коректно додає нові контакти
// до вже існуючих.Тобто, якщо масив був порожній, після виклику функції в ньому
// має бути передана кількість контактів, наприклад 5. Якщо контактів було 3 і у
// виклик передали 5, то після виклику функції їх має стати 8.

// Перевірити роботу функції можна виконавши команду npm run generate, яка
// буде виконувати код у файлі src / scripts / generateContacts.js.
// У файлі src / db / db.json мають відбутися відповідні зміни.
