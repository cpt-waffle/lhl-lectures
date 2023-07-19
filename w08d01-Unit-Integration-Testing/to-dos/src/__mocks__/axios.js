
// GET /todos ==> [...]

const fixtures = [
  {item: 'buy milk', done: false},
  {item: 'finish react testing with mocks', done: true},
  {item: "apple banana coconut", done: false}
];


export default {
  defaults: {baseURL: ''},
  get: jest.fn(url => {
    console.log("WHAT IS THIS");
    console.log("URL");
    console.log(url);
    if (url === '/todos') {
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
        data: fixtures
      })
    } 
  })
}