

const items = [
  {item: "buy milk", done: false},
  {item: 'finish testing', done: true}
];


export default {
  defaults: {baseURL: ''},
  get: jest.fn(url => {
    console.log("THIS FUNCTION RUNS ",)
    console.log(url);
    if (url === '/todos') {
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
        data: items
      })
    }
  })
}