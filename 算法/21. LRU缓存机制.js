/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        //* 先删除之前的值
        let tmp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,tmp);
        return tmp;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
    }else if(this.cache.size>=this.capacity){
        this.cache.delete(this.cache.keys().next().value());
    }
    this.cache.set(key,value);
};