/**
 * @jest-environment jsdom
 */
 import {pushToHistory} from '../scripts/router.js';
 
 describe('pushToHistory Fuction', () => {
     test('default test', () =>{
        let dTest = pushToHistory();
        expect(dTest.state.page).toBeUndefined();
        expect(dTest.length).toBe(2);
     });
 
     test('entry test', () => {
        let eTest = pushToHistory('entry', 1);
        expect(eTest.state.page).toBe('entry1');
        expect(eTest.length).toBe(3);
     });
 
     test('settings test', () => {
        let sTest = pushToHistory('settings');
        expect(sTest.state.page).toBe('settings');
        expect(sTest.length).toBe(4);
     });
 });
