class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return storage;
  }
  addItem(newItem) {
    this.items.push(newItem);
    return this.items;
  }
  removeItem(itemToRemove) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === itemToRemove) {
        this.items.splice(i, 1);
        return this.items;
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(storage.items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
