import React from 'react'

const NewsItem = (props)=> {
      let {title,description, imgUrl, newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card my-5">
  <img src={!imgUrl ? "https://sportshub.cbsistatic.com/i/r/2023/12/11/7fe14eb6-78f9-47a5-8f31-02fd8aa8fb5f/thumbnail/1200x675/1f15463478a3425f78c4f2bb2c051c6d/dak-jpeg.jpg" : imgUrl}/>
  <div className="card-body">
    <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'90%'}}>
    {source}</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By <i>{!author?"Unknown":author}</i> on <i>{new Date(date).toGMTString()}M</i></small></p>
    <a href={newsUrl} rel="noreferrer" target = "_blank"className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
