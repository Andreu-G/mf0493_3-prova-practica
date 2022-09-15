import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';

describe('isogram', () => {

    it('Should return true if the word is an isogram', () => {
        expect(isIsogram('Dermatoglyphics')).toBe(true);
    });

    it('Should return false if the word is NOT an isogram', () => {
        expect(isIsogram('aBa')).toBe(false);
    });

    it('Should return true if the word does NOT have repeating letters (case insensitive)', () => {
        expect(isIsogram('moOse')).toBe(false);
    });

    //Si bien este cuarto test no está incluido, en el ejercicio pone: "Assume the empty string is an isogram", por eso lo he añadido.
    
    it('Should return true if the string is empty', () => {
        expect(isIsogram('')).toBe(true);
    });

});