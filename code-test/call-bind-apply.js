/**
 * this
 */
const f = function () {
  console.log('function', this);
};

const f2 = () => {
  console.log('function2', this);
};

// ( a: callee ) .f: method ( ... parameters )
// a.f();

f();
f2();

/**
 * call, bind
 */
// { name: 'superfree' }
function greeting() {
  // ...params
  console.log(`Hello ${this.name}`);
}

const me = { name: 'superfree' };

const boundGreeting = greeting.bind(me);

console.log({ f, boundGreeting });

greeting.call(me);
greeting();

me.name = 'john';

boundGreeting();

/**
 * apply
 */
function greeting2(...params) {
  console.log(`params`, params);
}

greeting2(1, 2, 3);
greeting2([1, 2, 3]);

greeting2.call(null, 1, 2, 3);
greeting2.apply(null, [1, 2, 3]);

/**
 * 先 bind 再 call
 */
const finalTest = () => {
  {
    // scope
  }
  const a = {}; // object

  function f1() {
    console.log(`Hello ${this.name}`);
  }

  f1.call({ name: '1' }); // Hello 1

  const f2 = f1.bind({ name: '2' }); // bind 后 this 固定
  f2(); // Hello 2

  f2.call({ name: '3' }); // Hello 2
};
