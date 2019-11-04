import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';


// tempArr is not used within the App.
// Although passed to the headline component.
// it is only here as an example for testing PropTypes:
const tempArr = [{
  fName: 'Mike',
  lName: 'Pritchard',
  email: 'mikepritchard@gmail.com',
  age: 24,
  onlineStatus: true
}];

const initialState = {
  hideBtn: false
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
// after dispatching action, update state:
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  };

// testing methods: (1) revise state, (2) return a value
  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn : !hideBtn
    });
  };

  exampleMethod_returnsAValue(number) {
    return number +1;
  }


  render() {
    const { posts } = this.props
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
          
          <Header />
          <section className="main">
            <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />

{/* condition: no posts rendered, show button */}
            {/* { posts.length === 0 &&
              <SharedButton {...configButton} />
            } */}

            {!hideBtn &&
              <SharedButton {...configButton} />
            }

            
{/* condition: if posts available, render and map them */}
            { posts.length > 0 && 
              <div>
                { posts.map((post, index) => {
                    const { title, body } = post;
                    const configListItem = {
                      title,
                      desc: body
                    };
                    return (
                      <ListItem
                        key={ index }
                        {...configListItem} />
                    )
                  })
                }
              </div>
            }
          </section>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);