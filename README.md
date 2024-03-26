# maptalks 3D Builder web site

## 添加文档的步骤
### 添加中文文档
* 在guide/目录下合适的位置创建md
* 修改.vitepress/config/zh.ts中sidebarGuide方法，增加一个sidebar item
  * sidebar item的link应指向md，例如```guide/path/to/foo.md```，link写为```'path/to/foo'```（无扩展名）
* 完成后提交文档并创建pr

### 添加中文文档
* 在en/guide/目录下创建md
* 修改.vitepress/config/en.ts中sidebarGuide方法，增加一个sidebar item
  * sidebar item的link指向md，例如```en/guide/path/to/foo.md```，link写为```'path/to/foo'```
* 完成后提交文档并创建pr

## 添加示例的步骤

> vitepress的资源文件必须放在public目录下

## 添加中文示例
假设示例的路径为foo
* 在examples/src目录下新建foo目录
* 在examples/src/foo目录下新建description.md，编写示例文档
* 在public/examples/下新建foo目录
* 在public/examples/foo下新建index.html，写入示例程序

## 添加英文示例
假设示例的路径为foo
* 在en/examples/src目录下新建foo目录
* 在en/examples/src/foo目录下新建description.md，编写示例文档
* 在public/en/examples/下新建foo目录
* 在public/en/examples/foo下新建index.html，写入示例程序
