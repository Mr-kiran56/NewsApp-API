import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsbar from "./componenets/Newsbar";
import News from "./componenets/News";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 5;
  // apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />

        <Router>
          <Newsbar />
          <Routes>
            <Route path="/" element={<News  setProgress={this.setProgress}  key="home" pageSize={this.pageSize} country="us" category="general" />} />
            
            <Route path="/general" element={<News setProgress={this.setProgress}    key="general" pageSize={this.pageSize} country="us" category="general" />} />

            <Route path="/business" element={<News setProgress={this.setProgress}    key="business" pageSize={this.pageSize} country="us" category="business" />} />

            <Route path="/entertainment" element={<News setProgress={this.setProgress}    key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}    key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}    key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}    key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}    key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
