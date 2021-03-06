## B-树 与 B+树

### B-树

B-Tree，即B树，而**不要读成B减树**，它是一种多路搜索树（**并不是二叉的**）。B树这种数据结构常常用于实现数据库索引（MongoDB 文件索引方案），因为它的查找效率比较高。But why?

#### 二叉查找树

我们知道二叉查找树查询的时间复杂度是O（logN），查找速度最快和比较次数最少，既然性能已经如此优秀，但为什么实现索引是使用B-Tree而不是二叉查找树，关键因素是**磁盘IO的次数。**

数据库索引是存储在磁盘上，当表中的数据量比较大时，索引的大小也跟着增长，达到几个G甚至更多。当我们利用索引进行查询的时候，不可能把索引全部加载到内存中，只能逐一加载每个磁盘页，这里的磁盘页就对应索引树的节点。

如果利用二叉查找树作为索引结构，假设树高度是4，查找10：

![image-20210105225845569](https://cdn.jsdelivr.net/gh/SuilandCoder/PicStorage//img/image-20210105225845569.png)

从二叉树的查找过程来看，树的高度和磁盘IO的次数都是4，**所以最坏的情况下磁盘IO的次数由树的高度来决定。**

为了减少磁盘IO次数，就需要把“瘦高”的树结构变得“矮胖”，这就是B-树的特征之一！

#### 磁盘 IO 与 预读

磁盘读取依靠的是机械运动，分为寻道时间、旋转延迟、传输时间三个部分，这三个部分耗时相加就是一次磁盘IO的时间，大概9ms左右。这个成本是访问内存的十万倍左右；正是由于磁盘IO是非常昂贵的操作，所以计算机操作系统对此做了优化：预读；每一次IO时，不仅仅把当前磁盘地址的数据加载到内存，同时也把相邻数据也加载到内存缓冲区中。因为局部预读原理说明：当访问一个地址数据的时候，与其相邻的数据很快也会被访问到。每次磁盘IO读取的数据我们称之为一页（page）。一页的大小与操作系统有关，一般为4k或者8k。这也就意味着读取一页内数据的时候，实际上发生了一次磁盘IO。

一般来说，索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘I/O消耗，相对于内存存取，I/O存取的消耗要高几个数量级，所以**评价一个数据结构作为索引的优劣最重要的指标就是在查找过程中磁盘I/O操作次数的渐进复杂度**。

#### B-树特征与结构

为了描述B-Tree，首先定义一条记录为一个二元组[key, data] ，key为记录的键值，对应表中的主键值，data为一行记录中除主键外的数据。对于不同的记录，key值互不相同。

一棵m阶的B-Tree有如下特性： 

1. 根结点至少有两个子女；
2. 每个中间节点都包含k-1个元素和k个孩子，其中 m/2 <= k <= m；
3. 每一个叶子节点都包含k-1个元素，其中 m/2 <= k <= m；
4. 所有叶子节点都在同一层，且不包含其它关键字信息 ；
5. 每个节点中的元素从小到大排列，节点当中k-1个元素正好是k个孩子包含的元素的值域分划；
6. ki(i=1,…n)为键值，且键值升序排序;
7. Pi(i=1,…n)为指向子树根节点的指针。P(i-1)指向的子树的所有节点键值均小于ki，但都大于k(i-1)。

![image-20210105231011834](https://cdn.jsdelivr.net/gh/SuilandCoder/PicStorage//img/image-20210105231011834.png)

模拟查找关键字29的过程：

1. 根据根节点找到磁盘块1，读入内存。【磁盘I/O操作第1次】
2. 比较关键字29在区间（17,35），找到磁盘块1的指针P2。
3. 根据P2指针找到磁盘块3，读入内存。【磁盘I/O操作第2次】
4. 比较关键字29在区间（26,30），找到磁盘块3的指针P2。
5. 根据P2指针找到磁盘块8，读入内存。【磁盘I/O操作第3次】
6. 在磁盘块8中的关键字列表中找到关键字29。

分析上面过程，发现需要3次磁盘I/O操作，和3次内存查找操作。由于内存中的关键字是一个有序表结构，可以利用二分法查找提高效率。而3次磁盘I/O操作是影响整个B-Tree查找效率的决定因素。B-Tree相对于AVLTree缩减了节点个数，使每次磁盘I/O取到内存的数据都发挥了作用，从而提高了查询效率。

#### B-树问题

1. 每个节点中既要存索引信息，又要存其对应的数据，如果数据很大，那么当树的体量很大时，每次读到内存中的树的信息就会不太够。
2. B树遍历整个树的过程和二叉树本质上是一样的，B树相对二叉树虽然提高了磁盘IO性能，但并没有解决遍历元素效率低下的问题。

### B+树

1. 有k个子树的中间节点包含有k个元素（B树中是k-1个元素），每个元素不保存数据，只用来索引，所有数据都保存在叶子节点；
2. 所有的叶子结点中包含了全部元素的信息，及指向含这些元素记录的指针，且叶子结点本身依关键字的大小自小而大顺序链接；
3. 所有的中间节点元素都同时存在于子节点，在子节点元素中是最大（或最小）元素。

![image-20210106095251214](https://cdn.jsdelivr.net/gh/SuilandCoder/PicStorage//img/image-20210106095251214.png)

#### B+树优点

1. 单次请求涉及的磁盘IO次数少（出度d大，且非叶子节点不包含表数据，树的高度小，更加矮胖）；
2. 查询效率稳定（任何关键字的查询必须走从根结点到叶子结点，查询路径长度相同）；
3. 范围查询简便（从符合条件的某个叶子节点开始通过链表指针遍历即可），试试从上面两个图中模拟查询 5<=x<=15的过程。