// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.strictEqual(capitalize('hello'), 'Hello');

assert.strictEqual(capitalize(''), '');

console.log('Все тесты пройдены!');
