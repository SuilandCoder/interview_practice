/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 示例：
 * 输入：
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出：3
 * 
 * 解释：每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 * 要点：
 *  1. 引入感染函数，避免重复遍历；
 *  2. 引入向量矩阵，控制方向；const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
 * 
 * 注：本实现为BFS(广度优先遍历)；DFS请用递归；
 */

var arr = [["1","1","1"],["0","1","0"],["0","1","0"]];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid){
    let count = 0;
    let queue = [];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==="1"){
                count++;
                queue.push([i,j]);
                grid[i][j]=0;
                BFS(queue,grid);
            }
        }
    }
    return count;
} 

const BFS = function(queue,grid){
    const dist = [[0,1],[1,0],[0,-1],[-1,0]];
    while(queue.length>0){
        let point = queue.shift();
        for(const dir of dist){
            const x = point[0]+dir[0];
            const y = point[1]+dir[1];
            if(x<0||x>=grid.length||y<0||y>=grid[0].length||grid[x][y]!=="1"){
                continue;
            }
            grid[x][y]="0";
            queue.push([x,y])
        }
    }
}


console.log(numIslands(arr));