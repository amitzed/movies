class OMDBQueryForm extends React.Component {
    constructor(props){
        super(props);
        this.queryOMDB = this.queryOMDB.bind(this);
    }
    queryOMDB(event){
        event.preventDefault();
        console.log(this.refs.title.value);
    }
    render(){
        return <form onSubmit={this.queryOMDB}>
            <input
                ref="title"
                type="text"
                placeholder="Movie Title" />
            <input type="submit" value="Find Movie Info" />
        </form>
    }
}

ReactDOM.render(
    <OMDBQueryForm></OMDBQueryForm>,
    document.querySelector('main')
);
