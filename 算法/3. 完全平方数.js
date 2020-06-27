/**
 * @param {number} n
 * @return {number} 
 * 
 *  广度优先遍历  超过时间限制：8935
 */
var numSquares = function (n) {
    let queue = [];
    let cur_n = n;
    let queue_n = [];

    let num = 0;
    let endRange = Math.floor(Math.sqrt(n));
    for (let i = endRange; i >= Math.floor(endRange/2); i--) {
        // if (n - i * i >= 0) {
            queue.push(i);
            queue_n.push(cur_n);
        // }
    }
    while (queue.length) {
        num++;
        let size = queue.length;
        while (size) {
            size--;
            // num++;
            let cur = queue.shift()
            let cur_n = queue_n.shift();
            if (cur*cur === cur_n) {
                return num;
            }
            endRange = Math.floor(Math.sqrt(cur_n - cur * cur));
            for (let i = endRange; i >= Math.floor(endRange/2); i--) {
                // if (cur_n - i * i >= 0) {
                    queue.push(i);
                    queue_n.push(cur_n - cur * cur);
                // }
            }
        }

    }

    return num;
};

starttime = new Date();
console.log(numSquares(8935));
endtime = new Date();
console.log("耗时："+(endtime-starttime));
