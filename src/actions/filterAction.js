export const filterTypes = { actionName: "typename" };

export const actions = {
  actionName(word) {
    return { types: types.actionName, payload: word };
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
