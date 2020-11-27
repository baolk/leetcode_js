# JavaScript的数据结构和算法


- <a href='#item1'>Javascript数据结构与算法笔记</a>
- <a href='#item1'>leetcode的Javascript实现</a>



## <a id='item1'>Javascript数据结构与算法</a>

---

## 一、数组

1. JS的数组就是API的调用，功能较丰富

## 二、栈

1. 数组是一种线性结构，可以在任意位置插入和删除数据

2. 栈和队列是受限的线性结构，后进先出或先进先出

3. 栈（stack），是一种受限的线性表，后进先出（LIFO）

   - 插入新元素，称为进栈
   - 删除元素，成为出栈

4. 程序中的栈实现：

   - 递归

   - 函数调用栈：函数之间的相互调用，A调用了B，B调用了C，C又调用了D，栈会把A、B、C、D依次压入栈，然后按相反的顺序弹出栈

5. 栈结构有两种常见的方式：

   - 基于数组实现
   - 基于链表实现

6. 基于数组的栈结构![截屏2020-11-17 下午8.49.10](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

   ```javascript
   //封装栈类
   function Stack(){
     //栈中的属性
     this.items = [];
     //栈的相关操作
     //1.压栈
     Stack.prototype.push = function(element){
       this.items.push(element);
     }
     //2.出栈
     Stack.prototype.pop = function(){
    return this.items.pop();
     }
     //3.查看栈顶元素，栈不变
     Stack.prototype.peek = function(){
       return this.items[this.items.length-1];
     }
     //4.判断栈是否为空
     Stack.prototype.isEmpty = function(){
       return this.items.length === 0;
     }
     //5.获取栈中的元素长度
     Stack.prototype.size = function(){
       return this.items.length;
     }
     //6.toString()
     Stack.prototype.toString = function(){
       var resultString = '';
       this.items.forEach(v=>{
       	resultString += v + " ";
       })
     }
   }
   ```

7. 十进制转二进制

   ```javascript
   function dec2bin(decNumber){
     //定义一个栈对象
     var stack = new Stack();
     
     while(decNumber > 0){
       stack.push(decNumber % 2);
       decNumber = Math.floor(decNumber/2);
     }
     
     var binaryResult = '';
     while(!stack.isEmpty()){
       binaryResult += stack.pop();
     }
     
     return binaryResult;
   }
   ```

## 三、队列

1. 队列（Queue），也是一种受限的线性结构，先进先出（FIFO）

2. 受限之处在于它只允许在表的前端进行删除，在表的后端进行插入操作

3. 队列结构有两种常见的方式：

   - 基于数组实现
   - 基于链表实现

4. 基于数组的队列结构![截屏2020-11-17 下午9.31.23](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

   ```javascript
   //封装队列类
   function Queue(){
     //队列属性
     this.items = [];
     
     //队列方法
     //1.向队尾添加元素
     Queue.prototype.enqueue = function (element){
       this.items.push(element);
     }
     //2.向队首移除元素
     Queue.prototype.dequeue = function (){
       this.items.shift(element);
     }
     //3.查看队首的元素，队列不变
     Queue.prototype.front = function (){
       return this.items[0]
     }
     //4.查看队列是否为空
     Queue.prototype.isEmpty = function (){
       return this.items.length === 0;
     }
     //5.查看元素的个数
     Queue.prototype.size = function (){
       return this.items.length
     }
     //6.toString()方法
     Queue.prototype.toString = function (){
       var resultString = '';
       this.items.forEach(v=>{
       	resultString += v + " ";
       })
       return resultString;
     }
   }
   ```

5. 击鼓传花

   ```javascript
   //一群人围成一圈，数到某个数字的人自动淘汰
   function passGame(nameList,num){
     //将个人加入到队列
     var queue = new Queue();
     nameList.forEach(v=>{
       queue.enqueue(v);
     });
     
     while(queue.size()>1){
     	//开始数数字，当不是num时，把该数字添加到队列末尾
       for(var i=0;i<num-1;i++){
         queue.enqueue(queue.dequeue());
       }
       //是num时，将其从队列中删除
       queue.dequeue();
     }
     
     //获取最后那个人
     var endName = queue.front();
     return nameList.indexOf(endName);
   }
   ```

6. 数组实现的优先级队列

   - 优先级队列在插入一个元素时会考虑数据的优先级，比较完成后得出元素的正确位置

   - 封装优先级队列

     ```javascript
     function PriorityQueue(){
       //创建了一个内部类
       function QueueElement(element,priority){
         this.element = element;
         this.priority = priority;
       }
       //优先级队列属性
       this.items = [];
       
       //实现插入方法
       PriorityQueue.prototype.enqueue = function(element,priority){
         var queueElement = new QueueElement(element,priority);
         //判断队列是否为空
         if(this.items.length === 0){
           this.items.push(queueElement);
         }else{
           this.items.forEach((v,i)=>{
             if(queueElement.priority < v){
               this.items.splice(i,0,queueElement);
             }else{
                this.items.push(queueElement);
             }
           })
         }
       }
       //其他方法与普通队列一致
     }
     ```

## 四、链表

1. 链表也是一种常见的存储数据的线性结构

2. 数组的缺点：

   - 数组的创建需要申请一段连续的内存空间，大小是固定的，当容量需求不满足时需要扩容
   - 在数组开头或中间位置插入数据的成本很高，需要大量元素的位移

3. 链表的优势：

   - 链表的元素在内存中不必是连续的空间，实现灵活的内存动态管理
   - 链表的元素由一个存储元素本身的节点和一个指向下一个元素的引用（指针）
   - 链表不必在创建时确定大小，可以无限延伸下去
   - 链表在插入和删除数据时，时间复杂度达到O(1)，效率较高

4. 链表的缺点

   - 链表想访问任何一个位置的元素时，都需要从头开始访问
   - 无法通过下标直接访问元素，需要从头一个个访问，直到找到对应的元素

5. 封装链表类![截屏2020-11-17 下午10.54.02](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

   ```javascript
   //封装链表类
   function LinkedList(){
     //内部的类：节点类
     function Node(data){
       this.data = data;
       this.next = null;
     }
     
     //链表类属性
     this.head = null;
     this.length = 0;
     
     //1.列表末尾添加新的元素 append()
     LinkedList.prototype.append = function(data){
       var newNode = new Node(data);
       //判断是否是第一个节点
       if(this.length === 0){
         this.head = newNode;
       }else{
         //不是第一个节点
         var current = this.head;
         while(current.next === null){
           current = current.next;
         }
         current.next = newNode;
       }
       this.length += 1;
     }
     
     //2.在任意位置添加元素 insert()
     LinkedList.prototype.insert = function(position,data){
       //对position进行越界判断
       if(position < 0 || position > this.length) return false;
       
       var newNode = new Node(data);
       //插入位置是第一个
       if(position === 0 ){
         newNode.next = this.head;
         this.head = newNode;
       }else{
         var index = 0;
         var current = this.head;
         var previous = null;
         while (index++ < position){
           previous = current;
           current = current.next;
         }
         newNode.next = current;
         previous.next = newNode;
       }
       this.length += 1;
       return true;
     }
     
     //3.获取某个位置的元素 get()
     LinkList.prototype.get = function(){
       //越界判断
       if(position < 0 || position >= this.length) return null;
       
       //获取对应的数据
       var current = this.head;
       var index = 0;
       while(index++ < position){
         current = current.next;
       }
       return current.data;
     }
     
     //4.返回元素的索引 indexOf()
     LinkedList.prototype.indexOf = function(data){
       var current = this.head;
       var index = 0;
       
       while(current){
         if(current.data === data){
           return index;
         }
         current = current.next;
         index ++;
       }
       return -1;
     }
     
     //5.修改某个未知的元素 update()
     LinkedList.prototype.update = function(position,newData){
        //越界判断
       if(position < 0 || position >= this.length) return false;
       
       var current = this.head;
       var index = 0 ;
       while(index++ < position){
         current = current.next;
       }
       current.data = newDate;
       return true;
     }
     
     //6.移除特定位置的元素 removeAt()
     LinkedList.prototype.removeAt = function(){
        //越界判断
       if(position < 0 || position >= this.length) return null;
       
       var current = this.head;
       var previous = null;
       if(position === 0){
         this.head = this.head.next;
       }else{
         var index = 0
         while(index++ < position){
           previous = current;
           current = current.next;
         }
         previous = current.next;
       }
       this.length - 1;
       return current.data;
     }
     
     //7.移除特定元素 remove()
     LinkedList.prototype.remove = function(data){
        var position = this.indexOf(data);
        return this.removeAt(position);
     }
     
     //8.isEmpty()
     LinkedList.prototype.isEmpty = function(){
       return this.length === 0 ;
     }
     
     //9.size()
     LinkedList.prototype.size = function(){
       return this.length ;
     }
     
     //10.toString()
     LinkedList.prototype.toString = function(){
       var current = this.head;
       var listString = '';
       while(current){
         listString += current.data + " ";
         current = current.next;
       }
       return listString;
     }
   }
   ```

6. 双向链表

   1. 单向链表只能从从遍历到尾，缺点是可以轻松到达下一个节点，但是很难回到上一个节点

   2. 双向链表可以从头遍历到尾，也可以从尾遍历到头，一个节点既有向前的引用，也有向后的引用

   3. 双向链表结构![截屏2020-11-18 上午10.44.24](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

   4. 封装双向链表

      ![截屏2020-11-18 上午10.50.05](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

      ```javascript
      function DoubleLinkedList(){
        //内部类：节点类
        function Node(data){
          this.data = data;
          this.pre =  null;
          this.next = null;
        }
        //属性
        this.head = null;
        this.tail = null;
        this.length = 0 ;
        
        //1.append()
        DoubleLinkedList.prototype.append = function(data){
          var newNode = new Node(data);
          
          if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
          }else{
            newNode.pre = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
          }
          this.length += 1;
        }
        
        //2.insert()
        DoubleLinkedList.prototype.insert = function(position，data){
          //越界判断
          if(position < 0 || position > this.lengh) return false;
          //创建新节点
          var newNode = new Node(data);
          //定位
          //判断链表是否为空
          if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
          }else{
            if(position === 0){
              this.head.pre = newNode;
              newNode.next = this.head;
              this.head = newNode;
            }else if(position = this.length){
              newNode.pre = this.tail;
              this.tail.next = newNode;
              this.tail = newNode;
            }else{
              var current = this.head;
              var index = 0
              while(index++ < position){
                current = current.next;
              }
              newNode.next = current;
              newNode.pre = current.pre;
              current.pre.next = newNode;
              current.pre = newNode;
            }
          }
          this.length += 1;
          return true;
        }
        
        //3.get()
        DoubleLinkedList.prototype.get = function(position){
        	if(position < 0 || position >=this.length) return false;
          var current = this.head;
          var index = 0;
          while(index++ < position){
            current = current.next;
          }
          return current.data;
        }
        
         //4.indexOf()
        DoubleLinkedList.prototype.indexOf = function(data){
          var current = this.head;
          var index = 0;
          while(current){
            if(current.data === data){
              return index;
            }else{
              current = current.next;
              index++;
            }
          }
          return -1;
        }
        
        //5.update()
        DoubleLinkedList.prototype.update = function(position){
        	if(position < 0 || position >=this.length) return false;
          var current = this.head;
          var index = 0;
          while(index++ < position){
            current = current.next;
          }
          current.data = data;
        }
        
        //6.removeAt()
        DoubleLinkedList.prototype.removeAt= function(position){
        	if(position < 0 || position >=this.length) return null;
          
          var current = this.head;
          var index = 0 ;
          if(this.length === 1){
            this.head = null;
            this.tail = null;
          }else{
            if(position === 0){
              this.head.next = null;
              this.head = this.head.next;
            }else if(position === this.length-1){
              current = this.tail;
              this.tail.pre.next = null;
              this.tail = this.tail.pre;
            }else{
              while(index++ < position){
                current = current.next;
              }
              current.pre.next = current.next;
              current.next.pre = current.pre;
            }
        	}
          this.length -= 1;
          return current.data
        }
        
        //7.remove()
        DoubleLinkedList.prototype.remove = function(){
        	var index = this.indexOf(data);
          return this.removeAt(index);
        }
        
        //8.isEmpty()
        DoubleLinkedList.prototype.ieEmpty = function(){
          return this.length === 0 ;
        }
        
        //9.size()
         DoubleLinkedList.prototype.size = function(){
          return this.length;
        }
        
        //10.获取链表第一个元素
         DoubleLinkedList.prototype.getHead = function(){
          return this.head.data;
        }
        
        //11.获取链表最后一个元素
         DoubleLinkedList.prototype.getTail = function(){
          return this.tail.data;
        }
        
        //12.toString()
        DoubleLinkedList.prototype.toString = function(){
          return this.backwardString();
        }
        
        //13.toString()
        DoubleLinkedList.prototype.toString = function(){
          return this.backwardString();
        }
        
        //14.forwardString()
        DoubleLinkedList.prototype.forwardString = function(){
          var current = this.tail;
          var resultString = null;
          while(current){
            resultString += current.data + " ";
            current = current.pre
          }
          return resultString;
        }
        //15.backwardString()
        DoubleLinkedList.prototype.backwardString = function(){
        	var current = this.head;
          var resultString = '';
          while(current){
            resultString += current.data + " ";
            current =current.next;
          }
          return resultString;
        }
      }
      ```

## 五、集合

1. 集合常见的实现方式是哈希表

2. 集合通常是一组无序的，不能重复的元素

3. 集合的特殊之处在于里面的元素没有顺序，不能重复；即不能通过下标值来访问，相同的对象在集合中只会存在一份

4. ES6已经有Set类

5. 封装集合![截屏2020-11-18 下午4.48.46](https://gitee.com/baolk/typora_images/raw/master/img/20201127135251.png)

   ```javascript
   function Set(){
     //集合属性
     this.items = {}
    
     //集合方法
     //1.add()
     Set.prototype.add = function(value){
       //判断当前集合中是否已经包含该元素
       if(this.has(value)) return false;
       this.items[value] = value;
       return true;
     }
     
     //2.has()
     Set.prototype.has = function(value){
   		return this.items.hasOwnProperty(value);
     }
     
     //3.remove()
     Set.prototype.remove = function(value){
     	//判断当前集合中是否已经包含该元素
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
     }
     
     //4.clear()
     Set.prototype.clear = function(v){
   		this.items = {};
     }
     
     //5.size()
     Set.prototype.clear = function(v){
   		return Object.keys(this.items).length;
     }
     
     //6.value()
     Set.prototype.values = function(v){
   		return Object.keys(this.items);
     }
     
     
     //集合间的操作
     //1.并集
     Set.prototype.union = function(otherSet){
       var unionSet = new Set();
       var values = this.values();
       //取出A集合的元素
       for(var i=0;i<values.length;i++){
         unionSet.add(values[i]);
       }
       //取出B集合的元素
       values = otherSet.values();
       for(var i=0;i<values.length;i++){
         unionSet.add(values[i]);
       }
       return unionSet;    
     }
     
     //2.交集
     Set.prototype.intersection = function(otherSet){
     	var intersectionSet = new Set();
       
       //判断元素是否同时存在于A和B中
       var values = this.values();
       for(var i = 0;i<values.length;i++){
         var item = values[i];
         if(otehrSet.has(item)){
           intersectionSet.add(item);
         }
       }
       return intersectionSet;
     }
     
     //3.差集
     Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i =0;i<values.length;i++){
         var item = values[i];
         if(!otherSet.has(item)){
           differenceSet.add(item)
         }
       }
       return differenceSet;
     }
     
     //3.子集
     Set.prototype.subSet = function(otherSet){
     	var values = this.values();
       for(var i =0 ;i<values.length;i++){
         var item = values[i];
         if(!otherSet.has(item)){
           return false;
         }
       }
       return true;
   }
   ```

## 六、字典

1. ES6中增加了字典类型
2. 字典的特点就是对应关系，字典中的key是不可以重复的，而value是可以重复的，并且字典中的key是无序的
3. 字典与映射的关系
   - 有些编程语言将映射关系称为字典（python）
   - 有些编程语言将映射关系称为Map（Java）
4. 字典与对象的关系
   - 很多语言（Java）中对字典和对象区分明显，对象是不可以动态添加或删除属性，而字典类似于哈希表可以动态添加数据结构
   - 在JavaScript中，对象本身就是一种字典，几乎完全可以用对象去代替

## 七、哈希表

1. 哈希表基于数组实现的，但是相对数组有很多优势：

   - 提供快速的插入-删除-查找操作
   - 插入和删除的时间接近O(1)的时间级
   - 哈希表的速度比树还要快，基本可以瞬间找到想要的元素
   - 哈希表相对于树来说编码要容易

2. 哈希表对于数组的一些不足：

   - 哈希表中的数据是无序的，所以不能以某种方式来遍历的元素
   - 哈希表中key是不允许重复的

3. 哈希表的一些概念

   - 哈希化：将大数字转化成数组范围内下标的过程
   - 哈希函数：通常我们会将单词转成大数字，大数字在进行哈希化的代码实现放在一个函数里
   - 哈希表：最终将数据插入到的这个数组，对整个结构的封装，称为哈希表
   - 哈希冲突：通过哈希函数得到的下标值发生重复，有两种方法解决（链地址法、开放地址法）

4. 链地址法（拉链法）

   ![截屏2020-11-19 下午9.47.07](https://gitee.com/baolk/typora_images/raw/master/img/Js数据结构和算法_哈希表链地址法.png)

   - 链地址解决冲突的办法是每个数组单位不仔存储单个数据，而是一个链条
   - 链条的数据结构可以是数组或者链表

5. 开放地址法

   - 主要工作方式是寻找空白的单元格来添加重复的数据

   - 探索新的位置有三种方法：

     - 线性探测

       ![截屏2020-11-19 下午10.15.47](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_线性探测1.png)

       ![截屏2020-11-19 下午10.11.07](https://gitee.com/baolk/typora_images/raw/master/img/Js数据结构和算法_线性探测2.png)

     - 二次探测

       ![截屏2020-11-19 下午10.24.58](https://gitee.com/baolk/typora_images/raw/master/img/20201119222500.png)

     - 再哈希法

       ![截屏2020-11-19 下午10.27.22](https://gitee.com/baolk/typora_images/raw/master/img/20201119222724.png)

     - 哈希化效率对比

       - 链地址法比开放地址法的效率要好一点
       - 在真实开发中，使用链地址法较多

6. 优秀的哈希函数

   - 快速的计算：减少乘除
     - 霍纳法则：可以减少乘的次数，减少时间复杂度
   - 均匀的分布：减少重复
     - 在使用常量的地方，尽量使用**质数**，比如在哈希表的长度、N次幂的底数、再哈希法中的常量

7. 哈希函数的实现

   ```javascript
   //将字符串转成比较大的数字：hashCode
   //将比较大的数字hashCode压缩到数组范围(大小)之内
   function hashFunc(str,size){
     var hashCode = 0;
     //霍纳法则
     for(var i = 0 ;i<str.length;i++){
       hashCode = 37*hashCode+str.charCodeAt(i)  //获取unicode编码
     }
     //取余
     var index = hashCode % size;
     return index;
   }
   ```

8. 创建哈希表

   ```javascript
   //封装哈希表类
   function HashTable(){
     //哈希表属性
     this.storage = [];
     this.count = 0;   //计算装载因子，通过装载因子来进行减容或者扩容
     this.limit = 7   //数组的大小
     
     //哈希表方法
     //1.哈希函数
     HashTable.prototype.hashFunc = function (str,size){
       var hashCode = 0;
       //霍纳法则
       for(var i = 0 ;i<str.length;i++){
         hashCode = 37*hashCode+str.charCodeAt(i)  //获取unicode编码
       }
       //取余
       var index = hashCode % size;
       return index;
   	}
     
     //2.插入和修改数据
     HashTable.prototype.put = function (key,value){
     	var index = this.hashFunc(key,this.limit){
         var bucket = this.storage[index];
         if(bucket === null){
           bucket = [];
           this.storage[index] = bucket;
         }
         //修改数据
         for (var i =0;i<bucket.length;i++){
         	var tuple = bucket[i];
           if(tuple[0] == key){
             tuple[1] == value
             return
           }
         }
         //添加数据
         bucket.push([key,value]);
         this.count += 1;
         
        //判断是否需要扩容操作
         if(this.count > this.limit * 0.75){
           var newSize = this.limit * 2;
           var newPrice = this.getPrime(newSize);//获得质数
           this.resize(newPrice);
         }
       }
       
       //查询元素
       HashTable.prototype.get = function (key){
       	var index = this.hashFunc(key,this.limit);
         var bucket = this.storage[index];
         
         if(bucket === null){
           return null;
         }
         
         for(var i =0 ;i<bucket.length;i++){
           var tuple = bucket[i];
           if(tuple[0]==key){
             return tuple[1];
           }
         }
         return null;
       }
       
       //删除元素
       HashTable.prototype.remove = function (key){
         var index = this.hashFunc(key,this.limit);
         var bucket = this.storage[index];
         if(bucket === null)return null;
         for(var i =0 ;i<bucket.length;i++){
           var tuple = bucket[i];
           if(tuple[0] === key){
             bucket.splice(i,1);
             this.count--;
             return tuple[1];
             
             //缩小容量
             if(this.limit > 7 && this.count < this.limit * 0.25){
                 var newSize = Math.float(this.limit/2);
                 var newPrice = this.getPrime(newSize);//获得质数
               	this.resize(newPrice);
             }
           }
         }
         return null;
       }
       
       //判断哈希表是否为空
       HashTable.prototype.isEmpty = function(){
         return this.count === 0;
       }
       
       //获取哈希表元素的个数
       HashTable.prototype.size = function(){
         return this.count;
       }
       
     }
   
   ```

9. 哈希表的扩容

   - 随着数据量的增多，效率会越来越低，所以需要扩容

   - 扩容必须同时调用哈希函数来获取不同的位置

   - 一般在loadFactor>0.75时进行扩容

   - 扩容的实现

     ```javascript
     //哈希表的扩容&减容
     HashTable.prototype.resize = function(newLimit){
       //保存旧的数组内容
       var oldStorage = this.storage;
       //重置所有的属性
       this.storage = [];
       this.count = 0;
       this.limit = newLimit;
       //遍历oldStorage中所有的bucket
       
       for(var i =0;i<oldStorage.length;i++){
         var bucket = oldStorage[i];
         if(bucket === null){
           continue;
         }
         for(var j =0;j<bucket.length;j++){
         	var tuple = bucket[j];
           this.put(tuple[0],tuple[1])
       }
     }
     ```

   - 扩容时实现容量恒为质数

     ```javascript
     HashTable.prototype.isPrime = function(num){
       var temp = parseInt(Math.sqrt(num));
       for(var i =2;i<=temp;i++){
         if(num % i == 0){
           return false;
         }
         return true;
       }
     }
     
     //获取质数的方法
     HashTable.prototype.getPrime = function(num){
       while(this.isPrime(num)){
         num++;
       }
       return num;
     }
     ```

## 八、树结构

1. 树结构是一种非线性结构，可以表示一对多的关系

2. 树结构的术语

   - 空树：n=0

   - 非空树：n>0

     - 树中有一个根节点（Root），用r表示
     - 其余节点可以分为m个互不相交的有限集T1……Tm，每个集合本身又是一棵树，称为原来树的子树

   - 其他术语

     ![截屏2020-11-21 下午11.14.41](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构_树的术语.png)

3. 树结构的表示

   - 儿子-兄弟表示法

   ![截屏2020-11-21 下午11.26.47](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_儿子兄弟表示法.png)

   - 儿子-兄弟表示法旋转
   - 所有的树本质上都可以用二叉树模拟![截屏2020-11-21 下午11.29.02](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_儿子兄弟表示法旋转.png)

4. 二叉树

   - 树中每个节点最多只有两个子节点

   - 二叉树的5种形态

     ![截屏2020-11-21 下午11.32.05](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_二叉树的形态.png)

   - 二叉树的特性

     ![截屏2020-11-22 上午10.31.38](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_二叉树的特性.png)

   - 完美二叉树（满二叉树）

     除了最下一层的叶节点外，每层节点都有2个子节点

   - 完全二叉树

     除了最下一层的叶节点外，其他层节点数达到了最大个数，且从左往右叶节点连续存在，只缺右侧若干节点

5. 二叉树的表现方式

   - 二叉树的存储常见的方式是数组和链表

   - 数组对于完全二叉树是适用的，但是对于非完全二叉树会造成空间的极大浪费

   - 二叉树最常见的还是使用链表存储

     ![截屏2020-11-22 上午10.42.26](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_二叉树链表存储.png)

6. 二叉搜索树BST（二叉排序树或二叉查找树）

   - 可以为空树

   - 不为空树时

     - 非空左子树的所有键值小于其根节点的键值
     - 非空右子树的所有键值大于其根节点的键值
     - 左、右子树本身也都是二叉搜索树

   - 二叉搜索树的特点

     - 相对较小的值总是保存在左节点上，相对较大值保存在右节点上
     - 利用这个特点使得查询效率非常高

   - 二叉搜索树的封装![截屏2020-11-22 上午11.02.22](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_二叉搜索树的方法.png)

     ```javascript
     function BinarySearchTree(){
       
       function Node(key){
         this.key = key;
         this.left = null;
         this.right = null;
       }
       
       //二叉搜索树属性
       this.root = null;
       
       ///////////二叉搜索树方法/////////
       BinarySearchTree.prototype.insert = function(key){
         var newNode = new Node(key);
         //判断根节点是否有值
         if(this.root === null){
         	this.root =newNode;
         }else{
           this.insertNode(this.root,newNode);
         }
       }
       //插入的递归函数
       BinarySearchTree.prototype.insertNode = function(node,newNode){
       	//向左查找
         if(newNode.key < node.key){  
         	if(node.left === null){
             node.left = newNode;
           }else{
             this.insertNode(node.left,newNode);
           }
         }else{  //向右查找
         	if(node.right === null){
             node.right = newNode;
           }else{
             this.insertNode(node.right,newNode);
           }
         }  
       }
       
       
       //////////先序遍历///////////
       //访问根节点；先序遍历左子树；先序遍历右子树
       BinarySearchTree.prototype.preOrderTraversal = function(handler){
       	this.preOrderTraversalNode(this.root,handler);  
       }
       //先序遍历的递归函数
      BinarySearchTree.prototype.preOrderTraversalNode = function(node，handler){
         if(node !== null){
           //打印当前经过的节点
         	handler(node.key)  
           //遍历所有的左子树
           this.preOrderTraversalNode(node.left,handler); 
           //遍历所有的右子树
           this.preOrderTraversalNode(node.right,handler); 
         }
       }
       
       //////////中序遍历//////////
       //中序遍历左子树；访问根节点；中序遍历右子树
       BinarySearchTree.prototype.preOrderTraversal = function(handler){
       	this.preOrderTraversalNode(this.root,handler);  
       }
       //中序遍历的递归函数
      BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler){
         if(node !== null){
           //遍历所有的左子树
           this.preOrderTraversalNode(node.left,handler); 
           //打印当前经过的节点
         	handler(node.key);
           //遍历所有的右子树
           this.preOrderTraversalNode(node.right,handler); 
         }
       }
       
       //////////后序遍历//////////
       //后序遍历左子树；后序遍历右子树；访问根节点
       BinarySearchTree.prototype.preOrderTraversal = function(handler){
       	this.preOrderTraversalNode(this.root,handler);  
       }
       //后序遍历的递归函数
      BinarySearchTree.prototype.preOrderTraversalNode = function(node){
         if(node !== null){
           //遍历所有的左子树
           this.preOrderTraversalNode(node.left,handler); 
           //遍历所有的右子树
           this.preOrderTraversalNode(node.right,handler); 
           //打印当前经过的节点
         	handler(node.key)  
         }
       }
       
       ///////////最小值///////////
       BinarySearchTree.prototype.min = function(){
         var node = this.root;
         while(node.left !== null){
           node = node.left;
         }
         return node.key
       }
       ///////////最大值//////////
       BinarySearchTree.prototype.max = function(){
         var node = this.root;
         while(node.right !== null){
           node = node.right;
         }
         return node.key
       }
       
       /////////////搜索特定的值///////////
       BinarySearchTree.prototype.search = function(){
         return this.searchNode(this.root,key);
       }
       //搜索的递归
       BinarySearchTree.prototype.searchNode = function(node,key){
       	if(node === null) return false;
         if(node.key>key){
           return this.searchNode(node.left,key);
         }else if(node.key<key){
           return this.searchNode(node.right,key);
         }else{
           return true;
         }
       }
     }
     ```

   - 二叉树的删除（较复杂）

     - 删除的节点有两个子节点时

       ![截屏2020-11-22 下午4.43.34](https://gitee.com/baolk/typora_images/raw/master/img/20201122164338.png)

     ```javascript
     ////////////////删除节点///////////////
     BinarySearchTree.prototype.remove = function(key){
       var current = this.root;  //要删除的节点
       var parent = null;   //要删除节点的父节点
       var isLeftChild = true;   //要删除节点是否是左节点
     
       while(current.key !== key){
         parent = current;
         if(key<current.key){
           isLeftChild = true;
           current = current.left;
         }else{
           isLeftChild = false;
           current = current.right;
         }
         //找到最后节点 依然没找到
         if(curent === null) return false;
       }
       /////////////1.删除节点是叶子节点/////////////
       if(current.left===null&&current.right===null){
         if(current === this.root){
           this.root = null;
         }else if(isLeftChild){
           parent.left = null;
         }else{
           parent.right = null;
         }
       }
       ////////////2.删除的节点有一个子节点/////////////
       else if(current.right === null){
         if(current == this.root){
           this.root = current.left;  
         }else if(isLeftChild){
           parent.left = current.left;
         }else{
           parent.right = current.left;
         }
       }else if(current.left === null){
         if(current == this.root){
           this.root = current.right;  
         }else if(isLeftChild){
           parent.left = current.right;
         }else{
           parent.right = current.right;
         }
       }
       /////////////3.删除的节点有两个子节点/////////////
       //这种情况需要从下面的子节点中找到一个节点，来替换当前节点
       else{
       	var successor = this.getSuccssor(current);
         if(current == this.root){
           this.root = successor;  
         }else if(isLeftChild){
           parent.left = successor;
         }else{
           parent.right = successor;
         }
         successor.left = current.left;
       }
       
       //找后继的方法
       BinarySearchTree.prototype.getSuccssor = function(delNode){
         var successor = delNode;
         var current delNode.right;
         var successorParent = delNode;
         while(current !== null){
           successorParent = successor;
           successor = current;
           current =current.left;
         }
         //判断寻找到的后继节点是否直接是删除节点的right节点
         if(successor != delNode.right){
           successorParent.left = successor.right;
           successor.right = delNode.right;
         }
         return successor;
       }
     }
     ```

   - 二叉搜索树的缺陷

     - 当插入有序数据时，分布不均匀，会产生不平衡 
     - 对于一棵平衡二叉树，查找效率为O(logN)
     - 对于一棵非平衡二叉树，查找效率变成了O(n)

   - 常见的平衡树

     - AVL树：每个节点多储存一个额外的数据，但是整体效率不如红黑树
     - 红黑树：应用较多

7. 红黑树

   - 红黑树的规则

     ![截屏2020-11-22 下午6.08.51](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_红黑树.png)

     - 性质1：节点是红色或黑色
     - 性质2：根节点是黑色
     - 性质3：每个叶子节点都是黑色的空节点（NIL节点）
     - 性质4：每个红色节点的两个子节点都是黑色（从每个叶子到根的所有路径不能有两个连续的红色节点，但可以有两个黑色的）
     - 性质5：从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点

   - 红黑树的相对平衡

     - 以上特性确保了从根到叶子的最长可能路径不会超过最短可能路径的两倍长
     - 结果就是这个树基本是平衡的，虽然没有绝对平衡，但是依然是高效的
     - 为什么可以做到**最长路径不超过最短路径的两倍**？
       - 性质4决定了路径不能有两个相连的红色节点
       - 最短路径可能都是黑色节点
       - 最长路径是红色和黑色的交替
       - 性质5决定了所有路径都有相同数目的黑色节点
       - 所以最长路径不可能比最短路径多2倍以上

   - 红黑树的变换

     - 插入一个新节点时，有可能树不再平衡

     - 插入新的节点通常是红色节点，因为红色节点有可能插入而不违反红黑树的任何规则，插入黑色节点则会导致多了黑色节点

     - 插入红色节点可能产生红红相连，需要通过颜色调整和旋转来调整

     - 可以通过三种当时进行变换：

       - 变色：将黑色变为红色，将红色变为黑色

       - 左旋转、右旋转（子树不会影响旋转）

         ![截屏2020-11-22 下午7.17.01](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_红黑树旋转.png)

   - 红黑树的插入操作：有五种情况

   - 前提：N（新插入节点） P （新插入节点父节点）G（新插入节点的祖父节点） U（新插入节点的叔叔）

     - 情况一： 新节点位于树的根上，没有父节点

       - 这种情况直接把红色变成黑色

     - 情况二：新节点父节点P是黑色

       - 这种情况给新节点添加两个黑色的叶子结点nil

     - 情况三：P为红色，U也是红色

       ![截屏2020-11-24 下午9.49.19](https://gitee.com/baolk/typora_images/raw/master/img/20201124214921.png)

       - （父红叔红祖黑）--->（父黑叔黑祖红）
       - 但是如果G的父节点也可能是红色，就需要递归调整颜色，如果递归到了根节点就需要旋转了

     - 情况四：P为红色，U是黑色，N是左孩子

       ![截屏2020-11-24 下午9.58.01](https://gitee.com/baolk/typora_images/raw/master/img/20201124215803.png)

       - （父红叔黑祖黑，N是左儿子）--->（父黑叔黑祖红，右旋转）

     - 情况五：P为红色，U是黑色，N是右孩子

       ![截屏2020-11-24 下午9.59.47](https://gitee.com/baolk/typora_images/raw/master/img/20201124215950.png)

       - 父红叔黑祖黑，N是右儿子
       - 以P为根进行左旋转，把自己变成黑色，祖父变成红色
       - 以祖为根，进行右旋转

## 九、图论

1. 图论是一个非常大的话题

2. 图论是数学的一个分支，研究事物之间的关系，顶点表示事物，边表示两个食物的关系

- 图有一组顶点和一组边，可以是有向的，也可以是无向的

- 图的术语

  - 顶点：图中的一个节点
  - 边：顶点和顶点的连线
  - 相邻节点：由一条边连接的节点
  - 度：是一个顶点的相邻节点的数量
  - 简单路径：要求不包含重复的顶点
  - 回路：第一个顶点和最后一个顶点相同的路径称为回路
  - 无向图：边是有方向的
  - 有向图：边是无方向的
  - 无权图：边没有携带权重
  - 带权图：边有一定的权重

- 图的表示法：

  - 邻接矩阵：二维数组

  - 邻接表：顶点与相邻顶点列表组成，用数组/链表和字典都可以

- 图结构的封装

  ```javascript
  //用邻接表封装
  function Graph(){
    //属性
    this.vertexes = [];  //顶点
    this.edges = new Dictionay(); //边
    //方法
    //1.添加顶点
    Graph.prototype.addVertex = function(v){
      this.vertexes.push(v);
      this.edges.set(v,[]);
    }
    //2.添加边
    Graph.prototype.addEdge = function(v1,v2){
      this.edges.get(v1).push(v2);
      this.edges.get(v2).push(v1)
    }
    
    //3.toString方法
    Graph.prototype.toString = function(){
      var resultString = "";
      for(var i = 0; i<this.vertexes.length;i++){
        resultSring += this.vertexes[i] + "->"
        var vEdges = this.edges.get(this.vertexes[i]);
        for(var j = 0;j<vEdges.length;j++){
          resultString += vEdges[j] + ''
        }
        return resultString;
      }
    }
  }
  ```

- 图的遍历

  - 广度优先搜索BFS
    - 基于队列，入队列的顶点先被探索
  - 深度优先搜索DFS
    - 基于栈或使用递归，通过将顶点存入到栈中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问

  ```javascript
  //初始化各个节点的颜色
  Graph.prototype.initializeColor = function(){
    var colors = [];
    for(var i =0li<this.vertexes.length;i++){
      colors[this.vertexes[i]] = 'white';
    }
    return colors;
  }
  
  //广度优先算法BFS
  Graph.prototype.bfs = function(initV,handler){
    var color = this.initializeColor();
    
    var queue = new Queue();
    //将顶点加入到队列中
    queue.enqueue(initV);
    
    while(!queue.isEmpty()){
      var v = queue.dequeue();
      colors[v] = 'gray';  //灰色表示正在被探测
      var vList = this.edges.get(v);
      for(var i =0 ;i<vList.length;i++){
        var e = vList[i];
        if(colors[e] == 'white'){
          colors[e] = 'gray';
          queue.enqueue(e);
        }
      }
      handler(v);
      color[v] ='black';
    }
  }
  
  //深度优先搜索（DFS)
  //与二叉树的先序遍历类似
  Graph.prototype.dfs = function(initV,handler){
  	//初始化颜色
    var colors = this.initalizeColor();
    //调用递归
    this.dfsVisit(initV,colors,handler);
  }
  //递归函数
  Graph.prototype.dfsVisit = function(v,colors,handler){
  	//将颜色设置为灰色
    colors[v] = 'gray'
    //处理v顶点
    handler(v);
    //访问v相连的其它顶点
    var vList = this.edges.get(v);
    for(var i = 0;i<vList.length;i++){
      var e = vList[i];
      if(colors[e] == 'white'){
        this.dfsVisit(e,colors,handler)
      }
    }
    colors[v] = 'black';
  }
  ```

## 十、排序算法

1. 大O表示法：在算法描述中，用粗略的度量算法的效率

2. 常见的大O表示形式

   ![截屏2020-11-25 上午10.25.06](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_大O表示法.png)

3. 排序算法

   - 封装列表 方便测试

   - 冒泡排序：

     - 效率较低，但思路简单
     - 效率：比较次数O(N<sup>2</sup>)，交换次数O(N<sup>2</sup>)

   - 选择排序：

     - 改进了冒泡排序
     - 选定第一个索引位置和后面的元素依次比较，找到除第一个元素意外以外的剩下元素最小的那个与第一个交换，然后用同样的方法逐个比较剩下的元素（每次选择最小或最大的元素）
     - 效率：比较次数O(N<sup>2</sup>)，交换次数O(N)

   - 插入排序：

     - 插入排序是高级排序（希尔排序/快速排序）的基础
     - 局部有序
       - 在队列中选择被标记的元素，这个元素的左边所有元素都是排好顺序的
     - 效率：是简单排序里效率最高的

   - 希尔排序：

     - 是插入排序的一种高效的改进版

     - 通过某种方式将小数据项靠左，大的数据项靠右移动

       ![截屏2020-11-25 下午3.52.25](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_希尔排序.png)

     - 需要选择合适的增量

   - 快速排序

     - 目前最快的一种排序算法，快速排序是比较好的选择
     - 可以看作冒泡排序的升级版，快速排序在一次循环中可以找出某个元素的正确位置，并且该元素之后不需要任何的移动
     - 分而治之：![截屏2020-11-25 下午10.42.59](https://gitee.com/baolk/typora_images/raw/master/img/js数据结构和算法_分而治之.png)
     - 快速排序的枢纽（pivot也有人称为主元）
       - 取头、中、尾的中位数
       - 效率：O(N*logN)

   ```javascript
   //创建列表类
   function ArrayList(){
     //属性
     this.array = [];
     
     //方法
     //将数据插入到数组中的方法
     ArrayList.prototype.insert = function(item){
       this.array.push(item);
     }
     //toString
     ArrayList.prototype.toString = function(){
       return this.array.join('-');
     }
     
     //实现排序算法
     //冒泡排序
     ArrayList.prototype.bubbleSort = function(){
       for(var i = 0 ; i<this.array.length ;i++){
         for(var j = 0 ;j<this.array.length-i;j++){
         	if(this.array[j]>this.array[j+1]){
           	var e = this.array[j+1];
             this.array[j+1] =this.array[j];
             this.array[j] = e;
           }
         }
       }
     }
     //选择排序
     ArrayList.prototype.selectSort = function(){
     	var length = this.array.length；
       
       var min = 0;
       for(var j =0;j<length;j++){
         var min = j;
         for(var i = min+1;i<length;i++){
           if(this.array[min]>this.array[i]){
             min = i;
           }
           //交换
           var e = this.array[j]
           this.array[j] =this.array[min];
           this.array[min] = e;
         }  
       }
     }
     //插入排序
     ArrayList.prototype.insertSort = function(){
     	var length = this.array.length;
       for(var i=1; i<length; i++){
         var temp = this.array[i];
       	var j = i ;
         while(this.array[j-1] > temp && j>0){
         	this.array[j] = this.array[j-1];
           j--;
         }
         this.array[j] = temp;
       }
     }
     //希尔排序
     ArrayList.prototype.shellSort = function(){
     	var length =this.array.length;
       var gap =Math.floor(length/2);
       
       while(gap>=1){
         for(var i=gap;i<length;i++){
           var temp = this.array[i]
           var j = i;
           while(this.array[j-gap] > temp && j > gap -1){
           	this.array[j] = this.array[j-gap];
             j -= gap;
           }
           this.array[j] = temp;
         }
         gap = Math.floor(gap/2);
       }
     }
     //快速排序
     ArrayList.prototype.quickSort = function(){
     	this.quick(0,this.array.length - 1);	  
     }
     ArrayList.prototype.quick = function(){
     	var pivot = this.median(left,right);
       var i = left;
       var j = right - 1;
       while(true){
         while(this.array[++i]<pivot){}
         while(this.array[--j]>pivot){}
         if(i<j){
           this.swap(i,j);
         }else{
           break;
         }
       }
       this.swap(i,right-1);
       this.quick(left,i-1);
       this.quick(i+1,right);
     }
     //选择枢纽
     ArrayList.prototype.median = function(left,right){
       var center = Math.floor((left + right)/2);
       if(this.array[left] > this.array[center]){
         this.swap(left,center);
       }
       if(this.array[center] > this.array[right]){
         this.swap(center,right);
       }
       if(this.array[left] > this.array[right]){
         this.swap(left,right);
       }
       this.swap(center,right -1);
       return this.array(right -1);
     }
     
   }
   ```









