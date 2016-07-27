/**
 * Created by chi on 7/27/16.
 */
import _products from './products.json'

const TIMEOUT = 100;

export default {
    getProducts(cb, timeout){
        setTimeout(()=>{
            cb(_products);
        }, timeout || TIMEOUT);
    },

    buyProducts(payload, cb, timeout){
        setTimeout(()=>{
            cb();
        }, timeout || TIMEOUT);
    }
}