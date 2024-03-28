const items = [
    {
      text: '简介',
      english: 'introduction',
      link: "intro",
    },
    /*{
      text: '与其他方案的比较',
      link: "compare",
    },*/
    // {
    //   text: '浏览器支持',
    //   english: 'brow',
    //   link: "browser",
    // },
    /*{
      text: '安装',
      link: "install",
    },*/
    // {
    //   text: '购买',
    //   english: 'purchase',
    //   link: "purchase",
    // },
    {
      text: "入门指南",
      collapsed: false,
      items: [
        {
          text: "打开和创建工程文件",
          english: 'open and create project',
          link: "tutorial/create"
        },
        {
          text: "界面说明",
          english: 'UI ',
          link: "tutorial/ui"
        },
        {
          text: "保存你的作品",
          link: "tutorial/save"
        }
      ],
    },
    {
      text: "基础知识",
      english: "basics",
      collapsed: true,
      items: [
        {
          text: "GIS知识入门",
          link: "https://mp.weixin.qq.com/s/UkQvMFEWyHDbsmh7LDWU7A",
        },
        {
          text: "什么是矢量瓦片",
          link: "basic/vt",
        },
        {
          text: "什么是GLTF",
          link: "basic/gltf",
        },
        {
          text: "什么是PBR",
          link: "basic/pbr",
        }
      ],
    },
    {
      text: "导入数据",
      collapsed: false,
      items: [
        {
          text: "支持的数据格式",
          link: "data/formats",
        },
        {
          text: "常见错误",
          link: "data/errors",
        },
        {
          text: "坐标系转换",
          link: "data/coord",
        }
      ],
    },
    {
      text: "发布",
      collapsed: false,
      items: [
        {
          text: "发布到服务",
          link: "publish/publish",
        },
        {
          text: "IIS的MIME类型",
          link: "publish/iis",
        }
      ],
    },
    {
      text: "程序加载",
      collapsed: false,
      items: [
        {
          text: "导出并载入",
          link: "useInProgram/intro",
        },
        {
          text: "资源路径",
          link: "useInProgram/path",
        }
      ],
    },
    {
      text: "性能优化",
      collapsed: false,
      items: [
        {
          text: "资源尺寸",
          link: "performance/resource"
        }
      ],
    }/*,
    {
      label: "崩溃处理",
      collapsed: false,
      items: [
        "crash/crashRecovery",
        "crash/autosave",
        "crash/log",
        "crash/report",
      ],
    },*/
  ]

export default items;
