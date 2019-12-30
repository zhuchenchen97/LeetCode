/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
    this.tmp = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length>1){
        var ch = this.stack.pop();
        this.tmp.push(ch);
    }
    this.tmp = this.tmp.reverse(); 
    var num = this.stack.pop();
    this.stack = this.tmp;
    this.tmp = [];
    return num;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack.length>1){
        var ch = this.stack.pop();
        this.tmp.push(ch);
    }
    var num = this.stack.pop();
    this.tmp.push(num);
    this.tmp = this.tmp.reverse(); 
    this.stack = this.tmp;
    this.tmp = [];
    return num;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length==0?true:false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */