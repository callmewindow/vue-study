var adopt;
function addDateColor(length) {
    var date;
    for(var i = 0;i<length;i++){
        date=document.getElementById("date"+i);
        date.style.borderColor=getDateColor(adopt.dates[i]);
    }
}
function getDateColor(eachDate) {
    var ratio = parseInt(100-100*eachDate.now/eachDate.max);
    var one = (255+255) / 100;
    var r,g,b;
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
window.onload=function () {
    adopt = new Vue({
        el: '#adopt',
        data: {
            group: true,
            groupnum: '',
            name: '北航冯如杯科技竞赛项目展馆',
            bgShow: false,
            dateShow: false,
            dates: [
                {title: '07-08',max: 90,now: 0},
                {title: '07-09',max: 90,now: 27},
                {title: '07-10',max: 80,now: 18},
                {title: '07-11',max: 90,now: 55},
                {title: '07-12',max: 90,now: 40},
                {title: '07-13',max: 80,now: 20},
                {title: '07-14',max: 90,now: 2},
                {title: '07-15',max: 90,now: 80},
                {title: '07-16',max: 80,now: 80},
            ],
            date_checked: '',
            date_border:{
                color: 'red',
            },

            timeShow: false,
            times: [
                {title: '8:00-11:00',max: 30,now: 17},
                {title: '13:00-17:00',max: 40,now: 20},
                {title: '20:00-22:00',max: 20,now: 18},
            ],
            time_checked: '',
        },
        created: function(){
            this.date_checked = this.dates[0].title;
            this.time_checked = this.times[0].title;
        },
        methods: {
            showDate:function(){
                this.bgShow = true;
                this.dateShow = true;
            },
            showTime:function(){
                this.bgShow = true;
                this.timeShow = true;
            },
            hideAll:function(){
                this.bgShow = false;
                this.dateShow = false;
                this.timeShow = false;
            },
            submit:function() {
                if(this.group){
                    if(this.groupnum){
                        var result={
                            date: this.date_checked,
                            time: this.time_checked,
                            groupnum: this.groupnum
                        };
                        console.log(result);
                    }else{
                        alert("团队人数处为数字类型的内容");
                    }
                }else {
                    var result={
                        date: this.date_checked,
                        time: this.time_checked
                    };
                    console.log(result);
                }
            },
        },
        watch: {
            date_checked: function (newDate) {
                console.log(newDate);
                for(var i = 0;i<this.times.length;i++){
                    this.times[i].max++;
                    this.times[i].now--;
                }
            },
            time_checked: function (newTime) {
                console.log(newTime);
            },
            dateShow: function (newShow) {
                if(newShow){
                    addDateColor(this.dates.length);
                }
            }
        }
    });
    adopt.times = [
        {title: '10:00-11:00',max: 30,now: 17},
        {title: '13:00-17:00',max: 40,now: 20},
        {title: '20:00-22:00',max: 20,now: 18},
    ];
    adopt.time_checked = adopt.times[0].title;
};
