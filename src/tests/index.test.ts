import { helloWorld } from '..';

describe('npm-template', () => {
    it('helloWorld', () => {
        helloWorld('ClearBlade').then(data => {
            expect(data).toBe('Hello ClearBlade!');
        });
    });
});
