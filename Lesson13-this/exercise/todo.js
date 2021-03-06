function todo(containerId) {
  const store = {
    // todos 为 todo item 列表
    todos: [
      // {
      //   id: 0,
      //   text: 'Goto Gym',
      //   completed: false
      // },
      // {
      //   id: 1,
      //   text: 'Learn Javascript',
      //   completed: true
      // },
      // {
      //   id: 2,
      //   text: 'Visit Friends',
      //   completed: false
      // }
    ],
    // visibility Filter
    // 显示todos列表时的过滤条件
    // 有三个值可选：
    // SHOW_ALL: 显示全部
    // SHOW_ACTIVE: 显示未完成
    // SHOW_COMPLETED: 显示已完成
    visibilityFilter: 'SHOW_ALL',
    // 工具方法
    getVisibleTodos() {
      // (1)
      // your code
      // 如何根据过滤条件，返回不同的todos呢？
      console.log(this.todos, this.visibilityFilter)
    },
  }

  let nextTodoId = 0
  const app = {
    // 初始化，插入UI
    init(containerId) {
      this.container = document.getElementById(containerId)
      const html = `
      <form>
        <input type='text'/>
        <button>添加</button>
      </form>

      <ul class='list'>
      </ul>

      <p>
        查看：

        <span class='filter-link current all'>
          <span class='active'>全部</span>
          <a class='not-active' href='#'>全部</a>
        </span>,

        <span class='filter-link active'>
          <span class='active'>未完成</span>
          <a href='#'>未完成</a>
        </span>,

        <span class='filter-link completed'>
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
    // 更新界面
    render() {
      this.renderTodoList()
      this.renderFooter()
    },
    // 表单提交时
    handleFormSubmit(e) {
      e.preventDefault()
      // your code
      // 应该处理什么？
    },
    // 过滤条件点击时
    handleFilterLinkClick(linkElement, e) {
      e.preventDefault()
      console.log(e, linkElement)
      // your code
      // 应该处理什么？
    },
    handleTodoItemClick(e) {
      const li = e.target
      // your code
      // 应该处理什么？
    },
    // 添加一条todo
    addTodo(text) {
      const todo = {
        id: ++nextTodoId,
        text: text,
        completed: false, // 新添加的todo，completed值是false
      }
      // (2)
      // your code
      // 如何向store.todos里插入一条todo？

      // 数据模型被更改后，要重新渲染
      this.render()
    },
    // 切换todo状态
    toggleTodo(id) {
      // (3)
      // your code
      // 根据id如何更改store.todos里对应的todo.complete值？

      // 数据模型被更改后，要重新渲染
      this.render()
    },
    // 设置过滤条件
    setVisibilityFilter(filter) {
      store.visibilityFilter = filter
      this.render()
    },
    renderTodoList() {
      // your code
      // 如何显示todo列表？
    },
    renderFooter() {
      // your code
      // 如何显示当前状态？
    },
  }

  // 起点
  app.init(containerId)
}
