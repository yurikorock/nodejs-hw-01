import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToDb = path.resolve(__dirname, PATH_DB);

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.writeFile(pathToDb, data, 'utf8');
    console.log('Дані успішно записані в файл.');
  } catch (err) {
    console.error('Помилка запису в файл:', err);
  }
};

// У файлі src / utils / writeContacts.js опишіть утилітну функцію writeContacts.
// Вона має записувати дані у файл src / db / db.json.
// Функція повинна коректно приймати дані як параметр та забезпечувати правильний запис даних у файл.
