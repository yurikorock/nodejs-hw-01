import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

//створюємо шаблон 1 контакту з даними у вигляді обєкту
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

const generateContacts = async (number) => {
  const fakeContacts = []; // створюємо масив для контактів

  //наповнюємо масив із number фейкових контактів через createFakeContact
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    fakeContacts.push(contact);
  }
  const existingContacts = await readContacts(); //отримуємо існуючі контакти
  const allContacts = [...existingContacts, ...fakeContacts]; //записуємо до існуючих контактів фейкові контакти
  await writeContacts(allContacts); // записуємо назад оновлені контакти в db.json
  console.log(`Додано нових контактів в кількості : ${number}`);
};

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
