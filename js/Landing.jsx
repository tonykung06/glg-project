import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import UiLink from 'react-toolbox/lib/link';
import {Link} from 'react-router'
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import {Button, IconButton} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import FontIcon from 'react-toolbox/lib/font_icon';
import Avatar from 'react-toolbox/lib/avatar';

const FeatureCard = (props) => (
  <Card className="feature">
    <CardMedia
      className="feature-card-img"
      image={props.imgSrc}
    />
    <CardTitle
      className="feature-card-title"
      title={props.title}
    />
    <CardText>{props.text}</CardText>
  </Card>
);

const PartnerCard = (props) => (
  <Link to="/">
    <Card className="partner-card">
      <CardMedia
        className="partner-main-img"
        image={`/images/partner-${props.partner}.jpg`}
      >
        <div className="content">
          {
            props.description ? <div>{props.description}</div> : null
          }
          <FontIcon value='play_arrow' />
        </div>
      </CardMedia>
      <div className="partner-logo">
        <img src={`/images/partner-logo-${props.partner}.jpg`} alt="partnar logo"/>
      </div>
    </Card>
  </Link>
);

const MenuTest = () => (
  <IconMenu icon='more_vert' position='top-left' menuRipple>
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuItem value='help' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
);

class TabsTest extends React.Component {
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

  render () {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        <Tab label='who we are'></Tab>
        <Tab label='council members' onActive={this.handleActive}></Tab>
        <Tab label='clients'></Tab>
        <Tab label='videos'></Tab>
        <Tab label='careers'></Tab>
        <Tab label='news'></Tab>
        <Tab label='contact'></Tab>
      </Tabs>
    );
  }
}

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const AppBarTest = () => (
  <div>
    <AppBar fixed={true} flat={false}>
      <Link to="/">GLG</Link>
      <Navigation>
        <TabsTest />
      </Navigation>
      <Navigation>
        <MenuTest></MenuTest>
      </Navigation>
    </AppBar>
    <div className="masthead">
      GLG IS TRANSFORMING
  THE WAY THE WORLD’S
  TOP PROFESSIONALS
  SHARE EXPERTISE
  AND LEARN.
    </div>
    <div className="sign-up-learn-more">
      <Link className="member-btn" to="/">
        <Button raised>
          <div>become a</div>
          <div><strong>council member</strong></div>
          <div>learn more</div>
        </Button>
      </Link>
      <Link className="client-btn" to="/">
        <Button raised>
            <div>become a</div>
            <div><strong>client</strong></div>
            <div>learn more</div>
        </Button>
      </Link>
    </div>
    <article className="mission">
      <header>
        <h1>Our Mission</h1>
      </header>
      <div>
        <p>GLG is a professional learning platform. We pair top professionals with our Council Members - the leading experts in every field - thousands of times a week and around the world, to teach and learn from one another. This all happens within our rigorous compliance framework.</p>
        <p>A world of increasing complexity and connectedness demands agility, accuracy, and insight. Working with GLG, professionals have countless options to learn, make better decisions, and grow.</p>
        <p>GLG’s principles of learning set us apart:</p>
      </div>
    </article>
    <div className="features">
      <FeatureCard title="Specificity" text="Precise expertise to gain complete understanding of any topic" imgSrc="/images/features-specificity.png" />
      <FeatureCard title="Availability" text="Expertise – fast, within a few hours or days, ensuring learning is timely" imgSrc="/images/features-availability.png" />
      <FeatureCard title="Interactivity" text="Ongoing conversations that facilitate superior knowledge exchange" imgSrc="/images/features-interactivity.png" />
      <FeatureCard title="Trust" text="Learning one-on-one or in small groups, making it easy, effective and comfortable for the learner" imgSrc="/images/features-trust.png" />
    </div>
    <p className="prompt">Learn more about who we are and how to engage with us.</p>
    <section className="partners">
      <header>
        <h1>Learn with our Leading Learners</h1>
        <h2>Watch how these top professionals (all GLG clients) are transforming the way they get smart, make decisions, and innovate.</h2>
      </header>
      <div className="content">
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
      </div>
    </section>
    <footer>
      <div className="content">
        <div className="logo">GLG</div>
        <div>
          <h1>contact</h1>
          <ul>
            <li>+1212 984 8500</li>
            <li>info@glg.it</li>
            <li>icons</li>
          </ul>
        </div>
        <div>
          <h1>learn</h1>
          <ul>
            <li>who we are</li>
            <li>council memebrs</li>
            <li>clients</li>
            <li>videos</li>
            <li>careers</li>
            <li>news</li>
            <li>contact</li>
            <li>compliance</li>
            <li>research store</li>
            <li>terms & privacy</li>
          </ul>
        </div>
        <div>
          <h1>log in</h1>
          <ul>
            <li>clients</li>
            <li>client compliance</li>
            <li>council members</li>
          </ul>
        </div>
      </div>
      <div className="trademark-text">
        © 2016, Gerson Lehrman Group, Inc. All rights reserved. GLG and the GLG logo are trademarks of Gerson Lehrman Group, Inc.
      </div>
    </footer>
  </div>
);

export default AppBarTest;
