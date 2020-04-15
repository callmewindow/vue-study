<template>
  <div id="visit">

    <div class="full" id="refuse" v-show="status === -1">
      <div class="title">该手环的参观服务已经关闭</div>
    </div>

    <div class="full" id="none" v-show="status === 0">
      <div class="title">暂未进入展馆，赶紧进去参观吧</div>
    </div>

    <div class="full" id="enter" v-show="status === 1">
      <div class="title">您当前处于{{name}}</div>
      <div id="pavilion_img">
        这是展馆的总览图
      </div>
      <div id="position_list" v-for="(item,index) in positions">
        <div class="position_one">
          时间：{{item.time}}<br>
          行为：{{item.text}}
        </div>
      </div>
    </div>

    <div class="full" id="leave" v-show="status === 2">
      <div class="title">感谢参观<br>以下是您本次参观的数据报表</div>
      <div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Visit",
    data(){
      return{
        name: '北航冯如杯科技竞赛项目展馆',
        status: 2,
        positions: [
          {text:"经过展台X",time:"10:32"},
          {text:"经过展台Y",time:"10:49"},
        ],
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
  div{
    font-size: 3vh;
  }
  .title{
    width: 100%;
    font-size: 4vh;
    font-weight: bold;
    text-align: center;
  }
  #pavilion_img{
    width: 60vw;
    height: 0;
    padding-bottom: 60vw;
    margin-left: 20vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    border: 1px solid black;
  }
  #position_list{
    margin-top: 1vh;
    border: 1px solid black;
  }
</style>
