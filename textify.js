(function () {
  const article = document.querySelector("article");
  if (article) {
    const nontextcontent = article.querySelectorAll("video,iframe,img");
    nontextcontent.forEach(content => content.style.display = "none");
    document.body.innerHTML = article.innerHTML
    document.querySelectorAll('p').forEach(para => para.style.fontSize = "24px");

    document.body.style.padding = "24px"
  }
})();