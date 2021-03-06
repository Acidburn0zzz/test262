// This file was procedurally generated from the following sources:
// - src/class-fields/empty-var-new-line-computed-name-function-asi.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: empty var and newline, computed name empty function (ASI) (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class Base {}
class C extends Base {
  a
    ['b'](){}
  constructor() {
    super();
    assert.sameValue(this.a, undefined);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");

      assert.sameValue(typeof Object.getPrototypeOf(this).b, "function");
      verifyNotEnumerable(Object.getPrototypeOf(this), "b");
      verifyConfigurable(Object.getPrototypeOf(this), "b");
  }
}

const c = new C();
