import {
    FIND_PRODUCTS_BY_CATEGORY_REQUEST,
    FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
    FIND_PRODUCTS_BY_CATEGORY_FAILURE,
    // FIND_PRODUCT_BY_ID_REQUEST,
    // FIND_PRODUCT_BY_ID_SUCCESS,
    // FIND_PRODUCT_BY_ID_FAILURE,
    // CREATE_PRODUCT_REQUEST,
    // CREATE_PRODUCT_SUCCESS,
    // CREATE_PRODUCT_FAILURE,
    // UPDATE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_SUCCESS,
    // UPDATE_PRODUCT_FAILURE,
    // DELETE_PRODUCT_REQUEST,
    // DELETE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_FAILURE,
  } from "./ActionType";

  import api, { API_BASE_URL } from "../../../config/api";

  
export const findProducts = (reqData) => async (dispatch) => {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;
  
    try {
      dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
      const token=localStorage.getItem("jwt")
      // post(`${API_BASE_URL}/auth/signin`, userData);
      const { data } = await api.get(
        `${API_BASE_URL}/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        ,{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        }
      );
  
      console.log("get product by category - ", data);
      dispatch({
        type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };