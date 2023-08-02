import {
    FIND_PRODUCTS_BY_CATEGORY_REQUEST,
    FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
    FIND_PRODUCTS_BY_CATEGORY_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
  } from "./ActionType";

  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteProduct:null,
  };

  const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case FIND_PRODUCTS_BY_CATEGORY_REQUEST:
        return { ...state, loading: true, error: null,products:[] };

      case FIND_PRODUCTS_BY_CATEGORY_SUCCESS:
        return { ...state, products: action.payload, loading: false };

      case FIND_PRODUCTS_BY_CATEGORY_FAILURE:
        return { ...state, loading: false, products:[], error: action.payload };
      
       
      default:
        return state;
    }
  };
  
  export default customerProductReducer;
  