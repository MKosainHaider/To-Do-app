export function getItemsFromLocalStorage(key) {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
}

export function setItemsToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
