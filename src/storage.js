const STORAGE_KEY = 'todo-items'
export default {
  fetch () {
    let storge = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return storge.sort(this.sortItem)
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  sortItem (a, b) {
    if ((a.isDone && b.isDone) || (!a.isDone && !b.isDone)) {
      return 0
    } else if (a.isDone && !b.isDone) {
      return 1
    } else {
      return -1
    }
  }
}

