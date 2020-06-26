/**
 *  打开转盘锁：
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 */


/**
 * @param {string[]} deadends 无效密码
 * @param {string} target   正确密码
 * @return {number}
 */
var openLock = function (deadends, target) {
    let closed = new Set(deadends);
    let start = "0000";
    if(closed.has(start)){
        return -1;
    }
    let queue = [start];
    closed.add(start);
    let step = 0;
    while(queue.length){ 
        let layerNodeNum = queue.length;
        while(layerNodeNum){
            layerNodeNum--;
            let cur = queue.shift();
            if(cur===target){
                return step;
            }
            let unlockPos = [0,1,2,3];
            unlockPos.forEach(item=>{
                let upRollCode = rollLock(cur,item,1);
                if(!closed.has(upRollCode)){
                    closed.add(upRollCode);
                    queue.push(upRollCode);
                }
                let downRollCode = rollLock(cur,item,-1);
                if(!closed.has(downRollCode)){
                    closed.add(downRollCode);
                    queue.push(downRollCode);
                }
            })
        }
        step++;
    }
    return -1;
};

/**
 * 
 * @param {tring} cur_code 当前密码状态值
 * @param {number} index 旋转的密码位置 0-3
 * @param {number} direction 旋转方向，1前进，-1后退
 */
const rollLock = function (cur_code, index, direction) {
    let codeArr = cur_code.split("");
    let char = parseInt(codeArr[index])+direction;
    if(char>9) char = "0";
    else if(char<0) char = "9";
    codeArr[index] = String(char);
    return codeArr.join("")
}

let step = openLock(["8887","8889","8878","8898","8788","8988","7888","9888"],"8888");
// let step = openLock(["0201","0101","0102","1212","2002"],"0202");
console.log(step);