const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("return Yes if passed true", () => {
    expect(booleanToWord(true)).toEqual('Yes')
  });

  it("return No if passed false", () => {
    expect(booleanToWord(false)).toEqual('No')
  });
});
