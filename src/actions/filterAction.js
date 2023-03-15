export const filterTypes = { checkbox: "CHECKBOX" };

export const filterActions = {
  checkbox(key, index) {
    return { type: filterTypes.checkbox, payload: [key, index] };
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
