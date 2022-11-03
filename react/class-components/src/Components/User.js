import { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: "",
    };
  }

  componentWillMount() {
    console.log("Will Mount");
  }

  componentDidMount() {
    console.log("Did Mount");
    this.setState({
      avatar: `https://avatars.dicebear.com/api/human/${this.props.name}.svg`,
    });
  }

  componentDidUpdae() {
    //
  }

  render() {
    console.log("render");
    // const { loggedIn } = this.props; // destructuring method
    const { name } = this.props;
    return (
      <div>
        <img src={this.state.avatar} width="200" />
        <div>Username: cüneyt</div>
        <div>Location: Bottrop</div>
        <div>Name: {name}</div>
        <div>
          Loggen in:
          {
            /*loggedIn (destructuring)*/ this.props.loggedIn
              ? " logged in"
              : " not logged in"
          }
        </div>
      </div>
    );
  }
}
