let getHOne = document.getElementsByTagName("h1")[0]

let theArticle = document.getElementsByTagName("article")[0]
theArticle.removeChild(theArticle.lastElementChild)
console.log(theArticle)