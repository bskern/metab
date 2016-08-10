import React from 'react';
import SubredditContainer from './SubredditContainer';
import HnContainer from './HnContainer';
import { Row, Col} from 'react-bootstrap';
import weather from 'yahoo-weather';
import WeatherHeader from './WeatherHeader';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articlesSR1: [],
      articlesSR2: [],
      articlesSR3: [],
      subreddit: 'scala',
      subreddit2: 'elm',
      subreddit3: 'reactjs',
      hnTop: [],
      hnAsk: [],
      weather:{},
      bkernDevTweets:[],
      bkernIosTweets:[],
      scalaTweets:[],
      devsTweets:[]

    };

    this.loadIndividualItems = this.loadIndividualItems.bind(this);
    this.loadCurrentWeather = this.loadCurrentWeather.bind(this);
    this.loadTwitter = this.loadTwitter.bind(this);
  }
  componentWillMount() {
    this.loadDataFromReddit(this.state.subreddit,'articlesSR1');
    this.loadDataFromReddit(this.state.subreddit2,'articlesSR2');
    this.loadDataFromReddit(this.state.subreddit3,'articlesSR3');
    this.loadTopStoriesFromHN();
    this.loadAskStoriesFromHN();
    this.loadCurrentWeather();
    this.loadTwitter('bkern/devs','bkernDevTweets');
    this.loadTwitter('bkern/ios','bkernIosTweets');
    this.loadTwitter('scala','scalaTweets');
    this.loadTwitter('devs','devsTweets');
}
loadCurrentWeather() {
    weather('minneapolis','f').then(data => {
      const currentTemp = data.item.condition.temp;
      const forecast = data.item.forecast[0];
      const {high, low, text} = forecast;
      const weather = {
        currentTemp:currentTemp,
        high: high,
        low: low,
        text: text
      }
      this.setState({weather:weather});
    })
}

loadDataFromReddit(subreddit,stateKey) {
    const api = `https://www.reddit.com/r/${subreddit}.json`
    fetch(api).then((response) => {
      response.json().then((json) => {
          const articles = json.data.children
         this.setState({[stateKey]: articles})
      })

    })
  }
loadTwitter(listRouteName,stateKey) {
  const api = `http://localhost:8081/${listRouteName}`
  fetch(api).then((response) => {
  return response.json();
}).then((data) => {
// eslint-disable-next-line
   data.map((tweet) => {
     let existingTweets = this.state[stateKey];
     this.setState({[stateKey]: existingTweets.concat(tweet)})
   });

})
}

loadAskStoriesFromHN(){
     this.grabStoryIds('https://hacker-news.firebaseio.com/v0/askstories.json')
     .then((ids) => {
       this.loadIndividualItems(ids.slice(0,15),'hnAsk');
     })
}
loadTopStoriesFromHN(){
     this.grabStoryIds('https://hacker-news.firebaseio.com/v0/topstories.json')
     .then((ids) => {
       this.loadIndividualItems(ids.slice(0,15),'hnTop');
     })
}

grabStoryIds(api){
  return fetch(api).then((response) => {
    return response.json();
   })
}
loadIndividualItems(ids,type){
  //eslint-disable-next-line
  ids.map((id) => {
    const itemUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    fetch(itemUrl).then((r) => {
      r.json().then((item) => {
          if(type === 'hnAsk') {
            item.url = `https://news.ycombinator.com/item?id=${item.id}`
          }
          let existingHnArray = this.state[type]
          this.setState({[type] : existingHnArray.concat(item)})
      })
    })
 })
}

  render() {
    return (
      <div className="App">
        <WeatherHeader
          currentTemp={this.state.weather.currentTemp}
          desc={this.state.weather.text}
          high={this.state.weather.high}
          low={this.state.weather.low}/>
            <div className="container">
              <Row>
                <Col md={4}>
                  <SubredditContainer
                    subreddit={this.state.subreddit}
                    articles={this.state.articlesSR1.slice(0,10)}/>
                </Col>
                <Col md={4}>
                  <SubredditContainer
                    subreddit={this.state.subreddit2}
                    articles={this.state.articlesSR2.slice(0,10)}/>
                </Col>
                <Col md={4}>
                  <SubredditContainer
                    subreddit={this.state.subreddit3}
                    articles={this.state.articlesSR3.slice(0,10)}/>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <HnContainer
                    title="Top Stories"
                    items={this.state.hnTop}
                    />
                </Col>
                <Col md={6}>
                <HnContainer
                  title="Ask"
                  items={this.state.hnAsk}
                  />
                </Col>
              </Row>
            </div>
      </div>
    );
  }
}

export default App;
