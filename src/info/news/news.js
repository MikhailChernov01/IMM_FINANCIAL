import news from 'realtime-newsapi'

// const news= new()
news.on('articles', articles => {
  console.log(articles);
})
()
