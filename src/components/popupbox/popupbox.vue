<template>
<div class="alert-container" >
  <div class="alert-wrapper">
      <div class="header">
        
          {{popTitle}}
          <div></div>
        
      </div>
      <div class="content">
        <van-list>
          <van-radio-group v-model="radio">
          <van-cell v-for="index in 10" :key="index">
						<van-radio :name='index'  class="popup-radio" >单选框 {{index}}</van-radio>
				  </van-cell>
          </van-radio-group>
        </van-list>
      </div>
      <div class="footer">
        <div class="confirm-box">
          <button class="btn" @click="cliToComf">确认</button>
          <button class="btn" @click="cancel">取消</button>
			  </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
      popTitle : String
    },
    data(){
      return{
        
        radio:'1',
      }
    },
    computed: {
     
    },
    methods:{
      cliToComf(){
        this.$emit('closePop')
      },
      cancel(){
        this.$emit('closePop')
      }
    }
}
</script>

<style scoped lang='scss'>
.alert-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9000;
  background: rgba(0, 0, 0, .5);
  .alert-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 300px;
    transform: translate(-50% ,-50%);
    background-color: rgba(255, 255, 255, 1);
    border: 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      // border-bottom: 1px solid black;
      
      div {
        width: 100%;
        border-top: 1px solid black;
      }
      
    }
    .content {
      margin-top: 70px;
      // height: 80%;
      overflow-y: scroll;
      margin-bottom: 10px;
      flex: 1;

    }
    .footer {
      height: 40px;
      
      width: 100%;
      .confirm-box {
        float: right;
        margin-right: 15px;
        margin-top: 7px;
        .btn {
          border: none;
          outline: none;
          background-color: rgb(255, 255, 255);
          font-size: 16px;
          margin-right: 5px;
          &:hover {
            background-color: pink;
          }
        }
      }
    }
  }
}
</style>