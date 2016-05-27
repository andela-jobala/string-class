'use strict';
/* jslint node:true */
/* eslint-disable strict */

String.prototype.hasVowels = function() {

  /**
   * [aeiou] specifies the character class to match against
   * the i modifier specifies the matching to be case insensitive
   * hellO.hasVowels() return true
   * MMG.hasVowels() returns false
   */
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {

  // do a global match of all lowercase characters from a to z
  return this.replace(/([a-z])/g, function(match){

    /**
     * 32 is the difference between an uppercase and lowercase character in the ascii chart
     * To make a lowercase character uppercase, substract 32 from its charCode.
     * h = 104, H = 72
     */
    return String.fromCharCode(match.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function() {

  // do a global match of all uppercase characters from A to Z
  return this.replace(/([A-Z])/g, function(match) {

    /**
     * 32 is the difference between an uppercase and lowercase character in the ascii chart
     * To make an uppercase character uppercase, add 32 from its charCode.
     * H = 72, h = 104
     */
    return String.fromCharCode(match.charCodeAt(0) + 32);
  });
};

String.prototype.upperCaseFirst = function() {

  /**
   * charAt(0) returns the first character in a string,
   * to which we call toUpper() on, to uppercase it.
   * this.slice(1), extracts every character from the second character
   * we then append the uppercased first character with every other character from index 1
   */
  return this.charAt(0).toUpper() + this.slice(1).toLower();
};

String.prototype.isQuestion = function() {

  /**
   * [?\s+]$ matches any string that ends with a question mark
   *  s+ is a metacharacter that matches blank, tab \t, form-feed \f and newline \r or \n
   *  $ is an anchor indicating the end of the scope to match
   */
  // trim the string

  return /[?\s+]$/.test(this);
};

String.prototype.words = function() {

  /**
   * ([\wà-ż-']+) groups multiple tokens together and creates a capture group for extracting substrings
   * \w matches any words charcacter
   * à-ż matches any character of char code 224 to 380
   * - matches any hyphen
   * ' matches any apostrophe
   * + match one or more preceding token
   */
  var matchWords = /([\wà-ż-']+)/g;

  // Array of words matched
  var wordsMatched = this.match(matchWords);

  // Return array of words or empty array if none matched
  return wordsMatched || [];
};

String.prototype.wordCount = function() {

  // return the number of words
  return this.words().length;
};

String.prototype.toCurrency = function() {

  // Remove white space from string
  var stringToCurrency = this.replace(/\s/g, '');

  // matches any character that is not in the set
  if (!stringToCurrency || /[^\d\.,]/.test(stringToCurrency)) {
    return NaN;
  }

  /**
   * Match a digit (\d) that:
   * Is followed by one or more groups of three digits (?=\d{3}+)
   * The group of three digits should not be followed by a digit (?!\d)
   */
  return stringToCurrency.replace(/(\d)(?=(\d{3})+(?!\d))/g, function(number) {

    // Add comma to matched number
    // I can hear you   Tge
    return number + ',';
  });
};

String.prototype.fromCurrency = function() {

  // replace all , with an empty space in the global scope
  return Number(this.replace(/,/g, ''));
};
