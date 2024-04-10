# 什么是图层

矢量瓦片是要素（Feature）的集合，矢量瓦片中的Feature与GeoJSON中的Feature类似，但结构更简单：

```json
{
  "type": "LineString",
  "layer": "road",
  "geometry"： [[[0, 0], [0, 1]]],
  "properties": {
    "level": 2,
    "name": "foo road"
  }
}
```
> [!TIP]
> Feature.properties中是与要素相关联的属性信息，以键值对形式存储，可以包含任意类型数据

Designer中的图层，指的是符合特定过滤条件的一组要素。

## 图层过滤条件

Designer中的过滤条件采用的是[feature-filter](/guide/sdk/feature-filter)表达式。

以某二级道路图层的要素数据举例:

```json
{
  "type": "LineString",
  "layer": "road",
  "geometry"： [[[0, 0], [0, 1]]],
  "properties": {
    "level": 2,
    "name": "foo road"
  }
}
```

图层数据的共同的特征是`type`为`LineString`，`layer`为`road`，`level`属性值为`2`。

该图层的过滤条件（[feature-filter](/guide/sdk/feature-filter)）可以写作：

```js
[
  "all",
  ["==", "$type", "LineString"],
  ["==", "$layer", "road"],
  ["==", "level", 2]
]
```

> [!TIP]
> `feature-filter`表达式除了可以用properties中的属性作为条件的key，也有以下以`$`开头的key为特殊key名:
> * **$type**： feature的type，可能的值有 "Point", "MultiPoint", "LineString", "Polygon"。
> * **$id**: feature的id。
> * **$layer**: feature所属图层。

如果需要了解更多关于如何编写feature-filter，请参考[其文档](/guide/sdk/feature-filter)。

## 图层组

Designer中可以创建图层组，方便您更好的组织图层。

* 图层组可以加入一个或多个图层
* 图层组中无法创建图层组
* 图层组没有设计功能
