module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { START: peg$parseSTART },
        peg$startRuleFunction  = peg$parseSTART,

        peg$c0 = function(lines) {
                lines.push(m.closeOpenTags(null));

                return lines
                    .filter(function(e) { return e !== null; })
                    .join('\n');
            },
        peg$c1 = function(line) {
                return line;
            },
        peg$c2 = function() {
                return null;
            },
        peg$c3 = function(ident, name, id, cb, prop, mut, il) {
                var tag     = m.buildTag(ident, name, id, cb, prop, mut, il);
                var content = m.closeOpenTags(ident) + tag;

                if(il === null) {
                    m.tryPushNewOpenTag(ident, name);
                }

                return content;
            },
        peg$c4 = function() {
                // Simply eats the comment.
                return null;
            },
        peg$c5 = function(ident, val) {
                return m.buildContent(ident, val);
            },
        peg$c6 = function(ident, val) {
                return m.buildRawContent(ident, val);
            },
        peg$c7 = function(val) {
                return val;
            },
        peg$c8 = function(name, val) {
                return [name, val];
            },
        peg$c9 = { type: "other", description: "Letter A-Z" },
        peg$c10 = /^[a-zA-Z]/,
        peg$c11 = { type: "class", value: "[a-zA-Z]", description: "[a-zA-Z]" },
        peg$c12 = { type: "other", description: "Letter A-Z or - _" },
        peg$c13 = /^[a-zA-Z0-9\-_]/,
        peg$c14 = { type: "class", value: "[a-zA-Z0-9-_]", description: "[a-zA-Z0-9-_]" },
        peg$c15 = /^[ -~]/,
        peg$c16 = { type: "class", value: "[ -~]", description: "[ -~]" },
        peg$c17 = /^[!-&(-<>-~]/,
        peg$c18 = { type: "class", value: "[!-&(-<>-~]", description: "[!-&(-<>-~]" },
        peg$c19 = /^[ -&(-~]/,
        peg$c20 = { type: "class", value: "[ -&(-~]", description: "[ -&(-~]" },
        peg$c21 = { type: "other", description: "Whitespace" },
        peg$c22 = { type: "other", description: "Extended whitespace" },
        peg$c23 = /^[ \t]/,
        peg$c24 = { type: "class", value: "[ \\t]", description: "[ \\t]" },
        peg$c25 = { type: "other", description: "Line feed" },
        peg$c26 = /^[\n]/,
        peg$c27 = { type: "class", value: "[\\n]", description: "[\\n]" },
        peg$c28 = { type: "other", description: "Carriage return" },
        peg$c29 = /^[\r]/,
        peg$c30 = { type: "class", value: "[\\r]", description: "[\\r]" },
        peg$c31 = { type: "other", description: "Newline either windows or *nix" },
        peg$c32 = { type: "other", description: "#" },
        peg$c33 = "#",
        peg$c34 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c35 = { type: "other", description: "Backtick character" },
        peg$c36 = "`",
        peg$c37 = { type: "literal", value: "`", description: "\"`\"" },
        peg$c38 = "+",
        peg$c39 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c40 = { type: "other", description: "Equals sign" },
        peg$c41 = "=",
        peg$c42 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c43 = { type: "other", description: "Single quote character" },
        peg$c44 = "'",
        peg$c45 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c46 = { type: "other", description: "Question mark" },
        peg$c47 = "?",
        peg$c48 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c49 = "-",
        peg$c50 = { type: "literal", value: "-", description: "\"-\"" },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseSTART() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseLINE();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseLINE();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseLINE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseTAG();
      if (s1 === peg$FAILED) {
        s1 = peg$parseCOMMENT();
        if (s1 === peg$FAILED) {
          s1 = peg$parseCONTENT();
          if (s1 === peg$FAILED) {
            s1 = peg$parseRAW_LINE();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseNL();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseNL();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c1(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNL();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c2();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseTAG() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$parseWS();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWS();
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTAG_NAME();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTAG_ID();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseTAG_CLASS_BLOCK();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseTAG_PROP();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseTAG_PROP();
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseTAG_MUTATOR();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseTAG_MUTATOR();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseTAG_INLINED_CONTENT();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$parse_();
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$parse_();
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c3(s1, s2, s3, s4, s5, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCOMMENT() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseWS();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWS();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_QM();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseASCII();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseASCII();
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c4();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseCONTENT() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$parseWS();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWS();
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_SQ();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parsePROP_ASCII_INNER();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsePROP_ASCII_INNER();
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCHAR_SQ();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c5(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRAW_LINE() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$parseWS();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWS();
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_DASH();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCHAR_DASH();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = [];
              s7 = peg$parseASCII();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parseASCII();
              }
              if (s6 !== peg$FAILED) {
                s5 = input.substring(s5, peg$currPos);
              } else {
                s5 = s6;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c6(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_NAME() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseID();
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c7(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTAG_ID() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_POUND();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseID();
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c7(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_CLASS_BLOCK() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_BT();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parseTAG_CLASS();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseTAG_CLASS();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCHAR_BT();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c7(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_CLASS() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseID();
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c7(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_MUTATOR() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_PLUS();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseID();
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c7(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_PROP() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        s4 = peg$parsePROP_ASCII();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsePROP_ASCII();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCHAR_SQ();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parsePROP_ASCII_INNER();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsePROP_ASCII_INNER();
            }
            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseCHAR_SQ();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c8(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTAG_INLINED_CONTENT() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCHAR_EQ();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCHAR_SQ();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = [];
              s7 = peg$parsePROP_ASCII_INNER();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parsePROP_ASCII_INNER();
              }
              if (s6 !== peg$FAILED) {
                s5 = input.substring(s5, peg$currPos);
              } else {
                s5 = s6;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseCHAR_SQ();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c7(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseID() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseLETTER();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseLETTER();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseLETTER_EXTRA();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseLETTER_EXTRA();
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLETTER() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c10.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }

      return s0;
    }

    function peg$parseLETTER_EXTRA() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c13.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c14); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }

      return s0;
    }

    function peg$parseASCII() {
      var s0;

      if (peg$c15.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }

      return s0;
    }

    function peg$parsePROP_ASCII() {
      var s0;

      if (peg$c17.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }

      return s0;
    }

    function peg$parsePROP_ASCII_INNER() {
      var s0;

      if (peg$c19.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$parseWS();
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }

      return s0;
    }

    function peg$parse__() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseWS();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWS();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNL();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }

      return s0;
    }

    function peg$parseWS() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c23.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }

      return s0;
    }

    function peg$parseLF() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c26.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }

      return s0;
    }

    function peg$parseCR() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c29.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c30); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }

      return s0;
    }

    function peg$parseNL() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseCR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLF();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseLF();
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }

      return s0;
    }

    function peg$parseCHAR_POUND() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 35) {
        s0 = peg$c33;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }

      return s0;
    }

    function peg$parseCHAR_BT() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 96) {
        s0 = peg$c36;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parseCHAR_PLUS() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 43) {
        s0 = peg$c38;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }

      return s0;
    }

    function peg$parseCHAR_EQ() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 61) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parseCHAR_SQ() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 39) {
        s0 = peg$c44;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }

      return s0;
    }

    function peg$parseCHAR_QM() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 63) {
        s0 = peg$c47;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }

      return s0;
    }

    function peg$parseCHAR_DASH() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 45) {
        s0 = peg$c49;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }

      return s0;
    }


        function Manager() {
            this.openTags  = [];
            this.ident     = '    ';
            this.identSize = 4; // How many spaces count as an ident.

            this.voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
        }

        Manager.prototype.identLevel = function(ident) {
            var cur = ident.length;

            return Math.floor(cur / this.identSize);
        }

        Manager.prototype.genIdent = function(level) {
            var space = '';
            for(var i = 0; i < level; i++) {
                space += this.ident;
            }

            return space;
        }

        Manager.prototype.tryPushNewOpenTag = function(ident, name) {
            if(this.isVoidTag(name)) {
                return;
            }

            this.openTags.push({
                name: name,
                ident: this.identLevel(ident),
            });
        }

        Manager.prototype.isVoidTag = function(name) {
            return this.voidTags.indexOf(name) !== -1;
        };

        Manager.prototype.buildTag = function(ident, name, id, classes, props, mutators, inlined) {
            var tag   = '';
            var ident = this.genIdent(this.identLevel(ident));

            tag += ident + '<' + name;
            if(id !== null) {
                tag += this.buildTagId(id);
            }

            if(classes !== null) {
                tag += this.buildTagClasses(classes);
            }

            if(props.length > 0) {
                tag += this.buildTagProps(props);
            }

            if(mutators.length > 0) {
                tag += this.buildTagMutators(mutators);
            }

            if(this.isVoidTag(name)) {
                return tag + ' />';
            } else {
                tag += '>';
            }

            if(inlined !== null) {
                tag += inlined;
                tag += this.buildClosingTag({
                    name: name,
                    ident: this.identLevel(ident),
                }, true);
            }

            return tag;
        }

        Manager.prototype.buildTagId = function(val) {
            return ' id="' + val + '"';
        }

        Manager.prototype.buildTagClasses = function(val) {
            return ' class="' + val + '"';
        }

        Manager.prototype.buildTagProps = function(val) {
            var props = '';
            for(var i = 0; i < val.length; i++) {
                var name  = val[i][0];
                var value = val[i][1];

                props += ' ' + name + '="' + value + '"';
            }

            return props;
        }

        Manager.prototype.buildTagMutators = function(val) {
            var muts = '';
            for(var i = 0; i < val.length; i++) {
                var value = val[i];

                muts += ' ' + value;
            }

            return muts;
        }

        Manager.prototype.buildContent = function(ident, val) {
            return this.genIdent(this.identLevel(ident)) + val;
        }

        Manager.prototype.buildRawContent = function(ident, val) {
            return this.genIdent(this.identLevel(ident)) + val;
        }

        Manager.prototype.closeOpenTags = function(ident) {
            var content = '';
            var tag;

            var identLevel = ident !== null ? this.identLevel(ident) : 0;
            var numClosed = 0;

            for(var i = this.openTags.length - 1; i >= 0; i--) {
                tag = this.openTags[i];

                if(ident == null || identLevel <= tag.ident) {
                    content += this.buildClosingTag(tag);
                    numClosed++;
                } else {
                    break;
                }
            }

            this.openTags.splice(-numClosed, numClosed);
            return content;
        }

        Manager.prototype.buildClosingTag = function(tag, noIdent) {
            if(typeof(noIdent) !== 'undefined') {
                return '</' + tag.name + '>';
            }

            return this.genIdent(tag.ident) + '</' + tag.name + '>\n';
        }

        var m = new Manager();


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();