describe("Gilded Rose", function() {
  var foo;

  // beforeEach(function() {
  //   foo = 0;
  //   foo += 1;
  // });

  // afterEach(function() {
  //   foo = 0;
  // });

  it("has an Item constructor", function() {
    expect(typeof Item).toBe('function');
  });

  it("should set a global array", function() {
    expect(items instanceof Array).toBe(true);
  });

  it("is a syntax example", function() {
    expect(true).toBe(false);
  });

  // it("can have a negative case", function() {
  //   expect(false).not.toBe(true);
  // });



  // describe("Another spec", function() {
  //   it("is just a function, so it can contain any code", function() {
  //     var foo = 0;
  //     foo += 1;

  //     expect(foo).toEqual(1);
  //   });

  //   it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
  //     var pi = 3, e = 2;

  //     expect(e).toBeLessThan(pi);
  //     expect(pi).not.toBeLessThan(e);
  //   });

  //   it("The 'toBeGreaterThan' is for mathematical comparisons", function() {
  //     var pi = 3, e = 2;

  //     expect(pi).toBeGreaterThan(e);
  //     expect(e).not.toBeGreaterThan(pi);
  //   });
  // });

});
