'use strict';
/* jslint node:true */
/* eslint-disable strict */

String.prototype.hasVowels = function() {

  // return true if the string has vowels
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {

  // return all characters in upper case
  return this.replace(/([a-z])/g, function(match){
    return String.fromCharCode(match.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function() {

  // return all characters in lower case
  return this.replace(/([A-Z])/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + 32);
  });
};

String.prototype.ucFirst = function() {

  // return the string with its first character uppercased.
  return this.charAt(0).toUpper() + this.slice(1);
};

String.prototype.isQuestion = function() {

  // return true if the string ends with a question mark
  return /\?$/.test(this);
};

String.prototype.words = function() {

  // return list of words in a string
  return this.match(/(\w+)/g);
};

String.prototype.wordCount = function() {

  //return the number of words
  return this.words().length;
};

String.prototype.toCurrency = function() {
  var stringToCurrency = /^[0-9]+(\.[0-9]+)?$/;

  //if the string is of an invalid format(can't be represented as currency return NaN)
  if (!stringToCurrency.test(this)) {
    return NaN;
  }

  return parseFloat(Number(this).toFixed(2))
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

String.prototype.fromCurrency = function() {
  
  return Number(this.replace(/,/g, ''));
};
