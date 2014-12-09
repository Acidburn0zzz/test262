// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-55
description: >
    Object.defineProperties - both desc.writable and P.writable are
    boolean values with the same value (8.12.9 step 6)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        var desc = { writable: false };
        Object.defineProperty(obj, "foo", desc);

        Object.defineProperties(obj, {
            foo: {
                writable: false
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, false, false, false);
    }
runTestCase(testcase);