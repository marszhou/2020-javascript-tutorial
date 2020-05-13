var container
var selected = 0

function renderTab(item, index) {
  return `<button class='tabItem ${
    index === selected ? 'selected' : ''
  }'>${index}</button>`
}

function renderContent(item, index) {
  return `<div class='content ${index === selected ? '' : 'hide'}'>
    <h1>${item.title}</h1>
    <div>${item.description}</div>
  </div>`
}

function onItemClick(e) {
  var current = [...container.querySelectorAll('.tabItem')].findIndex(
    (item) => item === e.target
  )
  container.querySelectorAll('.tabItem').forEach((item, index) => {
    if (index === current) {
      item.classList.add('selected')
    } else {
      item.classList.remove('selected')
    }
  })
  container.querySelectorAll('.content').forEach((content, index) => {
    if (index === current) {
      content.classList.remove('hide')
    } else {
      content.classList.add('hide')
    }
  })
}

function main(items, id) {
  container = document.getElementById(id)
  container.innerHTML = `<div class='nav'>
    ${items.map(renderTab).join('')}
    ${items.map(renderContent).join('')}
  </div>`

  container
    .querySelectorAll('.tabItem')
    .forEach((item) => item.addEventListener('click', onItemClick))

  // document.querySelectorAll('button').forEach(b => b.addEventListener(xx))
  // .....
}

main(feeds, 'container')
