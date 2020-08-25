// What is a Function
// let firstName = 'Cliff';
let number = 1;

const greetings = function(name, num, chat) {
    console.log(chat);
    console.log('hello, ', name, num);
    chat(name);
}

const chitChat = function(name) {
    console.log("How's everyone doing?");
    console.log("What about you", name, "?");
    return 0;
}

// chitChat('Paul');
let arr = [1,2,3,4,5];
arr.map(function(elem) {
    return elem * 2;
})

let a = chitChat('Cliff'); // 0


greetings('Cliff', number, chitChat);
