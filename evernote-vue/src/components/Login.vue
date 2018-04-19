<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">


            <h3 v-on:click="showRegister()">创建账户</h3>
            <div v-bind:class="{show:isShowRegister}" class="register">
              <input type="text" v-model="register.username" placeholder="用户名">
              <input type="password" v-model="register.password" @keyup.enter="onRegister" placeholder="密码">
              <p v-bind:class='{error:register.isError}'>{{register.notice}}</p>
              <div class="button" @click="onRegister">创建账号</div>
            </div>


            <h3 @click="showLogin()">登录</h3>
            <div v-bind:class="{show:isShowLogin}" class="login">
              <input type="text" v-model='login.username' placeholder="输入用户名">
              <input type="password" v-model='login.password' @keyup.enter="onLogin"
               placeholder="密码">
              <p v-bind:class='{error:login.isError}'>{{login.notice}}</p>
              <div class="button" @click="onLogin">登录</div>



            </div>
            
          </div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShowLogin: true,
      isShowRegister: false,
      login:{
        username:'',
        password:'',
        notice:'输入用户名和密码',
        isError:false
      },
      register:{
        username:'',
        password:'',
        notice:'创建账号后，请记住用户名和密码',
        isError:false
      }

    }
  },

  methods:{
    
     showLogin(){
        this.isShowLogin = true
        this.isShowRegister = false
      },
      showRegister(){
        this.isShowLogin = false
        this.isShowRegister = true
      },
      onRegister(){
        if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)){
          this.register.isError = true
          this.register.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
          return
        }
        if(!/^.{6,16}$/.test(this.register.password)){
          this.register.isError = true
          this.register.notice = '密码长度为6~16个字符'
          return
        }
        this.register.isError = false
        this.register.notice = ''
        console.log(`start register..., username: ${this.register.username} , password: ${this.register.password}`)
      },
      onLogin(){
        if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)){
          this.login.isError = true
          this.login.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
          return
        }
        if(!/^.{6,16}$/.test(this.login.password)){
          this.login.isError = true
          this.login.notice = '密码长度为6~16个字符'
          return
        }
        this.login.isError = false
        this.login.notice = ''
        
        console.log(`start login..., username: ${this.login.username} , password: ${this.login.password}`)      
      }
  }
}




// export default {
//     data(){
//       return {
//         isShowLogin: true,
//         isShowRegister: false,
//         login: {
//           username: '',
//           password: '',
//           notice: '输入用户名和密码',
//           isError: false
//         },
//         register: {
//           username: '',
//           password: '',
//           notice: '创建账号后，请记住用户名和密码',
//           isError: false
//         }
//       }
//     },
//     methods: {
//       showLogin(){
//         this.isShowLogin = true
//         this.isShowRegister = false
//       },
//       showRegister(){
//         this.isShowLogin = false
//         this.isShowRegister = true
//       },
//       onRegister(){
//         if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)){
//           this.register.isError = true
//           this.register.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
//           return
//         }
//         if(!/^.{6,16}$/.test(this.register.password)){
//           this.register.isError = true
//           this.register.notice = '密码长度为6~16个字符'
//           return
//         }
//         this.register.isError = false
//         this.register.notice = ''
//         console.log(`start register..., username: ${this.register.username} , password: ${this.register.password}`)
//       },
//       onLogin(){
//         if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)){
//           this.login.isError = true
//           this.login.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
//           return
//         }
//         if(!/^.{6,16}$/.test(this.login.password)){
//           this.login.isError = true
//           this.login.notice = '密码长度为6~16个字符'
//           return
//         }
//         this.login.isError = false
//         this.login.notice = ''
        
//         console.log(`start login..., username: ${this.login.username} , password: ${this.login.password}`)      
//       }
//     }}
  
</script>

<style lang='less' scoped>
.modal-mask {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);

  .modal-container {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background-color: #fff;
    border-radius: 15px;

    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .main {
      flex: 1;
      border-radius: 15px 0 0 15px;

      background: #36bc64
        url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) center
        center no-repeat;
      background-size: contain;
    }
    .form {
      width: 270px;
      border-left: 1px solid #ccc;

      h3 {
        padding: 15px 20px;
        font-weight: normal;
        font-size: 16px;
        // border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
      h3:nth-of-type(2) {
        border-top: 1px solid #eee;
      }
      .register,
      .login {
        padding: 0px 20px;
        height: 0;
       overflow: hidden;
       transition: height .4s;
        &.show {
                height: 193px;
              }

        input {
          display: block;
          width: 100%;
          height: 35px;
          line-height: 35px;
          padding: 0 6px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 14px;
          margin-top: 10px;
        }
        input:focus {
          border: 3px solid #9dcaf8;
        }
        p {
          font-size: 12px;
          margin-top: 10px;
          color: #444;
        }
        .button {
          background-color: #2bb964;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-weight: bold;
          color: #fff;
          border-radius: 4px;
          margin-top: 18px;
          cursor: pointer;
        }
      }
      
      .error {
        color: red;
      }
    }
  }
}
</style>