/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2020-07-16 18:43:25
 * @LastEditTime: 2021-02-06 21:00:38
 * @LastEditors: SongJ
 */
function Foo() {
    getName = function() {
      console.log(1);
    };
    return this;
  }
  Foo.getName = function() {
    console.log(2);
  };
  Foo.prototype.getName = function() {
    console.log(3);
  };
  var getName = function() {
    console.log(4);
  };
  function getName() {
    console.log(5);
  }
  
  //请写出以下输出结果：
  Foo.getName();
  getName();
  Foo().getName();
  getName();
  new Foo.getName();
  new Foo().getName();
  new new Foo().getName();
  