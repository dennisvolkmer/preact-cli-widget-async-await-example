import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {

  componentDidMount() {
    (async () => {
      let message = await this.waitInPromise();
      this.setState({message: message})
    })()
  }

  render(props, state) {
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, World!</h1>
        {state && state.message && <div>{state.message}</div>}
      </div>
    );
  }

  waitInPromise() {
    return new Promise(resolve => {
      let timeout = setTimeout(()=> {
        clearTimeout(timeout);
        resolve("I waited async")
      }, 500)
    })
  }
}
