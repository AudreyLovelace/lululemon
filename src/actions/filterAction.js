import axios from "axios";
const key =
  "mykey=UnxYe8qDRHZDXDCRlm/7k/AmqiMOZGSTUkG0l2ZXVBW2p%2BcEQJGJY2WberfSythE5v0OpktC6E92rssg4Gc4WA==";
const urlHead = "http://api-lulu.hibitbyte.com/";
const url = {
  getFilter: `${urlHead}product/filter?${key}`,
  allProduct: `${urlHead}product/allProducts?${key}&sortingId=`,
};
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ";

export const filterTypes = {
  checkbox: "CHECKBOX",
  initFilter: "INITFILTER",
  sort: "SORT",
};

export const filterActions = {
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
  filterProduct(dispatch, sortId, filterBody) {
    //npm install axios
    axios
      .get(url.allProduct + sortId, {
        headers: { authorization: authorization },
        body: filterBody,
      })
      .then((response) => {
        console.log(response);
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
