
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//最終的なデータの持ち方として、infos[day1{人数、部屋、オプション有無}, day2{},...]のように管理すると
//v-for {day in infos}のように回せて綺麗か。day classを作っておいて、宿泊日数分だけインスタンスを作るイメジ

// class guestsInfo{
//     constructor(adults,childs,roomType,breakfast){

//     }
// }

const store = new Vuex.Store({
    
  //state:コンポーネントでいうdata
  //今は雲井専門の情報を変数で持っているが、kumoiオブジェクトとしてstate.kumoi.hoge みたいに使うと汎用化できる？
  //あるいは今のように汎用的な変数名のまま、ホテルidに応じてサーバからデータを取れば良いか

  state: {

    //ホテル情報
    hotelName: 'ホテルクモイ',
    introMessage: 'ホテルクモイは、古くからこの地に続く廃温泉旅館を引き継いで生まれたホテルです。     私たちは、その土地の空気感を落とし込んだホテルづくりをすることを何よりも大事にしています。ただの北海道らしさではなく、',
    introAddMessage: 'その中の層雲峡というまちが持つ気配にフォーカスしたコンセプトを作ろうと考えました。​たどり着いたのは「Vapor」。 立ち上がる湯気、切り立った崖にかかる雲、漂う霧、滝飛沫。 層雲峡らしい景色の中にはいつも水の煙がたゆたっていました。 姿を変え、目をくらませながら私たちを異世界へと誘うこの街の雰囲気を、HOTEL KUMOIで感じてください。',

    //宿泊人数
    message: '宿泊人数を登録してください',
    adultsNumber:1,//初期人数
    childsNumber:0,//初期人数
    UPPER_ADULT:4,//大人上限人数
    LOWER_ADULT:0,//大人下限人数
    UPPER_CHILD:3,//小人上限人数
    LOWER_CHILD:0,//小人下限人数

    //宿泊日数
    stayNights:0,

    //宿泊単価 以下の２変数を一般に用い、choseRoomで選択した部屋に応じて値を設定する
    adultUnitPrice:0,
    childUnitPrice:0,

    roomType:``,

    ROOM_A_ADULT:10000,
    ROOM_B_ADULT:12000,
    ROOM_A_CHILD:7000,
    ROOM_B_CHILD:6000,

    //宿泊金額
    addPrice:0,//オプション
    totalPrice: 0,//全ての合計金額
  },

  //getters:コンポーネントでいうcomputed的なもの
  getters:{
    //messageを使用するgetter
    hotelName(state) {
        return state.hotelName
    },
    introMessage(state) {
        return state.introMessage
    },
    introAddMessage(state) {
        return state.introAddMessage
    },    
    message(state) {
        return state.message
    },
    calcPrice(state){ //あくまでgetterなので、最終的にはmutationで再計算させる必要があることに注意
        return (state.adultsNumber * state.adultUnitPrice + state.childsNumber * state.childUnitPrice) * state.stayNights + state.addPrice 
    },
    childsNumber(state) {
        return state.childsNumber
    },
    adultsNumber(state) {
        return state.adultsNumber
    },
    totalPrice(state){
        return state.totalPrice
    },
    displayNights(state){
        return state.stayNights
    },
    roomType(state){
        return state.roomType
    },
    adultUnitPrice(state){
        return state.adultUnitPrice
    },
    childtUnitPrice(state){
        return state.childUnitPrice
    },
},

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setMessage(state,payload){
        state.message = payload.message
    },
    calcPrice(state){
        state.totalPrice = state.adultsNumber * state.adultUnitPrice + state.childsNumber * state.childUnitPrice + state.addPrice
    },
    plusAdult(state){
        if (state.adultsNumber < state.UPPER_ADULT){
            state.adultsNumber++;
            state.message='宿泊人数を登録してください';
        }else{
            state.message='大人の上限人数です'
        }   
    },
    minusAdult(state){
        if (state.adultsNumber > state.LOWER_ADULT){
            state.adultsNumber--;
            state.message='宿泊人数を登録してください';
        }else{
            state.message='これ以上減らせません'
        }
    },    
    plusChild(state){
        if (state.childsNumber < state.UPPER_CHILD){
            state.childsNumber++;
            state.message='宿泊人数を登録してください';
        }else{
        state.message='小人の上限人数です'
        }
    },   
    minusChild(state){
        if (state.childsNumber > state.LOWER_CHILD){
            state.childsNumber--;
            state.message='宿泊人数を登録してください';
        }else{
        state.message='これ以上減らせません'
        }
    },
    setNights(state,payload){
        state.stayNights = payload;
    },
    
    roomIsA(state){
        state.roomType = 'A';
        state.adultUnitPrice = state.ROOM_A_ADULT;
        state.childUnitPrice = state.ROOM_A_CHILD;
    },
    roomIsB(state){
        state.roomType = 'B';
        state.adultUnitPrice = state.ROOM_B_ADULT;
        state.childUnitPrice = state.ROOM_B_CHILD;
    }    
  },       
  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    doUpdate({commit}, message){
      commit('setMessage',{message})
    }
  }
})
export default store