# Flex-布局的基本使用（基本啦！！）

##### 开篇（no bb）

> **Flex 布局原理：就是用过给父盒子添加 flex 属性，来控制子盒子的位置和排列方式。**

##### 开启 flex 布局

给父组件添加`display:flex`

#### （一）父元素的几个基本属性

##### 1.1 主轴和侧轴

![image-20211128124558984](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20211128124558984.png)

##### 1.2 flex-direction 设置主轴方向

| 属性值         | 说明（这里都是子元素的排列顺序） |
| -------------- | -------------------------------- |
| row            | （默认值） 从左到右              |
| row-reverse    | 从右到左                         |
| column         | 从上到下                         |
| column-reverse | 从下到上                         |

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20211128125042909.png" alt="image-20211128125042909" style="zoom:50%;" />

##### 1.3 flex-wrap 属性

默认情况下，项目都排在主轴上，设置 flex-wrap 可以实现对子元素的换行效果

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/903d5b7df55779c03f2687a7d4d6bcea.png" alt="img" style="zoom:50%;" />

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

它可能取三个值。

（1）nowrap（默认）：不换行。

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/9da1f23965756568b4c6ea7124db7b9a.png" alt="img" style="zoom:50%;" />

（2）wrap：换行，第一行在上方。

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/3c6b3c8b8fe5e26bca6fb57538cf72d9.jpg" alt="img" style="zoom:50%;" />

（3）wrap-reverse：换行，第一行在下方。

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/fb4cf2bab8b6b744b64f6d7a99cd577c.jpg" alt="img" style="zoom:50%;" />

##### 1.4 justify-content 属性

justify-content 属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/c55dfe8e3422458b50e985552ef13ba5.png" alt="img" style="zoom:50%;" />

##### 1.5 align-items 属性

​ align-items 属性定义项目在**交叉轴**上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/2b0c39c7e7a80d5a784c8c2ca63cde17.png" alt="img" style="zoom:50%;" />

##### align-content 属性

​ 注意注意： 只有当子元素有多行的时候，该属性才能起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/f10918ccb8a13247c9d47715a2bd2c33.png" alt="img" style="zoom:50%;" />

#### （二）设置子元素的属性

##### 2.1 order 属性

order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

```css
.item {
  order: <integer>;
}
```

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/59e399c72daafcfcc20ede36bf32f266.png" alt="img" style="zoom:50%;" />

##### 1.2 flex-grow 属性

flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

<img src="https://www.runoob.com/wp-content/uploads/2015/07/f41c08bb35962ed79e7686f735d6cd78.png" alt="img" style="zoom:50%;" />

如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

##### 1.3 flex-shrink 属性

flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

<img src="https://gitee.com/spencer1228/blog-img-address/raw/master/img/240d3e960043a729bb3ff5e34987904f.jpg" alt="img" style="zoom: 67%;" />

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

##### 1.4 flex-basis 属性

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。

##### 1.5 flex 属性

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' > ];
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

##### 1.6 align-self 属性

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

#### （三）其他补充

- flex:1 是将所有被瓜分的空间进行分配

  - ![img](https://gitee.com/spencer1228/blog-img-address/raw/master/img/v2-d11a2e8877dfe7f76e6b752a0456b065_b.webp)

- flex-grow：1，是将剩余空间进行分配

- flex-basis：200px；

  - `width`只是`flex-basis`为 auto 时候间接生效，其余时候使用优先级更高的`flex-basis`属性值；

- flex-shrink：0 表示当前子盒子不能被压缩

- align-self：center，flex-start，end-start；覆盖父盒子设置交叉盒的属性

- order ：（数字） 默认为 0 设置盒子的排序，数值越大，排序越靠前
