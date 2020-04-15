var visit;
window.onload=function () {
    visit = new Vue({
        el: '#visit',
        data: {
            name: '北航冯如杯科技竞赛项目展馆',
            status: 2,
            positions: [
                {text:"经过展台X",time:"10:32"},
                {text:"经过展台Y",time:"10:49"},
            ],
        },
    })
};
