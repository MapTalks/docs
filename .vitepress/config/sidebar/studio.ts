const items = [
    {
      text: '简介',
      english: 'introduction',
      link: "/guide/studio/intro",
    },
    /*{
      text: '与其他方案的比较',
      link: "/guide/studio/compare",
    },*/
    // {
    //   text: '浏览器支持',
    //   english: 'brow',
    //   link: "/guide/studio/browser",
    // },
    /*{
      text: '安装',
      link: "/guide/studio/install",
    },*/
    // {
    //   text: '购买',
    //   english: 'purchase',
    //   link: "/guide/studio/purchase",
    // },
    {
      text: "入门指南",
      collapsed: false,
      items: [
        {
          text: "打开和创建工程文件",
          english: 'open and create project',
          link: "/guide/studio/tutorial/create"
        },
        {
          text: "界面说明",
          english: 'UI ',
          link: "/guide/studio/tutorial/ui"
        },
        {
          text: "保存你的作品",
          link: "/guide/studio/tutorial/save"
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
          link: "/guide/studio/basic/vt",
        },
        {
          text: "什么是GLTF",
          link: "/guide/studio/basic/gltf",
        },
        {
          text: "什么是PBR",
          link: "/guide/studio/basic/pbr",
        }
      ],
    },
    {
      text: "导入数据",
      collapsed: false,
      items: [
        {
          text: "支持的数据格式",
          link: "/guide/studio/data/formats",
        },
        {
          text: "常见错误",
          link: "/guide/studio/data/errors",
        },
        {
          text: "坐标系转换",
          link: "/guide/studio/data/coord",
        }
      ],
    },
    {
      text: "发布",
      collapsed: false,
      items: [
        {
          text: "发布到服务",
          link: "/guide/studio/publish/publish",
        },
        {
          text: "IIS的MIME类型",
          link: "/guide/studio/publish/iis",
        }
      ],
    },
    {
      text: "程序加载",
      collapsed: false,
      items: [
        {
          text: "导出并载入",
          link: "/guide/studio/useInProgram/intro",
        },
        {
          text: "资源路径",
          link: "/guide/studio/useInProgram/path",
        }
      ],
    },
    {
      text: "性能优化",
      collapsed: false,
      items: [
        {
          text: "资源尺寸",
          link: "/guide/studio/performance/resource"
        }
      ],
    }/*,
    {
      label: "崩溃处理",
      collapsed: false,
      items: [
        "/guide/studio/crash/crashRecovery",
        "/guide/studio/crash/autosave",
        "/guide/studio/crash/log",
        "/guide/studio/crash/report",
      ],
    },*/
  ]

export default items;
