
function randomFilter() {
  const randPercent = () => Math.round(Math.random()*100) + '%'
  const randDegree = () => Math.round(Math.random()*360) + 'deg'
  const randRange = (n=0, m=100) => Math.round(Math.random()*(m-n)) + n
  return `sepia(${randRange(0,20)}%) hue-rotate(${randDegree()}) saturate(${randRange(100,200)}%) contrast(${randRange(100, 200)}%) invert(${randRange(0,10)}%)`
}