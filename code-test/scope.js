(function (global) {
  console.log('global', global);
})(this);

// console.log('this global window', this, global, window);

// const IS_NODE = typeof global === 'object';
// const IS_BROWSER = this === window;

/**
 * variable
 * a
 * b
 *
 * |      |
 * |      |
 * | 1: b |
 * | 0: a |
 * +------+
 *
 * 0 => '1'
 * 1 => '2'
 *
 *
 * 0: a = '1'
 * 1: b = '2'
 * 2: c = function() {}
 */

// 函数级别
var a;
// 块
let b;

function blockScope() {
  // gloabl table
  let a = '1';
  const b = '2';
  function c() {}

  {
    // layer 1 table

    {
      // layer 2 table = 块级作用域
      let a = 'aaaa';
      a; // 'aaaa'
      b; // '2'

      {
        // ...
      }
    }
  }
}

function funcScope() {
  // gloabl table
  a = 0;
  var a = 1;

  {
    var a = 2;

    function innerScope() {
      // function table
      var a = 3;
      a; // 3
    }

    a; // 2
  }
  a; // 2
}
