<template>
  <div class="content-item">
    <div v-for="item in list" :key="item.id">
      <a class="img-card" v-if="item.type === 0" :href="item.link" target="_blank">
        <div class="box">
          <img class="img" :src="item.img" alt="img-card-image" />
          <div class="row">
            <img class="avatar" :src="item.avatar" alt="avatar">
            {{item.author}}&nbsp;&nbsp;{{item.publishTime}}
          </div>
        </div>
        <div class="title">{{item.title}}</div>
      </a>
      <div class="news-card" v-else>
        <div class="header">
          <div class="left">派早报</div>
          <div class="right">
            <div class="date">{{item.date}}</div>
            <div class="week">{{item.week}}</div>
          </div>
        </div>
        <a class="news-item" v-for="(item2, index2) in item.items"
           :key="item2.id"
           :href="item2.link"
           target="_blank">
          <span class="index">{{index2 | indexFilter}}</span>
          <p class="content">{{item2.content}}</p>
        </a>
        <a class="read-all-btn">阅读全篇</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentItem',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    indexFilter: v => v.toString().padStart(2, '0')
  }
}
</script>

<style lang="scss" scoped>
  .content-item {
    margin: 0 10px;
    .img-card {
      margin-top: 13px;
      background: #fff;
      display: block;
      .box {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,.9));
        }
        .img {
          width: 100%;
        }
        .row {
          display: flex;
          align-items: center;
          position: absolute;
          left: 12px;
          bottom: 20px;
          font-size: 13px;
          color: #fff;
          position: relative;
          z-index: 1;
        }
        .avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          vertical-align: top;
          margin-right: 3px;
        }
      }
      .title {
        padding: 14px;
        font-size: 17px;
        line-height: 1.4;
        font-weight: 600;
        color: #292525;
      }
    }
    .news-card {
      margin-top: 13px;
      padding: 16px 14px;
      background: #fff;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px 0;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        .left {
          font-size: 24px;
          color: #292525;
          letter-spacing: .1em;
        }
        .right {
          font-size: 10px;
          color: #655e5e;
          line-height: 1.4;
        }
      }
      .news-item {
        margin: 0 16px;
        padding: 14px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        &:nth-last-of-type(2) {
          border: none;
        }
        .index {
          color: #d71a1b;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: .01em;
          margin-right: 8px;
        }
        .content {
          font-size: 14px;
          color: #292525;
          letter-spacing: .1em;
          line-height: 1.2;
        }
      }
      .read-all-btn {
        color: #d71a1b;
        background: #f4f4f4;
        padding: 10px 16px;
        margin: 20px 0 200px;
        border-radius: 16px;
        letter-spacing: .1em;
        font-size: 14px;
        display: block;
        width: fit-content;
        margin: 0 auto;
      }
    }
  }
</style>