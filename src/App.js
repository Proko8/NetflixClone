import React from 'react';
import Row from "./Row"
import requests from "./requests";
import './App.css';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovie}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovie}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
