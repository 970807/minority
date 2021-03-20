<template>
  <main>
    <Tabs v-model="activeTab"
          color="#d71a1b"
          title-active-color="#d71a1b"
          title-inactive-color="#8e8787"
          :swipeable="true"
          background="transparent"
          @change="onTabsChange">
      <Tab v-for="item in newsTitleList"
           :key="item.id"
           :title="item.title"
           :swipeable="true"
           :title-style="{fontSize: '16px'}">
        <ContentItem :info="info" />
      </Tab>
    </Tabs>
  </main>
</template>

<script>
import { Tabs, Tab } from 'vant'
import ContentItem from './ContentItem'
import { getNewsTitleList, getNewsList } from '@/api'
export default {
  name: 'MainContent',
  components: {
    Tabs,
    Tab,
    ContentItem
  },
  created () {
    this.init()
  },
  data () {
    return {
      activeTab: 0,
      newsTitleList: [],
      info: []
    }
  },
  methods: {
    async init () {
      try {
        this.newsTitleList = await getNewsTitleList()
        this.info = await getNewsList({ type: this.newsTitleList[0].type })
      } catch (err) {
        console.error(err);
      }
    },
    onTabsChange (index) {
      const type = this.newsTitleList[index].type
      getNewsList({ type }).then(res => {
        this.info = res
      }).catch(err => {
        console.error(err);
      })
    }
  }
}
</script>

<style scoped>
main {
  padding-bottom: 30px;
}
</style>