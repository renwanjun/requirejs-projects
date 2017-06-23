 /*
    require.config执行baseUrl为'js'，
    baseUrl指的模块文件的根目录，可以是绝对路径或相对路径
*/
require.config({
    baseUrl: 'app',
    paths: {
         library: '../library',
    }
});
/*
    这里通过require，来引入monkey.js，
    然后通过后面的匿名函数给他们分配参数，如这里的
    monkey-->mk
*/
require([
    'library/polyfill','library/getJSON'
],function() {
    getJSON("./test-config.json").then(function(json) {
       console.log('Contents: ' + json);
       }, function(error) {
       console.error('出错了', error);
    });
   // mk.init();   

   document.getElementById('root').addEventListener('click',function(event){
	     console.log(event.target);
		   console.log(event.currentTarget);
       console.log(event.eventPhase);
	   //  alert('root');
	  });  //  true:事件捕获阶段触发； false|undefined:事件冒泡阶段触发
	  document.getElementById('child1').addEventListener('click',function(event){
	    // console.log(event.target);
	     //event.stopPropagation();//阻止事件向上冒泡
//alert('child1');
		 //console.log(event.currentTarget);
    // document.getElementById('child2').dispatchEvent(myEvent);
	  });
	  
	  var myEvent = new CustomEvent("myevent", {
        detail: {
          name: "Wilson"
        },
        bubbles: true,
        cancelable: false
      });

      // Listen for 'myevent' on an element
      document.getElementById('child2').addEventListener('myevent', function(event) {
        //alert('Hello ' + event.detail.name);
      });

      // Trigger the 'myevent'
      document.getElementById('child2').dispatchEvent(myEvent);

      function a(){
          var user = "追梦子";
          console.log(this.user); //undefined
          console.log(this); //Window
      }
      //a.call(a);

      var o = {
          user:"追梦子",
          fn:function(){
              console.log(this.user);  //追梦子
          }
      }
      var t=o.fn;
      // t.call(o);
      // t.apply(o);
     // o.fn();

      var c = {
          a:10,
          b:{
              a:12,
              fn:function(){
                  console.log(this.a); //12
              }
          }
      }
     // c.b.fn();

      let deck = {
          suits: ["hearts", "spades", "clubs", "diamonds"],
          cards: Array(52),
          createCardPicker: function() {
              return ()=> {
                  let pickedCard = Math.floor(Math.random() * 52);
                  let pickedSuit = Math.floor(pickedCard / 13);

                  return {suit: this.suits[pickedSuit], card: pickedCard % 13};
              }
          }
      }

      let cardPicker = deck.createCardPicker();
      let pickedCard = cardPicker();
      //console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


      var timer=new Promise(function(resolve,reject){
        var res='';
        setTimeout(function(){
          console.log('hello');
          res='world';
          if(res){
              resolve(res);
          }else{
              reject(error);
          }
          // return 
        },1000);
        
      })

      timer.then(
        function(success){
          console.log('success');
       },
       function(error){
         console.log('error');
       }
       )

       let promise = new Promise(function(resolve, reject) {
        console.log('Promise');
        resolve('d');
        console.log('Promise2');
      });

      promise.then(function(success) {
        console.log('Resolved.'+success);
      });

      console.log('Hi!');
});
 
 
 