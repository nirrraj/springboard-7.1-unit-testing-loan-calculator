
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 500000,
    years: 30,
    rate: 7
  };
  expect(calculateMonthlyPayment(values)).toEqual(3326.51);
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 500000,
    years: 30,
    rate: 7
  };
  expect(calculateMonthlyPayment(values).toString()).toEqual('3326.51');
});

/// etc
it("should treat negative inputs as positive", function() {
  // ..
  const values = {
    amount: -500000,
    years: -30,
    rate: -7
  };
  expect(calculateMonthlyPayment(values)).toEqual(3326.51);
});