module.exports = 'var assert = require(\'chai\').assert,\n    cssom = require(\'cssom\');\n\ndescribe(\'problem\', function() {\n  it(\'Since this is on the `body` tag, start with a CSS rule targetting body.\', function() {\n    var tree = cssom.parse(code);\n    assert(tree.cssRules[0].selectorText == \'body\');\n  });\n\n  it(\'Set the `background-color` property for the `body`.\', function() {\n  });\n  it(\'The `background-color` for the `body` should be `red`.\', function() {\n\n  });\n});\n';