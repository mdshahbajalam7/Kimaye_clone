import axios from "axios";
export const GETDATA = "GETDATA";
export const DESDATA = "DESDATA";
export const FILTER = "FILTER";
export const CARTDATA = "CARTDATA"
export const SETPRICE = "SETPRICE";
export const SETCOUNT= "SETCOUNT"
export const getdata = (payload) => ({
  type: GETDATA,
  payload,
});

export const setCount = (payload) => ({
  type: SETCOUNT,
  payload,
});

export const desdata = (payload) => ({
  type: DESDATA,
  payload,
});

export const filterdata = (payload) => ({
  type: FILTER,
  payload,
});

export const cartdata = (payload)=>({
  type : CARTDATA,
  payload,
})
export const setPrice = (payload) => ({
  type: SETPRICE,
  payload,
})
// ----------------network calls -------------------------------------//
export const fetchdata = () => async (dispatch) => {
  let res = await axios.get("https://silver-donkey-coat.cyclic.app/products/get");
  dispatch(getdata(res.data));
};

export const fetchdes = (payload) => async (dispatch) => {
  let res = await axios.get(`https://silver-donkey-coat.cyclic.app/products/get/${payload}`);
  dispatch(desdata(res.data));
};

export const fetchfilter = (payload) => async (dispatch) => {
  let res = await axios.get(
    `https://silver-donkey-coat.cyclic.app/products/get/category/${payload}`
  );
  dispatch(filterdata(res.data));
};

export const incordec = (payload, count) => async (dispatch) => {
  let res = await axios.patch(
    `https://silver-donkey-coat.cyclic.app/products/patch/qty?id=${payload}`,
    {
      count: count,
    }
  );
  dispatch(fetchdes(payload));
};

export const fetchcart=()=>async (dispatch)=>{
let res = await axios.get("https://silver-donkey-coat.cyclic.app/cart/get") 
console.log(res.data)
dispatch(cartdata(res.data))
}

export const AddToCart = (payload) => async (dispatch)=>{
  let res = await axios.post(`https://silver-donkey-coat.cyclic.app/cart/post`,payload)
  console.log(res)
  dispatch(fetchcart())
}

export const deletecart = (payload)=> async (dispatch)=>{
let res = await axios.delete(`https://silver-donkey-coat.cyclic.app/cart/delete/${payload}`)
console.log(res)
dispatch(fetchcart())
}

export const cartqty = (payload,count) => async (dispatch)=>{
let res = await axios.patch(`https://silver-donkey-coat.cyclic.app/cart/patch/qty?id=${payload}`,{
  count : count
})
console.log(res)
dispatch(fetchcart())
}