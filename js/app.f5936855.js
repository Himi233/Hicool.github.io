(function(){"use strict";var t={4136:function(t,a,e){var s=e(6848),i=function(){var t=this,a=t._self._c;return a("div",[a("router-view")],1)},o=[],n={},r=n,c=e(1656),l=(0,c.A)(r,i,o,!1,null,null,null),d=l.exports,v=e(6178),m=function(){var t=this,a=t._self._c;return a("div",[a("router-view"),a("router-link",{attrs:{to:"/survey/baseMessage"}},[a("span",{staticClass:"survey",staticStyle:{"background-color":"#fff"}},[t._v("调查问卷")])]),a("van-tabbar",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"wap-home",replace:"",to:"/frame/home"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"description",replace:"",to:"/frame/scheme"}},[t._v("方案")]),a("van-tabbar-item",{attrs:{icon:"friends",replace:"",to:"/frame/us"}},[t._v("我们")])],1)],1)},u=[],p=(e(9704),e(1981)),h={name:"framePage",data(){return{active:0}},methods:{onRefresh(){setTimeout((()=>{(0,p.A)("刷新成功"),this.isLoading=!1,this.count++}),1e3)}}},g=h,b=(0,c.A)(g,m,u,!1,null,"2cd51591",null),f=b.exports,_=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"survey"}},[a("van-nav-bar",{attrs:{title:"调查问卷","left-text":"退出","left-arrow":""},on:{"click-left":t.returnBack}}),a("router-view")],1)},y=[],C=(e(4114),{name:"surveyPage",data(){return{timer:null}},methods:{returnBack(){this.$dialog.confirm({message:"是否退出"}).then((()=>{this.$toast.success("保存成功"),this.timer=setTimeout((()=>{this.$router.push("/frame/home")}),2e3)})).catch((()=>{}))}}}),x=C,k=(0,c.A)(x,_,y,!1,null,"726a710a",null),S=k.exports,w=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"home"}},[t._m(0),a("div",{staticClass:"body"},[t._m(1),a("van-divider"),a("h3",[t._v("获取假肢个性化装配方案及价格表")]),a("form",[a("div",{staticClass:"label"},[t._v(" 称呼 "),a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t.tagArr[0].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nameText,expression:"nameText"}],attrs:{type:"text",placeholder:"请输入您的称呼"},domProps:{value:t.nameText},on:{input:function(a){a.target.composing||(t.nameText=a.target.value)}}}),a("div",{staticClass:"label"},[t._v(" 电话 "),a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t.tagArr[1].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneText,expression:"phoneText"}],attrs:{type:"text",placeholder:"请输入您的手机号"},domProps:{value:t.phoneText},on:{input:function(a){a.target.composing||(t.phoneText=a.target.value)}}}),a("div",{staticClass:"label"},[t._v(" 是否初次安装假肢 "),a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",[t._v("单选")]),a("van-tag",{directives:[{name:"show",rawName:"v-show",value:t.tagArr[2].bool,expression:"tagArr[2].bool"}],attrs:{type:"warning"}},[t._v("请选择")])],1),a("ul",[a("li",{class:{Choice:t.singleCheckY},on:{click:function(a){t.singleCheckN=!1,t.singleCheckY=!0}}},[a("span",[t._v("是")])]),a("li",{class:{Choice:t.singleCheckN},on:{click:function(a){t.singleCheckY=!1,t.singleCheckN=!0}}},[a("span",[t._v("否")])])]),a("div",{staticClass:"label",staticStyle:{"margin-bottom":"5px"}},[t._v(" 咨询哪种类型的假肢 "),a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",[t._v("多选")]),t.tagArr[3].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("ul",[a("li",{class:{Choice:t.multipleChoiceOne},on:{click:function(a){t.multipleChoiceOne=!t.multipleChoiceOne}}},[a("span",[t._v("基础款")])]),a("li",{class:{Choice:t.multipleChoiceTwo},on:{click:function(a){t.multipleChoiceTwo=!t.multipleChoiceTwo}}},[a("span",[t._v("旗舰款")])]),a("li",{class:{Choice:t.multipleChoiceThree},on:{click:function(a){t.multipleChoiceThree=!t.multipleChoiceThree}}},[a("span",[t._v("Pro款")])]),a("li",{class:{Choice:t.multipleChoiceFour},on:{click:function(a){t.multipleChoiceFour=!t.multipleChoiceFour}}},[a("span",[t._v("预售款")])])]),a("van-checkbox",{attrs:{"icon-size":"14px","checked-color":"#ee0a24"},model:{value:t.agreement,callback:function(a){t.agreement=a},expression:"agreement"}},[t._v("自动输入历史信息"),a("i",{staticStyle:{color:"#f5224d"}},[t._v("《个人信息授权与隐私政策》")])]),a("van-button",{attrs:{color:"linear-gradient(to right, #ff6034, #ee0a24)",disabled:!t.agreement},on:{click:t.vanButton}},[t._v("立即提交")])],1)],1)])},A=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"banner"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/homeBanner.jpg",alt:"益辅康"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("div",{staticClass:"homeTitle"},[a("span",[t._v("PRODUCT INTRODUCTION")]),a("h3",[t._v("产品介绍")])]),a("ul",{staticClass:"product"},[a("li",[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/product1.jpg",alt:"基础款"}}),a("span",{staticClass:"productName"},[t._v("视觉系-智能机械手【基础款】")])]),a("li",[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/product2.jpg",alt:"旗舰款"}}),a("span",{staticClass:"productName"},[t._v("视觉系-智能机械手【旗舰款】")])]),a("li",[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/product3.jpg",alt:"pro款"}}),a("span",{staticClass:"productName"},[t._v("视觉系-智能机械手【pro款】")])]),a("li",[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/product4.jpg",alt:"预售款"}}),a("span",{staticClass:"productName"},[t._v(" Future未来系-智能康复辅助训练器械【预售设计中】")])])])])}],T={name:"homePage",data(){return{nameText:"",phoneText:"",singleCheckY:!1,singleCheckN:!1,multipleChoiceOne:!1,multipleChoiceTwo:!1,multipleChoiceThree:!1,multipleChoiceFour:!1,agreement:!1,tagArr:[{bool:!1},{bool:!1},{bool:!1},{bool:!1}],timer1:null,timer2:null,timer3:null,timer4:null}},methods:{vanButton(t){return t.preventDefault(),""===this.nameText?(this.tagArr[0].bool=!0,clearTimeout(this.timer1),void(this.timer1=setTimeout((()=>{this.tagArr[0].bool=!1}),1500))):""===this.phoneText?(this.tagArr[1].bool=!0,clearTimeout(this.timer2),void(this.timer2=setTimeout((()=>{this.tagArr[1].bool=!1}),1500))):!1===this.singleCheckY&&!1===this.singleCheckN?(this.tagArr[2].bool=!0,clearTimeout(this.timer3),void(this.timer3=setTimeout((()=>{this.tagArr[2].bool=!1}),1500))):!1===this.multipleChoiceOne&&!1===this.multipleChoiceTwo&&!1===this.multipleChoiceThree&&!1===this.multipleChoiceFour?(this.tagArr[3].bool=!0,clearTimeout(this.timer4),void(this.timer4=setTimeout((()=>{this.tagArr[3].bool=!1}),1500))):void this.$toast.success("提交成功")}}},N=T,B=(0,c.A)(N,w,A,!1,null,"b8351bf6",null),O=B.exports,$=function(){var t=this;t._self._c;return t._m(0)},z=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"scheme"}},[a("div",{staticClass:"banner"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/schemeBanner.jpg",alt:"益辅康"}})]),a("div",{staticClass:"body"},[a("div",{staticClass:"content"},[a("div",{staticClass:"schemeTitle"},[a("span",[t._v("UPPER LIMB SOLUTIONS")]),a("h3",[t._v("上肢解决方案")])]),a("ul",{staticClass:"treeDiagram"},[a("li",{staticClass:"node one"},[a("div",{staticClass:"leftBranch"},[a("span",{staticClass:"branchName"},[t._v("第一步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/1.jpg"}}),a("span",{staticClass:"text"},[t._v(" 入院后专家进行检查患者身体以及残肢条件是否符合安装假肢标准 ")])])])]),a("li",{staticClass:"node two"},[a("div",{staticClass:"rightBranch"},[a("span",{staticClass:"branchName"},[t._v("第二步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/2.jpg"}}),a("span",{staticClass:"text"},[t._v(" 根据患者自身条件，提供可实施方案以及假肢处方 ")])])])]),a("li",{staticClass:"node three"},[a("div",{staticClass:"leftBranch"},[a("span",{staticClass:"branchName"},[t._v("第三步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/3.jpg"}}),a("span",{staticClass:"text"},[t._v(" 测量患者身体数据，根据个人身体数据制作相适宜假肢 ")])])])]),a("li",{staticClass:"node four"},[a("div",{staticClass:"rightBranch"},[a("span",{staticClass:"branchName"},[t._v("第四步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/4.jpg"}}),a("span",{staticClass:"text"},[t._v(" 安装假肢并与患者身体进行适配，确保穿戴期间无任何不适感 ")])])])]),a("li",{staticClass:"node five"},[a("div",{staticClass:"leftBranch"},[a("span",{staticClass:"branchName"},[t._v("第五步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/5.jpg"}}),a("span",{staticClass:"text"},[t._v(" 通过康复师制定的一对一康复训练进行假肢康复训练、残肢和接受腔维护等 ")])])])]),a("li",{staticClass:"node six"},[a("div",{staticClass:"rightBranch"},[a("span",{staticClass:"branchName"},[t._v("第六步")]),a("div",{staticClass:"image-text"},[a("img",{attrs:{src:"http://scnrzy063.hn-bkt.clouddn.com/6.jpg"}}),a("span",{staticClass:"text"},[t._v(" 确保患者能够舒适穿戴并且正常使用后可进行出院，以及自主训练指导 ")])])])])])])])])}],q={name:"schemePage"},I=q,j=(0,c.A)(I,$,z,!1,null,"e2b13676",null),P=j.exports,E=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"us"}},[a("div",{staticClass:"banner"},[a("swiperPage",{attrs:{images:t.images}})],1),t._m(0)])},L=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"body"},[a("div",{staticClass:"content"},[a("div",{staticClass:"usTitle"},[a("span",[t._v("TEAM INTRODUCTION")]),a("h3",[t._v("团队介绍")])]),a("div",{staticClass:"text"},[a("span",[t._v(" 本团队成员是由东莞城市学院多位在读学生组成，本团队涵盖多个专业，以机械设计制造及其自动化专业为主体，配合电子信息工程、软件工程等多学院多专业，形成优势互补。 ")]),a("div",{staticClass:"textimage"},[a("div",{staticClass:"img1"})]),a("span",[t._v(" 我们团队秉承“专业 真诚 务实 求真”的原则，致力于为客户提供最优质的产品和服务。我们的业务领域涵盖智能穿戴设备、智能义肢、及部分智能康复设备、外骨骼等机械方面，我们拥有一支充满创意和执行力的专业团队。 ")]),a("span",[t._v(" 我们的创意和执行力得到了老师和残疾人就业协会的的认可。但我们并不满足于此，我们始终坚持不断探索和创新，为客户提供更加卓越的产品和服务，帮助客户实现肢体上最大程度的恢复。 ")]),a("div",{staticClass:"textimages"},[a("div",{staticClass:"img2"}),a("div",{staticClass:"img3"}),a("div",{staticClass:"img4"})]),a("span",[t._v(" 我们的团队成员均具有丰富的专业基础知识。我们将通过不断的学习和提高，不断提升自己的专业素养和服务质量。我们相信，只有不断超越自己，才能为客户提供更加优质的服务。 ")]),a("span",[t._v(" 我们团队将以最真诚的态度和最专业的技能，为客户提供最优质的服务。我们相信，只有通过不断沟通和合作，才能实现客户的最大商业价值。 ")])])])])}],J={name:"usPage",data(){return{images:[{src:"http://scnrzy063.hn-bkt.clouddn.com/usBanner2.jpg"},{src:"http://scnrzy063.hn-bkt.clouddn.com/usBanner1.jpg"},{src:"http://scnrzy063.hn-bkt.clouddn.com/usBanner3.jpg"},{src:"http://scnrzy063.hn-bkt.clouddn.com/usBanner4.png"},{src:"http://scnrzy063.hn-bkt.clouddn.com/usBanner5.jpg"}]}}},M=J,F=(0,c.A)(M,E,L,!1,null,"597cbb25",null),D=F.exports,R=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"baseMessage"}},[a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[t._m(0),a("span",[a("van-icon",{attrs:{name:"records-o",size:"22",color:"#1989fa;"}}),t._v(" 基本信息 ")],1)]),a("van-divider"),a("form",[a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("div",{staticClass:"one"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您的年龄是? "),t.message[0].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message[0].data,expression:"message[0].data"}],attrs:{type:"text",placeholder:"请输入您的年龄"},domProps:{value:t.message[0].data},on:{input:function(a){a.target.composing||t.$set(t.message[0],"data",a.target.value)}}})]),a("div",{staticClass:"two"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您的性别是? "),t.message[1].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("select",{directives:[{name:"model",rawName:"v-model",value:t.message[1].data,expression:"message[1].data"}],staticStyle:{"background-color":"transparent"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.message[1],"data",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"0"}},[t._v("男")]),a("option",{attrs:{value:"1"}},[t._v("女")]),a("option",{attrs:{value:"2"}},[t._v("保密")])])])]),a("div",{staticClass:"right"},[t.fileListBool?a("van-tag",{staticStyle:{position:"absolute"},attrs:{type:"warning"}},[t._v("请上传")]):t._e(),a("van-uploader",{staticStyle:{position:"relative",bottom:"-20px",left:"-10px"},attrs:{multiple:"","upload-text":"您的残疾证明","max-count":1,"preview-size":"120"},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})],1)]),a("div",{staticClass:"three"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您的残疾类型是? "),t.message[2].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message[2].data,expression:"message[2].data"}],attrs:{type:"text",placeholder:"请输入您的残疾类型"},domProps:{value:t.message[2].data},on:{input:function(a){a.target.composing||t.$set(t.message[2],"data",a.target.value)}}})]),a("div",{staticClass:"four"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您目前的月收入是? "),t.message[3].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message[3].data,expression:"message[3].data"}],attrs:{type:"text",placeholder:'如"无收入"可填"无"'},domProps:{value:t.message[3].data},on:{input:function(a){a.target.composing||t.$set(t.message[3],"data",a.target.value)}}})]),a("div",{staticClass:"five"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您目前所在的地区是? "),t.message[4].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-field",{attrs:{readonly:"",clickable:"",name:"area",value:t.message[4].data,placeholder:"点击选择省市区"},on:{click:function(a){t.showArea=!0}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showArea,callback:function(a){t.showArea=a},expression:"showArea"}},[a("van-area",{attrs:{"area-list":t.areaList},on:{confirm:t.onConfirm,cancel:function(a){t.showArea=!1}}})],1)],1),a("div",{staticClass:"six"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您的残疾原因是? "),t.message[5].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("van-field",{staticStyle:{border:"1px solid rgba(0, 0, 0,.6)"},attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"150",placeholder:"请输入您残疾的原因","show-word-limit":""},model:{value:t.message[5].data,callback:function(a){t.$set(t.message[5],"data",a)},expression:"message[5].data"}})],1)])],1),a("div",{staticClass:"tapBar"},[a("div",{staticClass:"tapBarBox"},[a("button",{attrs:{disabled:t.isdisabled,type:"buttom"},on:{click:t.skip}},[t._v("下一页")])])])])},U=[function(){var t=this,a=t._self._c;return a("span",[t._v("1"),a("i",{staticStyle:{opacity:".5"}},[t._v("/4")])])}],Y=e(7020),G={data(){return{message:[{data:"",bool:!1},{data:"",bool:!1},{data:"",bool:!1},{data:"",bool:!1},{data:"",bool:!1},{data:"",bool:!1}],fileList:[],fileListBool:!1,isSkip:[],isdisabled:!1,timer:null,showArea:!1,areaList:Y.G}},methods:{skip(){return this.isSkip=JSON.parse(localStorage.getItem("baseMessage")),null===this.isSkip?(this.message.forEach((t=>{t.bool=!0})),this.isdisabled=!0,void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):this.message.find((t=>0===t.data.length))?(this.isdisabled=!0,this.message.forEach((t=>{0===t.data.length&&(t.bool=!0)})),void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):0===this.fileList.length?(this.isdisabled=!0,this.fileListBool=!0,void(this.timer=setTimeout((()=>{this.fileListBool=!1,this.isdisabled=!1}),2e3))):void this.$router.push("/survey/useSituation")},onConfirm(t){this.message[4].data=t.filter((t=>!!t)).map((t=>t.name)).join("/"),this.showArea=!1}},created(){localStorage.getItem("baseMessage")&&(this.message=JSON.parse(localStorage.getItem("baseMessage"))),localStorage.getItem("fileList")&&(this.fileList=JSON.parse(localStorage.getItem("fileList")))},watch:{message:{deep:!0,handler(t){localStorage.setItem("baseMessage",JSON.stringify(t))}},fileList:{deep:!0,handler(t){localStorage.setItem("fileList",JSON.stringify(t))}}}},H=G,K=(0,c.A)(H,R,U,!1,null,"1653b6f9",null),Q=K.exports,V=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"demand"}},[a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[t._m(0),a("span",[a("van-icon",{attrs:{name:"records-o",size:"22",color:"#1989fa;"}}),t._v(" 假肢需求与期望 ")],1)]),a("van-divider"),a("form",[a("div",{staticClass:"one"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[多选题]")]),t._v(" 您希望假肢具备哪些功能? "),t.message[0].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-checkbox-group",{model:{value:t.message[0].data,callback:function(a){t.$set(t.message[0],"data",a)},expression:"message[0].data"}},[a("van-checkbox",{attrs:{name:"1",shape:"square"}},[t._v("精准动作能力")]),a("van-checkbox",{attrs:{name:"2",shape:"square"}},[t._v("轻便耐用")]),a("van-checkbox",{attrs:{name:"3",shape:"square"}},[t._v("高度可定制")]),a("van-checkbox",{attrs:{name:"4",shape:"square"}},[t._v("感知反馈功能")]),a("van-checkbox",{attrs:{name:"5",shape:"square"}},[t._v("其他")])],1)],1),a("div",{staticClass:"two"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[多选题]")]),t._v(" 您对假肢的外观有何期望 "),t.message[1].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-checkbox-group",{model:{value:t.message[1].data,callback:function(a){t.$set(t.message[1],"data",a)},expression:"message[1].data"}},[a("van-checkbox",{attrs:{name:"1",shape:"square"}},[t._v("尽可能接近真实肢体")]),a("van-checkbox",{attrs:{name:"2",shape:"square"}},[t._v("简洁实用")]),a("van-checkbox",{attrs:{name:"3",shape:"square"}},[t._v("其他")])],1)],1),a("div",{staticClass:"three"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[单选题]")]),t._v(" 您是否考虑购买或更换假肢? "),t.message[2].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-radio-group",{staticClass:"three-radio-group",attrs:{direction:"horizontal"},model:{value:t.message[2].data,callback:function(a){t.$set(t.message[2],"data",a)},expression:"message[2].data"}},[a("van-radio",{attrs:{name:"1"}},[t._v("是")]),a("van-radio",{attrs:{name:"2"}},[t._v("否")])],1)],1),a("div",{staticClass:"four"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[多选题]")]),t._v(" 您认为购买或更换假肢的最大障碍是什么? "),t.message[3].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-checkbox-group",{model:{value:t.message[3].data,callback:function(a){t.$set(t.message[3],"data",a)},expression:"message[3].data"}},[a("van-checkbox",{attrs:{name:"1",shape:"square"}},[t._v("价格过高")]),a("van-checkbox",{attrs:{name:"2",shape:"square"}},[t._v("没有合适的型号或功能")]),a("van-checkbox",{attrs:{name:"3",shape:"square"}},[t._v("定制过程繁琐")]),a("van-checkbox",{attrs:{name:"4",shape:"square"}},[t._v("其他")])],1)],1),a("div",{staticClass:"five"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[单选题]")]),t._v(" 你能接受的假肢价格区间是? "),t.message[4].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-radio-group",{staticClass:"five-radio-group",model:{value:t.message[4].data,callback:function(a){t.$set(t.message[4],"data",a)},expression:"message[4].data"}},[a("van-radio",{attrs:{name:"1"}},[t._v("5000-8000元")]),a("van-radio",{attrs:{name:"2"}},[t._v("8000-12000元")]),a("van-radio",{attrs:{name:"3"}},[t._v("12000元-20000元")]),a("van-radio",{attrs:{name:"4"}},[t._v("20000-30000元")])],1)],1)])],1),a("div",{staticClass:"tapBar"},[a("div",{staticClass:"tapBarBox",staticStyle:{"border-right":"1px solid rgba(0, 0, 0,.2)",color:"#1989fa"}},[a("button",{on:{click:function(a){return t.$router.back()}}},[t._v("上一页")])]),a("div",{staticClass:"tapBarBox"},[a("button",{attrs:{disabled:t.isdisabled,type:"buttom"},on:{click:t.skip}},[t._v("下一页")])])])])},W=[function(){var t=this,a=t._self._c;return a("span",[t._v("3"),a("i",{staticStyle:{opacity:".5"}},[t._v("/4")])])}],X={name:"demandPage",data(){return{message:[{data:[],bool:!1},{data:[],bool:!1},{data:"",bool:!1},{data:[],bool:!1},{data:"",bool:!1}],isSkip:[],isdisabled:!1,timer:null}},methods:{skip(){return this.isSkip=JSON.parse(localStorage.getItem("demand")),null===this.isSkip?(this.message.forEach((t=>{t.bool=!0})),this.isdisabled=!0,void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):this.message.find((t=>0===t.data.length))?(this.isdisabled=!0,this.message.forEach((t=>{0===t.data.length&&(t.bool=!0)})),void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):void this.$router.push("/survey/support")}},created(){localStorage.getItem("demand")&&(this.message=JSON.parse(localStorage.getItem("demand")))},watch:{message:{deep:!0,handler(t){localStorage.setItem("demand",JSON.stringify(t))}}}},Z=X,tt=(0,c.A)(Z,V,W,!1,null,"03f3126a",null),at=tt.exports,et=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"support"}},[a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[t._m(0),a("span",[a("van-icon",{attrs:{name:"records-o",size:"22",color:"#1989fa;"}}),t._v(" 假肢服务与支持 ")],1)]),a("van-divider"),a("form",[a("div",{staticClass:"one"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[单选题]")]),t._v(" 您对目前的假肢服务与支持满意吗? "),t.message[0].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-radio-group",{staticClass:"one-radio-group",model:{value:t.message[0].data,callback:function(a){t.$set(t.message[0],"data",a)},expression:"message[0].data"}},[a("van-radio",{attrs:{name:"1"}},[t._v("非常满意")]),a("van-radio",{attrs:{name:"2"}},[t._v("比较满意")]),a("van-radio",{attrs:{name:"3"}},[t._v("一般")]),a("van-radio",{attrs:{name:"4"}},[t._v("不太满意")]),a("van-radio",{attrs:{name:"5"}},[t._v("非常不满意")])],1)],1),a("div",{staticClass:"two"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[多选题]")]),t._v(" 您希望获得哪些方面的假肢服务与支持? "),t.message[1].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-checkbox-group",{model:{value:t.message[1].data,callback:function(a){t.$set(t.message[1],"data",a)},expression:"message[1].data"}},[a("van-checkbox",{attrs:{name:"1",shape:"square"}},[t._v("假肢适配与调试")]),a("van-checkbox",{attrs:{name:"2",shape:"square"}},[t._v("假肢使用培训与指导")]),a("van-checkbox",{attrs:{name:"3",shape:"square"}},[t._v("假肢维修与保养")]),a("van-checkbox",{attrs:{name:"4",shape:"square"}},[t._v("心理支持与咨询服务")]),a("van-checkbox",{attrs:{name:"5",shape:"square"}},[t._v("其他")])],1)],1),a("div",{staticClass:"three"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[开放性问题]")]),t._v(" 您对假肢有哪些其他的建议或意见? "),t.message[2].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("van-field",{staticStyle:{border:"1px solid rgba(0, 0, 0,.6)"},attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"200",placeholder:"请输入您的建议或意见","show-word-limit":""},model:{value:t.message[2].data,callback:function(a){t.$set(t.message[2],"data",a)},expression:"message[2].data"}})],1),a("div",{staticClass:"four"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[开放性问题]")]),t._v(" 您认为社会应该如何更好地支持残疾人使用假肢? "),t.message[3].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("van-field",{staticStyle:{border:"1px solid rgba(0, 0, 0,.6)"},attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"200",placeholder:"请输入您的建议或意见","show-word-limit":""},model:{value:t.message[3].data,callback:function(a){t.$set(t.message[3],"data",a)},expression:"message[3].data"}})],1)])],1),a("div",{staticClass:"tapBar"},[a("div",{staticClass:"tapBarBox",staticStyle:{"border-right":"1px solid rgba(0, 0, 0,.2)",color:"#1989fa"}},[a("button",{on:{click:function(a){return t.$router.back()}}},[t._v("上一页")])]),a("div",{staticClass:"tapBarBox"},[a("button",{attrs:{disabled:t.isdisabled,type:"buttom"},on:{click:t.skip}},[t._v("提交")])])])])},st=[function(){var t=this,a=t._self._c;return a("span",[t._v("4"),a("i",{staticStyle:{opacity:".5"}},[t._v("/4")])])}],it={name:"supportPage",data(){return{message:[{data:"",bool:!1},{data:[],bool:!1},{data:"",bool:!1},{data:"",bool:!1}],isSkip:[],isdisabled:!1,timer:null}},methods:{skip(){return this.isSkip=JSON.parse(localStorage.getItem("demand")),null===this.isSkip?(this.message.forEach((t=>{t.bool=!0})),this.isdisabled=!0,void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):this.message.find((t=>0===t.data.length))?(this.isdisabled=!0,this.message.forEach((t=>{0===t.data.length&&(t.bool=!0)})),void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):(this.$toast.success("提交成功"),void(this.timer=setTimeout((()=>{this.$router.push("/frame/home")}),2e3)))}},created(){localStorage.getItem("support")&&(this.message=JSON.parse(localStorage.getItem("support")))},watch:{message:{deep:!0,handler(t){localStorage.setItem("support",JSON.stringify(t))}}}},ot=it,nt=(0,c.A)(ot,et,st,!1,null,"5a9ce8e4",null),rt=nt.exports,ct=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"useSituation"}},[a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[t._m(0),a("span",[a("van-icon",{attrs:{name:"records-o",size:"22",color:"#1989fa;"}}),t._v(" 肢体使用情况 ")],1)]),a("van-divider"),a("form",[a("div",{staticClass:"one"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[单选题]")]),t._v(" 请问您目前是否正在使用假肢 "),t.message[0].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-radio-group",{staticClass:"one-radio-group",attrs:{direction:"horizontal"},model:{value:t.message[0].data,callback:function(a){t.$set(t.message[0],"data",a)},expression:"message[0].data"}},[a("van-radio",{attrs:{name:"1"}},[t._v("是")]),a("van-radio",{attrs:{name:"2"}},[t._v("否")])],1)],1),a("div",{staticClass:"two"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),t._v(" 请问您使用假肢的时间有多长? "),t.message[1].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请输入")]):t._e()],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message[1].data,expression:"message[1].data"}],attrs:{type:"text",placeholder:"请输入您使用假肢的时间"},domProps:{value:t.message[1].data},on:{input:function(a){a.target.composing||t.$set(t.message[1],"data",a.target.value)}}})]),a("div",{staticClass:"three"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[多选题]")]),t._v(" 请问您穿戴假肢的目的是什么? "),t.message[2].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-checkbox-group",{model:{value:t.message[2].data,callback:function(a){t.$set(t.message[2],"data",a)},expression:"message[2].data"}},[a("van-checkbox",{attrs:{name:"1",shape:"square"}},[t._v("改善外观")]),a("van-checkbox",{attrs:{name:"2",shape:"square"}},[t._v("恢复自理能力")]),a("van-checkbox",{attrs:{name:"3",shape:"square"}},[t._v("提高运动能力")]),a("van-checkbox",{attrs:{name:"4",shape:"square"}},[t._v("增加工作机会")]),a("van-checkbox",{attrs:{name:"5",shape:"square"}},[t._v("提高生活质量")]),a("van-checkbox",{attrs:{name:"6",shape:"square"}},[t._v("促进社交活动")]),a("van-checkbox",{attrs:{name:"7",shape:"square"}},[t._v("减轻心理负担")])],1)],1),a("div",{staticClass:"four"},[a("h3",[a("span",{staticClass:"iconfont icon-bitian",staticStyle:{color:"#ec6661"}}),a("i",{staticStyle:{opacity:".5"}},[t._v("[单选题]")]),t._v(" 您对目前使用的假肢满意度如何 "),t.message[3].bool?a("van-tag",{attrs:{type:"warning"}},[t._v("请选择")]):t._e()],1),a("van-radio-group",{staticClass:"four-radio-group",model:{value:t.message[3].data,callback:function(a){t.$set(t.message[3],"data",a)},expression:"message[3].data"}},[a("van-radio",{attrs:{name:"1"}},[t._v("非常满意")]),a("van-radio",{attrs:{name:"2"}},[t._v("比较满意")]),a("van-radio",{attrs:{name:"3"}},[t._v("一般")]),a("van-radio",{attrs:{name:"4"}},[t._v("不太满意")]),a("van-radio",{attrs:{name:"5"}},[t._v("非常不满意")])],1)],1)])],1),a("div",{staticClass:"tapBar"},[a("div",{staticClass:"tapBarBox",staticStyle:{"border-right":"1px solid rgba(0, 0, 0,.2)",color:"#1989fa"}},[a("button",{on:{click:function(a){return t.$router.back()}}},[t._v("上一页")])]),a("div",{staticClass:"tapBarBox"},[a("button",{attrs:{disabled:t.isdisabled,type:"buttom"},on:{click:t.skip}},[t._v("下一页")])])])])},lt=[function(){var t=this,a=t._self._c;return a("span",[t._v("2"),a("i",{staticStyle:{opacity:".5"}},[t._v("/4")])])}],dt={data(){return{message:[{data:"",bool:!1},{data:"",bool:!1},{data:[],bool:!1},{data:"",bool:!1}],isSkip:[],isdisabled:!1,timer:null}},methods:{skip(){return this.isSkip=JSON.parse(localStorage.getItem("useSituation")),null===this.isSkip?(this.message.forEach((t=>{t.bool=!0})),this.isdisabled=!0,void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):this.message.find((t=>0===t.data.length))?(this.isdisabled=!0,this.message.forEach((t=>{0===t.data.length&&(t.bool=!0)})),void(this.timer=setTimeout((()=>{this.message.forEach((t=>{t.bool=!1})),this.isdisabled=!1}),2e3))):void this.$router.push("/survey/demand")}},created(){localStorage.getItem("useSituation")&&(this.message=JSON.parse(localStorage.getItem("useSituation")))},watch:{message:{deep:!0,handler(t){localStorage.setItem("useSituation",JSON.stringify(t))}}}},vt=dt,mt=(0,c.A)(vt,ct,lt,!1,null,"2ca2cd67",null),ut=mt.exports;s.Ay.use(v.Ay);const pt=new v.Ay({routes:[{path:"/",redirect:"/frame/home"},{path:"/frame/index",component:f,children:[{path:"/frame/home",component:O},{path:"/frame/scheme",component:P},{path:"/frame/us",component:D}]},{path:"/survey/index",component:S,children:[{path:"/survey/baseMessage",component:Q},{path:"/survey/demand",component:at},{path:"/survey/support",component:rt},{path:"/survey/useSituation",component:ut}]}]});var ht=pt,gt=e(3518);s.Ay.use(gt.Ay);var bt=new gt.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),ft=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"swiper"}},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3500,"indicator-color":"white"}},t._l(t.images,(function(t){return a("van-swipe-item",{key:t.src},[a("img",{staticClass:"exhibition",attrs:{src:t.src}})])})),1)],1)},_t=[],yt={name:"swiperPages",props:{images:{type:Array,required:!0}}},Ct=yt,xt=(0,c.A)(Ct,ft,_t,!1,null,"1c3abca5",null),kt=xt.exports;s.Ay.component("swiperPage",kt);e(3093);var St=e(5187),wt=(e(2460),e(2281)),At=(e(1754),e(6905)),Tt=(e(6117),e(7555)),Nt=(e(2636),e(6579)),Bt=(e(4534),e(5232)),Ot=(e(4368),e(8890)),$t=(e(2564),e(1510)),zt=(e(3050),e(3580)),qt=(e(7289),e(8933)),It=(e(4535),e(4694)),jt=(e(4650),e(3244)),Pt=(e(4420),e(6790)),Et=(e(3239),e(6749)),Lt=(e(6933),e(756)),Jt=(e(4510),e(1864)),Mt=(e(3212),e(6874)),Ft=(e(3425),e(6141)),Dt=(e(7231),e(1755));s.Ay.use(Dt.A),s.Ay.use(Ft.A),s.Ay.use(Mt.A),s.Ay.use(Jt.A),s.Ay.use(Lt.A),s.Ay.use(Et.A),s.Ay.use(Pt.A),s.Ay.use(jt.A),s.Ay.use(It.A),s.Ay.use(qt.A),s.Ay.use(zt.A),s.Ay.use($t.A),s.Ay.use(Ot.A),s.Ay.use(Bt.A),s.Ay.use(p.A),s.Ay.use(Nt.A),s.Ay.use(Tt.A),s.Ay.use(At.A),s.Ay.use(wt.A),s.Ay.use(St.A),s.Ay.config.productionTip=!1,new s.Ay({router:ht,store:bt,render:t=>t(d)}).$mount("#app")}},a={};function e(s){var i=a[s];if(void 0!==i)return i.exports;var o=a[s]={exports:{}};return t[s].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,s,i,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&o||n>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var l=i();void 0!==l&&(a=l)}}return a}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,i,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var i,o,n=s[0],r=s[1],c=s[2],l=0;if(n.some((function(a){return 0!==t[a]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(c)var d=c(e)}for(a&&a(s);l<n.length;l++)o=n[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},s=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(4136)}));s=e.O(s)})();
//# sourceMappingURL=app.f5936855.js.map