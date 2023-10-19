import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {



  return (
    <div className="container">
      <h1>Add the Event Poster</h1>
      {/* make the h2 a dialogue box check list */}
      <h2>CHECK before you are the poster:
        <br></br>
        <ul>I double checked this poster id NOT on the site yet!</ul>
        <ul>This party has been over for at least 24 hours.</ul>
        <ul>Poster does NOT include perosnal info like an address or phone number.</ul>
      </h2>
      
      <h2>Add Poster</h2>
      <input type="text" placeholder="add poster"/>

      <h3>Description of Event</h3>
      <input type="text" placeholder="add description"/>

      <h3>Date of Event</h3>
      <input type="text" placeholder="event date"/>

      {/* store to posters database & go back to archive page */}
      {/* <button onClick={toArchive} >Next</button> */}
    </div>
  );
}

export default InfoPage;
