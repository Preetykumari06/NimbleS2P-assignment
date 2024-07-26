import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
    // Simulate data fetch
    setTimeout(() => {
      this.setState({ data: 'Sample Data' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
