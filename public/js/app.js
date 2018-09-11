// Below Set form which will log the value of input upon submitting:
class Query extends React.Component {
    constructor(props){
      super(props);
      this.queryToOMDB = this.queryToOMDB.bind(this);
      this.state = { movieFound: null }
      //Directly above, State was setup for Movie FOUND
    }
    // Below make FETCH request to Open Movie Database (OMDB):
    queryToOMDB(event){
      event.preventDefault();
      fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.refs.title.value).then((response)=>{
        response.json().then((data)=>{
          // console.log(data); //Replaced this log with BELOW as the, so the State of the Form can be set properly:
              this.setState({movieFound: data});
          });
      });
    }
    render(){
      return <form onSubmit={this.queryToOMDB}>
          <input
              ref="title"
              type="text"
              placeholder="Type Title of Movie" id="input" />
          <input type="submit" value="Show Movie Info" id="btn" />
          {
            (this.state.movieFound !== null)?
                <AboutMovie data={this.state.movieFound}></AboutMovie>
            :
                null
          }
      </form>
    }
}
// ABOVE ~Line 26, after creating new Component below, added it above to the QueryForm
// Added the following above ~Line 26 inside opening tag: data={this.state.movieFound} to pass on the variable to the Movie Compnent below.
// Displayed the component conditionally starting ~ Line27, because was getting error due to this.props.data not being initially defined.

// Below, created a new COMPONENT which will handle movie data:
class AboutMovie extends React.Component {
    render(){
      return <ul>
          <li>Title: {this.props.data.Title}</li>
          <li>Actors: {this.props.data.Actors}</li>
          <li>Director: {this.props.data.Director}</li>
          <li>Year: {this.props.data.Year}</li>
          <li>Rated: {this.props.data.Rated}</li>
          <li>Plot: {this.props.data.Plot}</li>
      </ul>
    }
}


ReactDOM.render(
    <Query></Query>,
    document.querySelector('main')
);
