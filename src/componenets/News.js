import React, { Component } from "react";
import Newscart from "./Newscart";
import Loading from "./loading";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component { 
  
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsHub`;
  }

  async UpdatedNews() {
    this.props.setProgress(10);

    let myfetUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7638c567c7ea426588a56bda745c5178&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    
    let data = await fetch(myfetUrl);
    this.props.setProgress(30);
    
    let parseData = await data.json();
    this.props.setProgress(60);
    
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.UpdatedNews();
  }

  fetchMoreData = async () => {
    let myfetUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7638c567c7ea426588a56bda745c5178&page=${this.state.page}&pageSize=${this.pageSize}`;
    this.setState({
      page: this.state.page + 1
    });
    this.setState({ loading: true });
    
    let data = await fetch(myfetUrl);
    let parseData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center mt-5" style={{paddingTop:'50px'}}>Today {this.capitalizeFirstLetter(this.props.category)} TopHeadlines-NewsHub</h1>

        {this.state.loading && <Loading className="text-center" />}

        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.articles.length < this.state.totalResults?<Loading />:null}
        >
          <div className="container">
            <div className="row ms-4">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={element.url || index}>
                    <Newscart
                      title={element.title ? element.title.slice(0, 41) : "No Title Available"}
                      description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                      imageUrl={element.urlToImage || "https://via.placeholder.com/150"}
                      url={element.url}
                      author={element.author || "Unknown"}
                      date={element.publishedAt || "No Date"}
                      source={element.source ? element.source.name : "Unknown Source"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
