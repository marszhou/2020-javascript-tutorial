function todo(containerId) {
  let nextTodoId = 0;

	const store = {
		// todos 为 todo item 列表
		todos: [],
		// visibility Filter
		// 显示todos列表时的过滤条件
		// 有三个值可选：
		// SHOW_ALL: 显示全部
		// SHOW_ACTIVE: 显示未完成
		// SHOW_COMPLETED: 显示已完成
		visibilityFilter: "SHOW_ALL",
		// 工具方法
		getVisibleTodos(filter) {
			switch (filter) {
				case "SHOW_ALL":
					return this.todos;
				case "SHOW_ACTIVE":
					return this.todos.filter((todo) => !todo.completed);
				case "SHOW_COMPLETED":
					return this.todos.filter((todo) => todo.completed);
			}
		},
		getLocalstorageTodos() {
      let message = getLocalstorageTodosMessage() 
      this.todos = message.todos;
			nextTodoId = message.nextTodoId;
		},
	};

	
	const app = {
		// 初始化，插入UI
		init(containerId) {
			this.container = document.getElementById(containerId);
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
    `;
			this.container.innerHTML = html;
			store.getLocalstorageTodos()
			this.bindHanlders();
      this.render();
      
		},
		// 绑定事件
		bindHanlders() {
			this.form = this.container.querySelector("form");
			this.form.addEventListener("submit", this.handleFormSubmit.bind(this));

			this.filterLinks = this.container.querySelectorAll(".filter-link");
			this.filterLinks.forEach((filterLink) => {
				filterLink.addEventListener(
					"click",
					this.handleFilterLinkClick.bind(this, filterLink)
				);
			});

			this.list = this.container.querySelector(".list");
			this.list.addEventListener("click", this.handleTodoItemClick.bind(this));
		},
		// 更新界面
		render() {
			this.renderTodoList();
			this.renderFooter();
		},
		// 表单提交时
		handleFormSubmit(e) {
			e.preventDefault();
			let text = this.form.todoText.value.trim();
			if (text.length > 0) {
				this.addTodo(htmlEncode(text));
			}
			this.form.todoText.value = "";
			this.form.todoText.focus();
		},
		// 过滤条件点击时
		handleFilterLinkClick(linkElement, e) {
			e.preventDefault();
			const filter = linkElement.getAttribute("filter-value");
			this.setVisibilityFilter(filter);
		},
		handleTodoItemClick(e) {
			if (e.target.tagName !== "LI") return;

			const li = e.target;
			let id = +li.getAttribute("todo-id");
			this.toggle(id);
		},
		// 添加一条todo
		addTodo(text) {
			const todo = {
				id: nextTodoId,
				text: text,
				completed: false, // 新添加的todo，completed值是false
      };
      let message = JSON.stringify(todo)
      store.todos.push(todo);
			localStorage.setItem(`todo${nextTodoId++}`,message)
			this.render();
		},
		// 切换todo状态
		toggle(id) {
			this.toggleShowTodo(id)
			this.toggleLocalStorageTodo(id)
		},
		toggleShowTodo(id) {
			let find = store.todos.find((todo) => todo.id === id);
			find.completed = !find.completed;
			this.render();
		},
		toggleLocalStorageTodo(id) {
			let modifyCompeletedTodo = localStorage.getItem(`todo${id}`)
			let todoObj = JSON.parse(modifyCompeletedTodo)
			todoObj.completed = !todoObj.completed
			let todoMessage = JSON.stringify(todoObj)
			localStorage.setItem(`todo${id}`,todoMessage)
		},
		// 设置过滤条件
		setVisibilityFilter(filter) {
			store.visibilityFilter = filter;
			this.render();
		},
		renderTodoList() {
			let todos = store.getVisibleTodos(store.visibilityFilter);
			let content = todos
				.map(
					(todo) => `
          <li style='text-decoration: ${
						todo.completed ? "line-through" : "none"
					}' todo-id='${todo.id}'>
            ${todo.text}
          </li>
        `
				)
				.join("");
				//点击事件的时候还要把completed状态保存起来
			this.list.innerHTML = content;
		},
		renderFooter() {
			this.filterLinks.forEach((filterLink) => {
				filterLink.classList.remove("current");
				filterLink.querySelector("a").classList.remove("not-active");
			});

			let currentLink = Array.prototype.slice
				.call(this.filterLinks)
				.find(
					(filterLink) =>
						filterLink.getAttribute("filter-value") === store.visibilityFilter
				);
			currentLink.classList.add("current");
			currentLink.querySelector("a").classList.add("not-active");
		},
	};

	function htmlEncode(text) {
		const div = document.createElement("div");
		div.innerText = text;
		return div.innerHTML;
	}

	function getLocalstorageTodosMessage() {
		let todos = [];
		let nextTodoId = 0;
		while (localStorage.getItem(`todo${nextTodoId}`)) {
			let todo = localStorage.getItem(`todo${nextTodoId}`)
      todos[nextTodoId] = JSON.parse(todo);
      nextTodoId++
		}
		return {todos,nextTodoId};
	}

	// 起点
	app.init(containerId);
}
