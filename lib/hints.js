// module for dealing with hints
//
/*jslint node: true */
'use strict';

// parses commit message, returns the first of 
// the pattern is "ok strider <hint text>"
function parse(message) {
  var re = /ok strider:[^\w]+([^\n\@]+)!/gi;
  var matches = [];
  var match = re.exec(message);
  while (match) {
    matches.push(match);
    match = re.exec(message);
  }
  var hints = matches
    .filter(function(match) { return match[1]; })
    .map(function(match) { return match[1] && match[1].trim(); });
  return hints[0];
}

module.exports = {
  'parse': parse
};
