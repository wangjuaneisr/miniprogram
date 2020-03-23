Component({

    properties: {
      paramA: Number,
      paramB: String,
    },
  
    methods: {
      onLoad: function() {
        console.log(this.data.paramA+'1211')// 页面参数 paramA 的值
        this.data.paramB // 页面参数 paramB 的值
      },
      onTap: function(){
          let sum = this.data.paramA+2;
            this.setData({
                paramA:sum
            })

        let myEventDetail = {'date':'2020'} // detail对象，提供给事件监听函数
        let myEventOption = {} // 触发事件的选项
        this.triggerEvent('myevent', myEventDetail, myEventOption)
      }
    }
  
  })