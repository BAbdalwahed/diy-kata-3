const { joinNames } = require("../src");

describe("joinNames", () => {
  const array = [
    {
      name: "Bart",
    },
    {
      name: "Lisa",
    },
    {
      name: "Maggie",
    },
  ]
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])).toEqual('Bart, Lisa & Maggie')
    });
  });