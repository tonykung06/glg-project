import React from 'react';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

class TopMenuTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index) {
    this.setState({index});
  }

  handleActive() {
    console.log('Special one activated');
  }

  render() {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        <Tab label="who we are" />
        <Tab label="council members" onActive={this.handleActive} />
        <Tab label="clients" />
        <Tab label="videos" />
        <Tab label="careers" />
        <Tab label="news" />
        <Tab label="contact" />
      </Tabs>
    );
  }
}

export default TopMenuTabs;
