<template>
  <div id="adopt">
    <div id="bg" v-if="bgShow" @click="hideAll"></div>

      <div id="name" @click="jumptest">
        {{name}}
      </div>

      <div class="checked" @click="showDate">
        日期选择：{{date_checked}}
      </div>
      <div id="dateall" v-show="dateShow">
        <span id="date_title">选择预约日期</span>
        <div v-for="(item,index) in dates">
          <div class="date_one"
               v-bind:class = "{checked_item :item.title === date_checked}"
               v-bind:id = " 'date' + index"
          >
            <label>
              <input class="checkinput" type="radio"
                     v-bind:id="item.title"
                     v-bind:value="item.title"
                     v-model="date_checked">
            </label>
            <label v-bind:for="item.title">
              {{item.title}}
            </label>
          </div>
        </div>
      </div>

      <div class="checked" @click="showTime">
        时间段选择：{{time_checked}}
      </div>
      <div id="timeall" v-show="timeShow">
        <span id="time_title">选择预约时间段</span>
        <div v-for="item in times">
          <div class="time_one" v-bind:class = "{checked_item :item.title === time_checked}" >
            <label>
              <input class="checkinput" type="radio"
                     v-bind:id="item.title"
                     v-bind:value="item.title"
                     v-model="time_checked">
            </label>
            <label v-bind:for="item.title">
              {{item.title}}<br>
              预约上限：{{item.max}}<br>
              剩余人数：{{item.left}}<br>
            </label>
          </div>
        </div>
      </div>

      <div v-if="group" class="checked">
        <label for="group_input">团队人数：</label>
        <input id="group_input" v-model.number="groupnum" type="number" placeholder="请输入团队总人数">
      </div>

      <div id="send" @click="submit">进行预约</div>

  </div>
</template>

<script>
  export default {
    name: 'Adopt',
    data(){
      return{
        group: true,
        groupnum: '',
        name: '北航冯如杯科技竞赛项目展馆',
        bgShow: false,
        dateShow: false,
        dates: [
          {title: '07-08',max: 90,left: 0},
          {title: '07-09',max: 90,left: 27},
          {title: '07-10',max: 80,left: 18},
          {title: '07-11',max: 90,left: 55},
          {title: '07-12',max: 90,left: 40},
          {title: '07-13',max: 80,left: 20},
          {title: '07-14',max: 90,left: 2},
          {title: '07-15',max: 90,left: 80},
          {title: '07-16',max: 80,left: 80},
        ],
        date_checked: '',
        date_border:{
          color: 'red',
        },

        timeShow: false,
        times: [
          {title: '8:00-11:00',max: 30,left: 17},
          {title: '13:00-17:00',max: 40,left: 20},
          {title: '20:00-22:00',max: 20,left: 18},
        ],
        time_checked: '',
      }
    },
    created() {
      this.date_checked = this.dates[0].title;
      this.time_checked = this.times[0].title;
    },
    methods: {
      jumptest() {
        this.$router.push("model");
      },
      showDate(){
        this.bgShow = true;
        this.dateShow = true;
      },
      showTime(){
        this.bgShow = true;
        this.timeShow = true;
      },
      hideAll(){
        this.bgShow = false;
        this.dateShow = false;
        this.timeShow = false;
      },
      submit() {
        let result;
        if(this.group){
          if(this.groupnum){
            result={
              date: this.date_checked,
              time: this.time_checked,
              groupnum: this.groupnum
            };
            console.log(result);
          }else{
            alert("团队人数处为数字类型的内容");
          }
        }else {
          result={
            date: this.date_checked,
            time: this.time_checked
          };
          console.log(result);
        }
      },
      addDateColor(length) {
        let date;
        for(let i = 0; i<length; i++){
          date=document.getElementById("date"+i);
          date.style.borderColor=this.getDateColor(this.dates[i]);
        }
      },
      getDateColor(eachDate) {
        let ratio = parseInt(100-100*eachDate.left/eachDate.max);
        let one = (255+255) / 100;
        let r,g,b;
        if ( ratio < 50 ) {
          r = one * ratio;
          g = 255;
        }else{
          g =  255 - ( (ratio - 50 ) * one) ;
          r = 255;
        }
        r = parseInt(r)-30;
        g = parseInt(g)-30;
        b = 0;
        return "rgb("+r+","+g+","+b+")";
      }
    },
    watch: {
      date_checked: function (newDate) {
        console.log(newDate);
        for(let i = 0;i<this.times.length;i++){
          this.times[i].max++;
          this.times[i].left--;
        }
      },
      time_checked: function (newTime) {
        console.log(newTime);
      },
      dateShow: function (newShow) {
        if(newShow){
          this.addDateColor(this.dates.length);
        }
      }
    }
  }
</script>

<style scoped>

  div{
    font-size: 3vh;
  }
  .checkinput{
    display: none;
  }
  #bg{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 1;
  }
  #adopt{
    width: auto;
    height: auto;
  }
  #name{
    width: 100%;
    font-size: 4vh;
    font-weight: bold;
    text-align: center;
  }
  .checked{
    float: left;
    display: inline-block;
    height: 4vh;
    width: auto;
    font-size: 3vh;
    margin-top: 1vh;
    margin-left: 1vh;
    padding: 1vh;
  }
  .checked_item{
    background-color: #8be2ff;
  }
  #dateall{
    width: 80vw;
    height: 50vh;
    margin-top: 2vh;
    margin-left: 10vw;
    position: absolute;
    background-color: white;
    border-radius: 3vh;
    z-index: 2;
  }
  #date_title{
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 2.5vh;
    font-weight: bold;
    text-align: center;
    float: left;
  }
  .date_one{
    display: inline-block;
    float: left;
    width: 14vw;
    font-size: 4vw;
    text-align: center;
    padding: 0.5vh;
    margin-left: 2.9vw;
    margin-top: 1.5vh;
    border-radius: 1vh;
    border: 2px solid black;
  }
  #timeall{
    width: 90vw;
    height: auto;
    min-height: 60vh;
    margin-top: 2vh;
    margin-left: 5vw;
    padding-bottom: 3vh;
    position: absolute;
    background-color: white;
    border-radius: 3vh;
    z-index: 2;
  }
  #time_title{
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 2.5vh;
    font-weight: bold;
    text-align: center;
    float: left;
  }
  .time_one{
    float: left;
    width: 25vw;
    font-size: 3.5vw;
    line-height: 4.5vw;
    text-align: center;
    margin-top: 1vh;
    margin-left: 2vw;
    padding: 0.8vw;
    padding-top: 0.5vh;
    border: 1px solid black;
  }
  #group_input{
    height: 3vh;
    font-size: 2.5vh;
  }
  #send{
    float: left;
    width: 30vw;
    height: 4vh;
    font-size: 3vh;
    text-align: center;
    line-height: 4vh;
    position: absolute;
    margin-left: 35vw;
    bottom: 10vh;
  }
</style>
