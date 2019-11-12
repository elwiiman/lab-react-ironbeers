import React, { Component } from "react";
import NavCard from "./NavCard";

class HomeMenu extends Component {
  render() {
    return (
      <div>
        <NavCard
          link="/allbeers"
          image="http://www.ghostwhalelondon.com/wp-content/uploads/2018/02/Ghost-Whale-work-beers.png"
          text="Today, there are hundreds of documented 
        beer styles and a handful of organizations with their own unique classifications. 
        As beer styles continue to evolve, understanding the sensory side of craft beer will 
        help you more deeply appreciate and share your knowledge and enthusiasm for the beverage of beer."
          title="All Beers"
        />
        <NavCard
          link="/randombeers"
          image="https://www.kegworks.com/wp/wp-content/uploads/2016/09/lineup-2.jpg"
          text="Now that the craft beer revolution is old news, a microbrewery can’t 
        just make better-than-average beer to get noticed. They have to do something 
        really unique to get their name out there—and there seems to be no end to the weird things 
        beer makers will do to get noticed. Here are some of the strangest beers on the market today."
          title="Random Beers"
        />
        <NavCard
          link="/newbeers"
          image="https://res.cloudinary.com/elwiiman/image/upload/v1573539237/test/new-beer_kekgz4.png"
          text="Now that the craft beer revolution is old news, a microbrewery can’t 
        just make better-than-average beer to get noticed. They have to do something 
        really unique to get their name out there—and there seems to be no end to the weird things 
        beer makers will do to get noticed. Here are some of the strangest beers on the market today."
          title="New Beer"
        />
      </div>
    );
  }
}

export default HomeMenu;
