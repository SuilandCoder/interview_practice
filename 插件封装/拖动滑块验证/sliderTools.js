(function(){
    var root =(typeof self=='object' && self.self==self&&self) ||
                (typeof global=='object' && global.global==global && global) ||
                this || {};
    var util = {
        extend:function(target){},
        isValidListener: function(listener){},
        addCSS:function(cssText){},
        indexOf:function(array,item){},
    }
    
    function EventEmitter() { };

    EventEmitter.prototype.once = function(eventName,listener){};
    EventEmitter.prototype.off = function(eventName,listener){};
    EventEmitter.prototype.emit = function(eventName,args){};

    //************ 代码块 3**************//
    function SliderTools(options){}

    SliderTools.defaultOptions = {}

    var proto = SliderTools.prototype = new EventEmitter(); //* SliderTools 继承 emitter

    proto.constructor = SliderTools; //* 修正构造器

    proto.init = function(){}
    
    //************ 代码块 3**************//
    if(typeof exports!='undefined' && !exports.nodeType){
        if(typeof module!='undefined' && !module.nodeType && module.exports){
            exports = module.exports = SliderTools;
        }
        exports.SliderTools = SliderTools;
    }else{
        root.SliderTools = SliderTools;
    }

}());