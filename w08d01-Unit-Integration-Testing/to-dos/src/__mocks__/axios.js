
const itemsFixture = [
  {item: 'AAAAAAAAAAAAAAAAAAAAA', done: false},
  {item: 'BBBBBBBBBBBBBBBBBBBBB', done: true},
];


export default {
  defaults: {baseURL: ''},
  get: jest.fn((url) => {
    console.log("URL", url);
    console.log("HELLO WORLD");
    if (url === '/todos') {
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
        data: itemsFixture
      })
    }
  })
}