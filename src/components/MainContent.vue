<template>
  <main>
    <Tabs v-model="activeTab"
          color="#d71a1b"
          title-active-color="#d71a1b"
          title-inactive-color="#8e8787"
          :swipeable="true"
          background="transparent">
      <Tab v-for="item in tabsData"
          :key="item.id"
          :title="item.title"
          :swipeable="true"
          :title-style="{fontSize: '16px'}">
        <ContentItem :list="item.list" />
      </Tab>
    </Tabs>
  </main>
</template>

<script>
import { Tabs, Tab } from 'vant'
import ContentItem from './ContentItem'
export default {
  name: 'MainContent',
  components: {
    Tabs,
    Tab,
    ContentItem
  },
  data() {
    return {
      activeTab: 0,
      tabsData: [
        {
          id: 0,
          title: '推荐',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglCe60',
              author: '奇克派',
              title: 'macOS 微信测试版能刷朋友圈了，还有深色模式、新版 icon',
              publishTime: '3小时前',
              img: 'https://source.acexy.cn/view/XglBke9',
              link: 'https://sspai.com/post/65468'
            },
            {
              id: 1,
              type: 1,
              date: '二〇二一年三月十二日',
              week: '星期五',
              items: [
                {
                  id: 0,
                  content: 'OPPO Find X3 系列正式发布',
                  link: 'https://sspai.com/post/65469'
                },
                {
                  id: 1,
                  content: '华为 P50 Pro 渲染图曝光',
                  link: 'https://sspai.com/post/65469'
                },
                {
                  id: 2,
                  content: 'Notability 发布新款 macOS 版本',
                  link: 'https://sspai.com/post/65469'
                },
                {
                  id: 3,
                  content: '盒式磁带发明者 Lou Ottens 辞世',
                  link: 'https://sspai.com/post/65469'
                }
              ],
              moreBtnLink: 'https://sspai.com/post/65469'
            },
            {
              id: 2,
              type: 0,
              avatar: 'https://source.acexy.cn/view/Xglfb6F',
              author: '方大落',
              title: '从 IP 地址的工作方式聊聊它们的划分规律',
              publishTime: '22小时前',
              img: 'https://source.acexy.cn/view/Xglfb6F',
              link: 'https://sspai.com/post/64688'
            },
            {
              id: 3,
              type: 0,
              avatar: 'https://source.acexy.cn/view/Xglgfqd',
              author: '果核Group',
              title: 'vivo X60 Pro+ 深度影像评测报告',
              publishTime: '23小时前',
              img: 'https://source.acexy.cn/view/XglgNjZ',
              link: 'https://sspai.com/post/65449'
            },
            {
              id: 4,
              type: 1,
              date: '二〇二一年三月十一日',
              week: '星期四',
              items: [
                {
                  id: 0,
                  content: '小米 10S 正式发布',
                  link: 'https://sspai.com/post/65452'
                },
                {
                  id: 1,
                  content: '腾讯 ROG 游戏手机 5 系列正式发布',
                  link: 'https://sspai.com/post/65452'
                },
                {
                  id: 2,
                  content: '华为推出 Mate 40E',
                  link: 'https://sspai.com/post/65452'
                },
                {
                  id: 3,
                  content: '文石推出 Nova3 Color 彩屏墨水阅读器',
                  link: 'https://sspai.com/post/65452'
                },
                {
                  id: 4,
                  content: 'Photoshop 正式支持 M1 芯片版 Mac',
                  link: 'https://sspai.com/post/65452'
                },
                {
                  id: 5,
                  content: 'Apple 或推迟新款 MacBook Pro 量产时间',
                  link: 'https://sspai.com/post/65452'
                }
              ],
              moreBtnLink: 'https://sspai.com/post/65452'
            }
          ]
        },
        {
          id: 1,
          title: '最热',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XgljGHY',
              author: 'Tp',
              title: '派评 | 近期值得关注的 App',
              publishTime: '03月08日',
              img: 'https://source.acexy.cn/view/Xgliv+s',
              link: 'https://sspai.com/post/65413'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XgljqGl',
              author: '化学心情下',
              title: '你在用的浏览器又更新了，这些新功能值得一试',
              publishTime: '03月06日',
              img: 'https://source.acexy.cn/view/XgljnTj',
              link: 'https://sspai.com/post/65371'
            },
            {
              id: 2,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglkIXY',
              author: '少数派编辑部',
              title: '新玩意 054｜少数派的编辑们最近买了啥？',
              publishTime: '03月04日',
              img: 'https://source.acexy.cn/view/XglkGB-',
              link: 'https://sspai.com/post/65352'
            },
            {
              id: 4,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglkyJ9',
              author: 'SoberStudio',
              title: '从零开始，打造 iPad 电子化学习环境',
              publishTime: '03月03日',
              img: 'https://source.acexy.cn/view/XglkwJC',
              link: 'https://sspai.com/post/65326'
            },
            {
              id: 5,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XgljGHY',
              author: 'Tp',
              title: '如何更好地保护手机数据隐私？这 10 款 App 你可能用得上',
              publishTime: '03月03日',
              img: 'https://source.acexy.cn/view/XglnCDF',
              link: 'https://sspai.com/post/65277'
            }
          ]
        },
        {
          id: 2,
          title: '应用推荐',
          componentName: '',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglnTu3',
              author: 'JLDUAN',
              title: '还在找跨平台密码管理工具？试试更实惠的新选择：SafeInCloud',
              publishTime: '03月08日',
              img: 'https://source.acexy.cn/view/XglnQ9F',
              link: 'https://sspai.com/post/65379'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglnvQ4',
              author: 'Mirtle',
              title: '在 Android 端使用 Obsidian 的好伴侣：GitJournal 使用指南',
              publishTime: '03月03日',
              img: 'https://source.acexy.cn/view/Xglnssf',
              link: 'https://sspai.com/post/65316'
            },
            {
              id: 2,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglobHS',
              author: 'Clyde',
              title: 'Android 第三方启动器的「新招牌」：Niagara Launcher 正式版评测',
              publishTime: '02月27日',
              img: 'https://source.acexy.cn/view/XgloX13',
              link: 'https://sspai.com/post/65279'
            }
          ]
        },
        {
          id: 3,
          title: '生活方式',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglpKnx',
              author: '笋加鲜',
              title: '30days挑战②｜写晨间日记给我带来了什么',
              publishTime: '03月01日',
              img: 'https://source.acexy.cn/view/XglpIjq',
              link: 'https://sspai.com/post/65306'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/Xglpzq1',
              author: '老林还年少',
              title: '年度征文 | 写给新手的手冲咖啡入门指南',
              publishTime: '02月24日',
              img: 'https://source.acexy.cn/view/Xglpw7L',
              link: 'https://sspai.com/post/65218'
            },
            {
              id: 2,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglqZBE',
              author: '北鸮',
              title: '年度征文 | 买了 10 多款机械键盘之后，我想聊聊如何找到「完美手感」',
              publishTime: '02月19日',
              img: 'https://source.acexy.cn/view/XglqXG3',
              link: 'https://sspai.com/post/64972'
            },
            {
              id: 3,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglrR6B',
              author: 'Quentin_Yu',
              title: '年度征文 | 买了 10 多款机械键盘之后，我想聊聊如何找到「完美手感」',
              publishTime: '02月18日',
              img: 'https://source.acexy.cn/view/XglrNx0',
              link: 'https://sspai.com/post/65117'
            }
          ]
        },
        {
          id: 4,
          title: '效率技巧',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglsXG7',
              author: '吕立青',
              title: '深度解析 Roam 数据结构 —— 为什么 Roam 远不只是一个笔记应用',
              publishTime: '03月09日',
              img: 'https://source.acexy.cn/view/XglsUst',
              link: 'https://sspai.com/post/65426'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/Xgls4J7',
              author: 'Louiscard',
              title: 'DEVONthink To Go 3.0 更新详解：更优秀的同步体验、支持快捷指令',
              publishTime: '03月08日',
              img: 'https://source.acexy.cn/view/Xgls2T9',
              link: 'https://sspai.com/post/65408'
            },
            {
              id: 2,
              type: 0,
              avatar: 'https://source.acexy.cn/view/Xgltb9M',
              author: '空谷',
              title: 'Airtable + Wolai：为自己量身定制一个价值投资系统',
              publishTime: '03月08日',
              img: 'https://source.acexy.cn/view/XgltZhI',
              link: 'https://sspai.com/post/65406'
            }
          ]
        },
        {
          id: 5,
          title: '播客',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglupnQ',
              author: '一派Podcast',
              title: '一派·Podcast｜从折叠屏引出的数字人生讨论',
              publishTime: '一小时前',
              img: 'https://source.acexy.cn/view/XglunId',
              link: 'https://sspai.com/post/65477'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglupnQ',
              author: '一派Podcast',
              title: '一派·Podcast｜从折叠屏引出的数字人生讨论',
              publishTime: '03月05日',
              img: 'https://source.acexy.cn/view/XglvV0v',
              link: 'https://sspai.com/post/65367'
            }
          ]
        },
        {
          id: 6,
          title: '视频',
          list: [
            {
              id: 0,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglwQZN',
              author: 'nerd_du',
              title: '苹果新年短片《阿年》：若有似无的年兽，被经验遮蔽的好奇心',
              publishTime: '01月29日',
              img: 'https://source.acexy.cn/view/XglwEOe',
              link: 'https://sspai.com/post/64838'
            },
            {
              id: 1,
              type: 0,
              avatar: 'https://source.acexy.cn/view/XglzDkq',
              author: '老麦',
              title: '华为B6好不好？聊聊我印象最深的三大场景',
              publishTime: '2020年09月23日',
              img: 'https://source.acexy.cn/view/XglywxE',
              link: 'https://sspai.com/post/62867'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  main {
    padding-bottom: 30px;
  }
</style>