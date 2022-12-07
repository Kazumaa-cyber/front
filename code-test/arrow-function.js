// (function scope() {
//   var a = 111;

//   const f = () => {
//     console.log(this.a);
//   };

//   const f2 = function () {
//     console.log(this.a);
//   };

//   f();
//   f.call({ a: 222 });
//   f2();
//   f2.call({ a: 333 });

//   function innerScope() {
//     var a = 444;
//     f2();
//   }

//   innerScope();
// })();

// { prop: value }

var name = 'outer name';

const a = {
  name: 'superfree',
  // intro: function() {}
  intro() {
    console.log(`I am ${this.name}`);
  },

  intro2: () => {
    console.log(`I am ${this.name}`);
  },
};

a.intro();
a.intro2();

(function () {
  const intro = function () {
    console.log(`I am ${this.name}`);
  };

  const intro2 = () => {
    console.log(`I am ${this.name}`);
  };

  // ( a: callee ) .f: method ( ... parameters )
  intro();
  intro2();
}.call({ name: '1' }));
