// Below Set form which will log the value of input upon submitting:
class OMDBQueryForm extends React.Component {
    constructor(props){
      super(props);
      this.queryOMDB = this.queryOMDB.bind(this);
      this.state = { foundMovie: null }
      //Directly above, State was setup for Movie FOUND
    }
    // Below make FETCH request to Open Movie Database (OMDB):
    queryOMDB(event){
      event.preventDefault();
      fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.refs.title.value).then((response)=>{
        response.json().then((data)=>{
          // console.log(data); //Replaced this log with BELOW as the, so the State of the Form can be set properly:
              this.setState({foundMovie: data});
          });
      });
    }
    render(){
      return <form onSubmit={this.queryOMDB}>
          <input
              ref="title"
              type="text"
              placeholder="Movie Title" />
          <input type="submit" value="Find Movie Info" />
          <MovieInfo data={this.state.foundMovie}></MovieInfo>
      </form>
    }
}
// ABOVE ~Line 26, after creating new Component below, added it above to the QueryForm
// Added the following above ~Line 26 inside opening tag: data={this.state.foundMovie} to pass on the variable to the Movie Compnent below.

// Below, created a new COMPONENT which will handle movie data:
class MovieInfo extends React.Component {
    render(){
        return <ul>
            <li>Title:</li>
            <li>Director:</li>
            <li>Actors:</li>
            <li>Year:</li>
            <li>Rated:</li>
        </ul>
    }
}


ReactDOM.render(
    <OMDBQueryForm></OMDBQueryForm>,
    document.querySelector('main')
);
