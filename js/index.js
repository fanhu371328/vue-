

(function(){
	//提交留言
	new Vue({
  		el:'#app',
  		data:{ //数据
  			msg:'',
  			msg1:'',
  			messages:[],
  			now:-1
  		},
  		methods:{ //方法 这里的this就是new的vue对象
  			get:function(e){
  				//保存输入框中输入的内容
  				this.msg1=this.msg;
  				if(e.keyCode == 38 || e.keyCode == 40){
  					return;
  				}
  				if(e.keyCode == 13){
  					window.open('https://www.baidu.com/s?wd='+this.msg);
  					this.msg='';
  					return;
  				}
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ this.msg,{
					jsonp:'cb',
				}).then(function(data){
					this.messages=data.data.s;
				},function(){
//					console.log("erro");
				})
			},
			open:function(){
				window.open('https://www.baidu.com/s?wd='+this.msg);
				this.msg='';
			},
			changeDown:function(){
				this.now++;
				if(this.now >= this.messages.length){
					this.now = -1
				}
				this.msg=this.messages[this.now];
			},
			changeUp:function(){
				this.now--;
				if(this.now <= -2){
					this.now = this.messages.length -1 ;
				}
				this.msg=this.messages[this.now];
			},
			change:function(index){
				this.now=index;
				this.msg=this.messages[this.now];
			}
  		}
  	})
	
//百度搜索接口
//	https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jshow
//  https://www.baidu.com/s?wd=s
})()
