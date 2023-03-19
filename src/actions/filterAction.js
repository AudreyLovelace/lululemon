import axios from "axios";
const key =
  "mykey=UnxYe8qDRHZDXDCRlm/7k/AmqiMOZGSTUkG0l2ZXVBW2p%2BcEQJGJY2WberfSythE5v0OpktC6E92rssg4Gc4WA==";
const urlHead = "http://api-lulu.hibitbyte.com/";
const url = {
  getFilter: `${urlHead}product/filter?${key}`,
  allProduct: `${urlHead}product/allProducts?`,
  sortingId: "sortingId",
};
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ";

export const filterTypes = {
  checkbox: "CHECKBOX",
  initFilter: "INITFILTER",
  sort: "SORT",
  initProducts: "INITPRODUCTS",
  moreProducts: "MOREPRODUCTS",
};

export const filterActions = {
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
        console.log(response.data.rs);
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
        // console.log(response);
        // console.log(response.data.rs);

        if (response.statusText === "OK") {
          const products = response.data.rs.products;
          // console.log(products);
          // const uniqueProducts = products.filter((item, index) => {
          //   const id = item.productId;
          //   const i = products.findIndex((e) => {
          //     // console.log(e, "a");
          //     return e.productId === id;
          //   });
          //   // console.log(index, i);
          //   return index === i;
          // });
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

export const helpers = {
  firstLetter(sententce) {
    let a = sententce.split(" ");
    a = a.map((e, index) => (e = e.charAt(0).toUpperCase() + e.slice(1)));
    a = a.join(" ");
    console.log(a);
    return a;
  },
};

// console.log(filter);
