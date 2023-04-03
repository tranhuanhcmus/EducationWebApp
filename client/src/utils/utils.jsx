const utils = {
  checkUser: (user) => {
    return JSON.stringify(user) !== "{}";
  },
};
export default utils;
