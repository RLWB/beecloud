<template>
  <div class="login">
      <nav-bar :title='title'></nav-bar>
      <div class="logo-wrap">
          <img src="../assets/img/ic_logo.png" alt="">
      </div>
      <div class="content">
          <ul class="content-list">
              <li class="content-item">
                 <img v-if="phone.length<=0" class="item-icon" src="../assets/img/ic_phone.png" alt=""> 
                 <img v-else class="item-icon" src="../assets/img/ic_phone_red.png" alt=""> 
                 <input type="text" placeholder="手机号码" v-model="phone" @focus="focusChangeClearStatus('phone','phoneClear')" @blur="blurChangeClearStatus('phoneClear')">
                 <img :style="{'visibility': phoneClear ? 'visible' : 'hidden'}" class="item-clear" src="../assets/img/ic_clear.png" alt="" @touchstart="clearInput('phone')">
                 <img class="item-last" src="../assets/img/ic-down-arr.png" alt=""  v-if="phoneList.length>0" @click="showOrHide">
              </li>
               
              <li class="content-item">
                 <img v-if="password.length<=0" class="item-icon item-lock" src="../assets/img/ic_lock.png" alt=""> 
                 <img v-else class="item-icon item-lock" src="../assets/img/ic_lock_red.png" alt=""> 
                 <input v-bind="{type:!eyeStatus?'password': 'text' }" placeholder="请输入密码" v-model="password" @focus="focusChangeClearStatus('password','passwordClear')" @blur="blurChangeClearStatus('passwordClear')">
                 <img :style="{'visibility': passwordClear ? 'visible' : 'hidden'}" class="item-clear" src="../assets/img/ic_clear.png" alt="" @touchstart="clearInput('password')">
                 <img class="item-last" v-bind="{src: !eyeStatus ? require('../assets/img/ic_eye_close.png'):require('../assets/img/ic_eye_open.png')}" alt="" @click="changeEyes">
              </li>
              <li v-if="hideList">
                <ul class="phone-list">
                    <li v-for="(item, index) in phoneList" :key="index" @click="choosePhone(index)">{{item.loginName}}</li>
                </ul>
              </li>
          </ul>
          <div class="btn default" v-if="phone.length>0&&password.length>0" @click='logIn'>登录</div>
          <div class="btn" v-else>登录</div>
      </div>
      <loading :loading="loading"></loading>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import axios from 'axios'
export default {
    components:{
        NavBar: NavBar
    },
    data() {
        return {
            title: '登录',
            phone: '',
            password: '',
            phoneClear: false,
            passwordClear: false,
            eyeStatus: false,
            phoneList: [],
            hideList: false,
            loading: false
        }
    },
    watch:{
        phone(val) {
            if(val.length > 0) {
                this.phoneClear = true;
            }else {
                this.phoneClear = false;
            }
        },
        password(val) {
            if(val.length > 0) {
                this.passwordClear = true;
            }else {
                this.passwordClear = false;
            }
        }
    },
    methods: {
        focusChangeClearStatus(val,clear) {
            if(this[val].length>0) {
                this[clear] = true
            }else {
                this[clear] = false
            }
        },
        blurChangeClearStatus(clear) {
            this[clear] = false;
        },
        changeClearStatus(val,clear) {
            if(this[val].length > 0) {
                this[clear] = true;
            }else {
                this[clear] = false;
            }
            
        },
        clearInput(val) {
            this[val] = ''
        },
        changeEyes() {
            this.eyeStatus = !this.eyeStatus
        },
        showOrHide() {
            this.hideList = !this.hideList
        },
        logIn() {
            if(!(/^1[123456789]\d{9}$/.test(this.phone))) {
                alert('手机号格式错误')
            }else if(this.password.length<8) {
                alert('密码格式错误')
            }else {
                this.loading = true
                axios.post('https://web-gateway.newbeescm.com/b2b-app-web/user/login',{}, {
                    params: {
                        loginName: this.phone,
                        password: this.password
                    }
                })
                .then( res => {
                    if(res.data.status.statusCode === 0) {
                        this.loading = false
                        this.changePhoneList()
                        alert('登陆成功')
                    }
                })
                .catch(err => {
                    this.loading = false
                })
            }
        },
        changePhoneList() {
            for(let i = 0; i < this.phoneList.length; i ++) {
                if(this.phoneList[i].loginName == this.phone) {
                    this.phoneList.splice(i, 1)
                    break;
                }
            }
            this.phoneList.unshift({
                loginName: this.phone,
                password: this.password
            })
           if(this.phoneList.length > 10) {
               this.phoneList.splice(10, this.phoneList.length - 10)
           } 
           localStorage.setItem('phoneList', JSON.stringify(this.phoneList))
        },
        choosePhone(num) {
            this.phone = this.phoneList[num].loginName
            this.password = this.phoneList[num].password
            this.showOrHide()
        }

    },
    mounted() {
        this.phoneList = localStorage.getItem('phoneList')?JSON.parse(localStorage.getItem('phoneList')):[]
    },
}

</script>
<style scoped lang="scss">
.logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.7rem;
    margin-top: 0.51rem;
    margin-bottom: 0.67rem;
    img {
        width: 0.7rem;
        height: 0.35rem;
    }
}
.content {
        padding: 0 .33rem;
    .content-list {
        box-sizing: border-box;
        position: relative;
        .content-item {
            position: relative;
            display: flex;
            align-items: center;
            font-size: 0.16rem;
            color: #333333;
            margin-bottom: 0.08rem;
            .item-icon {
                width: 0.18rem;
                height: 0.16rem;
                margin-right: 0.17rem;
            }
            .item-lock {
                width: 0.14rem;
                margin-left: 0.04rem;
            }
            input {
                margin-left: 0;
                flex: 1;
                position: relative;
                border: none;
                appearance: none;
                border: 0;
                outline: none;
                font-size: 0.16rem;
                color: #333!important;
            }
            .item-clear {
                width: 0.42rem;
                height: 0.42rem;
                padding: 0.15rem;
                box-sizing: border-box;
            }
            .item-last {
                width: 0.42rem;
                height: 0.42rem;
                padding: 0.15rem;
                box-sizing: border-box;

            }
            &::after {
                position: absolute;
                content: "";
                left: 0;
                width: 100%;
                height: 1px;
                background: #ccc;
                bottom: 0;
                transform: scale(1, 0.5);
            }
        }
        .phone-list {
            position: absolute;
            top: 0.43rem;
            left: 0;
            width: 100%;
            max-height: 1.52rem;
            background: #FFFFFF;
            box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,0.20);
            padding: 0.07rem 0.29rem;
            display: flex;
            flex-direction: column;
            font-size: 0.16rem;
            color: #333;
            box-sizing: border-box;
            li {
                padding: 0.09rem 0.03rem;
            }
        }
    }
    .btn {
        background: rgba(221,51,51,0.50);
        border-radius: 0.04rem;
        font-size: 0.18rem;
        color: #fff;
        height: 0.44rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.21rem;
    }
    .default {
        background: rgba(221,51,51,1);
    }
}
.shooting-star-leave-to, .shooting-star-enter {
    transform: translateX(150px) rotate(30deg);
    opacity: 0
}
.shooting-star-enter-active, .shooting-star-leave-active {
    transition: all 0.5s ease;
}
</style>