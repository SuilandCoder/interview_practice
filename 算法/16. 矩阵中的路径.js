/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
 * 
 * [["a","b","c","e"],
    ["s","f","c","s"],
    ["a","d","e","e"]]
 * 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 * 
 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rowLen = board.length;
    let colLen = board[0].length;
    let visited={};
    for(let i=0;i<rowLen;i++){
        for(let j=0;j<colLen;j++){
            if(board[i][j]===word[0]){
               const isExist =  findPath(board,word,i,j,visited);
               if (isExist) return isExist;
            }
        }
    }
    return false;
};

var findPath = function(board,word,curRow,curCol,visited){
    if(word.length===0){
        return true;
    }
    let key = `${curRow}-${curCol}`;
    if(curRow>=board.length || curCol>=board[0].length || curRow<0 || curCol<0 || visited[key] || board[curRow][curCol]!==word[0]){
        return false;
    }
    visited[key] = true;
    word = word.slice(1);
    let flag = findPath(board,word,curRow,curCol-1,visited) ||
               findPath(board,word,curRow,curCol+1,visited) ||
               findPath(board,word,curRow-1,curCol,visited) ||
               findPath(board,word,curRow+1,curCol,visited);
    //* 回溯
    visited[key] = flag;
    return flag;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))