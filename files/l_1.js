var create = React.createElement;
const App = create('div', {className:'color'}, 'Hello world');
ReactDOM.render(App, document.getElementById('app'));

class App extends Component {
    state = { name: '' };

    handleChangeName = ({ target }) => {
        const { value } = target;

        this.setState({ name: value });
    };

    render() {
        const { name } = this.state;

        return (
            <div>
                <input value={name} onChange={this.handleChangeName} />
                <p>Hello, {name ? name : 'guest'}</p>
            </div>
        );
    }
}

export default App;