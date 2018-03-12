import { pingPong } from './../src/ping-pong';

describe("pingPong", function() {
  it ('should test whether pingPong returns ping for multiples of 3', function() {
    var testPingPong = new pingPong(3)
    expect(testPingPong).toEqual([1,2,"ping"])
  });

  it('should test whether pingPong returns pong for multiples of 5', function() {
    var testPingPong = new pingPong(5)
    expect(testPingPong).toEqual([1,2,"ping",4,"pong"])
  });

  it('should test whether pingPong returns ping-pong for multiples of 3 and 5', function() {
    var testPingPong = new pingPong(15)
    expect(testPingPong).toEqual([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping-pong"])
  });
});
