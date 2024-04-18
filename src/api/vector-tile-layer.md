
# Class: VectorTileLayer

矢量瓦片图层 VectorTileLayer 用于在地图上加载并绘制[矢量瓦片](../../../ide/guide/basic/vt)数据，并提供了必要的数据交互方法。

VectorTileLayer的样式是在options.style中用JSON数据格式的。 样式定义采用了插件式架构，用户可以在style中用不同过滤条件选取数据，用指定的渲染插件和相应样式来渲染数据。

具体有哪些渲染插件，各插件的样式定义可以参考这篇文档。

因为VectorTileLayer的样式属性非常丰富，用户可以采用 [MapTalks IDE](../../../ide/guide/intro) 软件来用所见即所得的方式来定制VectorTileLayer的样式，然后在[程序中加载](../../../ide/guide/useInProgram/intro)。

它是 [maptalks](https://maptalks.org)核心库 [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)的子类，同样继承了TileLayer上的方法和配置。


## 构造函数

### new VectorTileLayer()

```ts
import { VectorTileLayer } from '@maptalks/gl-layers';

new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt'
});
```
<details>



#### Returns

[`VectorTileLayer`](VectorTileLayer.md)

## 成员变量

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `products` | `private` | [`ProductDetails`](../interfaces/ProductDetails.md)[] |

</details>

## 方法

### setStyle()
```ts
addProduct(product): ProductDetails
```
<details>

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `product` | [`ProductDetails`](../interfaces/ProductDetails.md) | The product to be added. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

#### Source

[products.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L46)

</details>

***

### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```
<details>

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Source

[products.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L55)

</details>

***

### getProductById()

```ts
getProductById(productId): undefined | ProductDetails
```
<details>

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

#### Source

[products.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L64)

</details>

***

### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

<details>

Get products by category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | The product category. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

#### Source

[products.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L73)

</details>

***

### removeProduct()

```ts
removeProduct(productId): undefined | ProductDetails
```

<details>

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

#### Source

[products.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L102)

</details>

***

### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): undefined | ProductDetails
```

<details>

Update product details.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../interfaces/ProductDetails.md) | The updated product details. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Source

[products.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L83)

</details>
