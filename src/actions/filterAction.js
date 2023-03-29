import axios from "axios";
const key =
  "mykey=UnxYe8qDRHZDXDCRlm/7k/AmqiMOZGSTUkG0l2ZXVBW2p%2BcEQJGJY2WberfSythE5v0OpktC6E92rssg4Gc4WA==";
const urlHead = "http://api-lulu.hibitbyte.com/";
const url = {
  getFilter: `${urlHead}product/filter?${key}`,
  allProduct: `${urlHead}product/allProducts?`,
  sortingId: "sortingId",
  fetchOne: `${urlHead}product/`,
};
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ";

export const filterTypes = {
  checkbox: "CHECKBOX",
  initFilter: "INIT_FILTER",
  sort: "SORT",
  initProducts: "INIT_PRODUCTS",
  moreProducts: "MORE_PRODUCTS",
  searchProducts: "SEARCH_PRODUCTS",
  clearSearchHistory: "CLEAR_SEARCH_HISTORY",
  searchLink: "SEARCH_LINK",
  clearSearchLink: "CLEAR_SEARCH_LINK",
};

export const filterActions = {
  fetchOne(productId) {
    let request = {
      method: "get",
      url: "http://api-lulu.hibitbyte.com/product/prod10550089?" + key,
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ",
      },
    };
    //npm install axios
    console.log(request.url);

    axios
      .get(request)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
  clearSearchLink() {
    return { type: filterTypes.clearSearchLink };
  },
  searchLink(words) {
    return { type: filterTypes.searchLink, payload: words };
  },
  clearSearchHistory() {
    return { type: filterTypes.clearSearchHistory };
  },
  searchProducts(products, pageInfo, keyword) {
    return {
      type: filterTypes.searchProducts,
      payload: [products, pageInfo, keyword],
    };
  },
  moreProducts(products) {
    return { type: filterTypes.moreProducts, payload: products };
  },
  initProducts(products) {
    return {
      type: filterTypes.initProducts,
      payload: products,
    };
  },
  sort(id) {
    return { type: filterTypes.sort, payload: id };
  },
  checkbox(key, index) {
    return { type: filterTypes.checkbox, payload: [key, index] };
  },
  initFilter(filter) {
    return { type: filterTypes.initFilter, payload: filter };
  },
  initPage(dispatch) {
    axios
      .get(url.getFilter, { headers: { authorization: authorization } })
      .then((response) => {
        // console.log(response.data.rs);
        dispatch(filterActions.initFilter(response.data.rs));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
  filterProduct(dispatch, sortId, filterBody, page = 1) {
    //npm install axios
    // console.log(filterBody);
    // console.log("search product");
    let request = {
      method: "post",
      url: url.allProduct + key,
      params: { sortingId: sortId, page: page },
      headers: { authorization: authorization },
      data: filterBody,
    };

    axios(request)
      .then((response) => {
        if (response.statusText === "OK") {
          const products = response.data.rs.products;
          if (page === 1) {
            dispatch(
              filterActions.initProducts([
                products,
                response.data.rs.pageParams,
              ])
            );
          } else {
            dispatch(
              filterActions.moreProducts([
                products,
                response.data.rs.pageParams,
              ])
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
};

// console.log(filter);
