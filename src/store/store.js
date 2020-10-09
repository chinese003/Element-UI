import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store=new Vuex.Store({
    state:{//状态集合
        count :0,//具体的状态数据
        students:[
            {id:1,name:'a',age:18},
            {id:2,name:'b',age:30},
        ],
        user:{
            name:'zhangsan',
            sex:'male'
        }    
        
    },
    getters:{
        getStudents:state=>{
            return state.students.filter(s=>s.age>18)
        },

    },
    mutations:{//操作修改state(状态),不要在mutation中进行异步操作，否则vue-tools无法跟踪状态
        increment(state){
            state.count++;
        },
        updateInfo(state,age){
            Vue.set(state.user,'age',age)
        }

    },
    actions:{
        //context:上下文
        aUpdateInfo(context,name){
            let msg='响应成功'
            return new Promise((resolve,reject=>{
                setTimeout(() => {
                    context.commit(updateInfo,30)
                    resolve(msg)
                }, 1000);
            }))
        }
    }
})

//3.导出
export default store