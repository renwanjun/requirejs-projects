/*
    define的参数为匿名函数，该匿名函数返回一个对象
*/
define([],function(){
    var init = function(){
        //console.log('dd');
    };
    
    var o={
        num:12,
        oo:{
            sex:'female',
            handle:function(){
                console.log(this.sex);
                console.log(this.num);
            }
        },
        handle:function(){
            console.log(this.num);
        }
    };

    //o.handle();

    var h=o.handle;
    h.call(o);
    h.apply(o);

    o.oo.handle.call(o);

    return {
        init: init
    };
});