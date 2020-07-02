function todo(containerId) {
  const store = {
    // todos 为 todo item 列表
    todos: [
    ],
    // visibility Filter
    // 显示todos列表时的过滤条件
    // 有三个值可选：
    // SHOW_ALL: 显示全部
    // SHOW_ACTIVE: 显示未完成
    // SHOW_COMPLETED: 显示已完成
    visibilityFilter: 'SHOW_ALL',
    addTodo(text) {
      const todo = {
        id: ++nextTodoId,
        text,
        completed: false, // 新添加的todo，completed值是false
      }
      this.todos.push(todo)
    },
    toggleTodo(id) {
      let find = this.todos.find((todo) => todo.id === id)
      find.completed = !find.completed
    },
    setVisibilityFilter(filter) {
      this.visibilityFilter = filter
    },
    // 工具方法
    getVisibleTodos(filter) {
      switch (filter) {
        case 'SHOW_ALL':
          return this.todos
        case 'SHOW_ACTIVE':
          return this.todos.filter((todo) => !todo.completed)
        case 'SHOW_COMPLETED':
          return this.todos.filter((todo) => todo.completed)
      }
    }
  }

  let nextTodoId = 10
  const app = {
    // 初始化，插入UI
    init(containerId) {
      this.container = document.getElementById(containerId)
      const html = `
      <form>
        <input name='todoText' type='text'/>
        <button>添加</button>
      </form>

      <ul class='list'>
      </ul>

      <p>
        查看：

        <span class='filter-link current all' filter-value='SHOW_ALL'>
          <span class='active'>全部</span>
          <a class='not-active' href='#'>全部</a>
        </span>,

        <span class='filter-link active' filter-value='SHOW_ACTIVE'>
          <span class='active'>未完成</span>
          <a href='#'>未完成</a>
        </span>,

        <span class='filter-link completed' filter-value='SHOW_COMPLETED'>
          <span class='active'>已完成</span>
          <a class='not-active' href='#'>已完成</a>
        </span>

      </p>
    `
      this.container.innerHTML = html

      this.bindHanlders()
      this.render()
    },
    // 绑定事件
    bindHanlders() {
      this.form = this.container.querySelector('form')
      this.form.addEventListener('submit', this.handleFormSubmit.bind(this))

      this.filterLinks = this.container.querySelectorAll('.filter-link')
      this.filterLinks.forEach((filterLink) => {
        filterLink.addEventListener(
          'click',
          this.handleFilterLinkClick.bind(this, filterLink)
        )
      })

      this.list = this.container.querySelector('.list')
      this.list.addEventListener('click', this.handleTodoItemClick.bind(this))
    },
    // 表单提交时
    handleFormSubmit(e) {
      e.preventDefault()
      let text = this.form.todoText.value.trim()
      if (text.length > 0) {
        store.addTodo(text)
      }
      this.form.todoText.value = ''
      this.form.todoText.focus()
      this.render()
    },
    // 过滤条件点击时
    handleFilterLinkClick(linkElement, e) {
      e.preventDefault()
      const filter = linkElement.getAttribute('filter-value')
      store.setVisibilityFilter(filter)
      this.render()
    },
    handleTodoItemClick(e) {
      if (e.target.tagName !== 'LI') return

      const li = e.target
      let id = +li.getAttribute('todo-id')
      store.toggleTodo(id)
      this.render()
    },
    renderTodoList() {
      let todos = store.getVisibleTodos(store.visibilityFilter)
      let content = todos
        .map(
          (todo) => `
          <li style='text-decoration: ${
            todo.completed ? 'line-through' : 'none'
          }' todo-id='${todo.id}'>
            ${todo.text}
          </li>
        `
        )
        .join('')
      this.list.innerHTML = content
    },
    renderFooter() {
      this.filterLinks.forEach((filterLink) => {
        filterLink.classList.remove('current')
        filterLink.querySelector('a').classList.remove('not-active')
      })

      let currentLink = Array.prototype.slice
        .call(this.filterLinks)
        .find(
          (filterLink) =>
            filterLink.getAttribute('filter-value') === store.visibilityFilter
        )
      currentLink.classList.add('current')
      currentLink.querySelector('a').classList.add('not-active')
    },
    // 更新界面
    render() {
      this.renderTodoList()
      this.renderFooter()
    },
  }

  function htmlEncode(text) {
    const div = document.createElement('div')
    div.innerText = text
    return div.innerHTML
  }

  // 起点
  app.init(containerId)
}