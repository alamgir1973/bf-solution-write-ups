import { addUp } from './solutions2.js';
describe('addUp', () => {
    test('Output 10 when input is 4', () => {
        expect(addUp(4)).toBe(10);
    });

    test('Output 21 when input is 6', () => {
        expect(addUp(6)).toBe(21);
    });

    test('Output 66 when input is 11', () => {
        expect(addUp(11)).toBe(66);
    });
});
