describe('extend the String class functionality', () => {

  describe('String.prototype.hasVowels', () => {
    it('returns true if a string has a vowel', () => {
      expect('World'.hasVowels()).toBe(true);
      expect('wOrld'.hasVowels()).toBe(true);
    });
    it('returns false if a string has no vowels', () => {
      expect('ghgsh'.hasVowels()).toBe(false);
      expect('@#$$'.hasVowels()).toBe(false);
    });
  });

  describe('String.prototype.toUpper', () => {
    it('checks if string returned is uppercase', () => {
      expect('hello'.toUpper()).toEqual('HELLO');
      expect('heLlo'.toUpper()).toEqual('HELLO');
      expect('HELLO'.toUpper()).toEqual('HELLO');
    });
  });

  describe('String.prototype.toLower', () => {
    it('returns all strings in lowercase', () => {
      expect('CAR'.toLower()).toEqual('car');
      expect('Car'.toLower()).toEqual('car');
      expect('cAr'.toLower()).toEqual('car');
      expect('caR'.toLower()).toEqual('car');
      expect('car'.toLower()).toEqual('car');
    });
  });

  describe('String.prototype.ucFirst', () => {
    it('returns a string with an uppercased first character', () => {
      expect('hello, world'.ucFirst()).toEqual('Hello, world');
      expect('hello, world'.ucFirst()).toEqual('Hello, world');
      expect('hello, World'.ucFirst()).toEqual('Hello, World');
    });
  });

  describe('String.prototype.isQuestion', () => {
    it('returns true if a string ends with a question mark', () => {
      expect('Bonjour ?'.isQuestion()).toEqual(true);
      expect('Bonjour?'.isQuestion()).toEqual(true);
    });

    it('returns false if a string hdoes not end with a question mark', () => {
      expect('Bonjour.'.isQuestion()).toEqual(false);
      expect('?Bonjour'.isQuestion()).toEqual(false);
    });
  });

  describe('String.prototype.words', () => {
    var testString = 'Victory loves preparation';
    var testString1 = 'I am @prime, I do not take orders.';

    it('returns a list of words', () => {
      expect(testString.words()).toEqual(testString.split(' '));
    });

    it('does not consider punctuation as part of words', () => {
      expect(testString1.words()).toEqual(['I', 'am', 'prime', 'I', 'do','not', 'take', 'orders']);
    });
  });

  describe('String.prototype.wordCount',() => {
    var testString = 'Victory loves preparation';

    it('returns number of words', () => {
      expect(testString.wordCount()).toEqual(3);
    });

    it('should use the words() methods', () => {
      spyOn(String.prototype, 'words').and.callThrough();
      expect(testString.wordCount()).toEqual(3);
      expect(String.prototype.words).toHaveBeenCalled();
    });
  });

  describe('String.prototype.toCurrency', () => {
    it('returns currency presentation of the string', () => {
      expect('11111'.toCurrency()).toEqual('11,111');
      expect('1111.89'.toCurrency()).toEqual('1,111.89');
    });
  });

  describe('String.prototype.fromCurrency', () => {
    it('should return a number representation of the currency string', () => {
      expect('111,111.11'.fromCurrency()).toBe(111111.11);
      expect('123,456,890'.fromCurrency()).toBe(123456890);
    });
  });
});
