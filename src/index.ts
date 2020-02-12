import 'core-js';
import './static/promise-polyfill/index.js';

export function helloWorld(name: string): Promise<string> {
    return new Promise(res => res(`Hello ${name}!`));
}
