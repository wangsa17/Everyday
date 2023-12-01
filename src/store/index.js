import products from '../mock/products.json';
import { createStore } from 'vuex';

export default createStore({
    state: {
        products: [],
        productDetail: [],
        cart: [],
        payment: []
    },

    getters: {
        products: state => state.products,
        productDetail: state => state.productDetail,
        cart: state => state.cart,
        payment: state => state.payment,
    },
    actions: {
        getProducts({ commit }){
            commit("getProductData");
        },
        detailProduct({ commit }, item){
            commit("detailItemProduct", item);
        },
        addToCart({ commit }, item){
            commit("addItemToCart", item);
        },
        addQty({ commit }, id){
            commit("addQty", id);
        },
        reduceQty({ commit }, id){
            commit("reduceQty", id);
        },
        removeItem({ commit }, id){
            commit("removeItem", id);
        },
        emptyCart({ commit }){
            commit("emptyCart");
        },
        processToHomeLogin({commit}, id){
            commit("processToHomeLogin");
        },
        processCheckout({ commit }, item){
            commit("processItemCheckout");
        },
        subTotalPrice({commit}, item ){
            commit("subTotalPrice");
        }
    },
    mutations: {
        getProductData(state){
            state.products = products;
        },
        detailItemProduct(state, item){
            return state.productDetail.find(product => product.id === item.id);
        },
        addItemToCart(state, item){
            const addedItem = state.cart.find(product => product.id === item.id);
            if (addedItem){
                addedItem.qty++;
            } else{
                state.cart.push({ ...item, qty: 1 });
            }
        },
        addQty(state, id){
            const currentItem = state.cart.find(product => product.id === id);
            currentItem.qty++;
        },
        reduceQty(state, id){
            const currentItem = state.cart.find(product => product.id === id);
            if (currentItem && currentItem.qty > 1){
                currentItem.qty--;
            } else {
                state.cart = state.cart.filter(product => product.id !== id);
            }
        },
        removeItem(state, id){
            state.cart = state.cart.filter(product => product.id !== id);
        },
        emptyCart(state){
            state.cart = [];
        },
        processToHomeLogin(state){
            state.cart = [];
        },
        processItemCheckout(state){
            state.payment = [];
        },
        subTotalPrice(state, price, id){
            const subPrice = state.cart.find(product => product.price === item.price);
            const subTotal = state.cart.find(product => product.id === id);
            subPrice * subTotal.qty;
        }
    },
});