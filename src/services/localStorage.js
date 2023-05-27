const LSGet = (key) => {
  return localStorage.getItem(key);
};

const LSSet = (key, value) => {
  localStorage.setItem(key, value);
};

export { LSGet, LSSet };
