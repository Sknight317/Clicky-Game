import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import image from "./image.json";

class App extends Component {
  // Setting this.state.image to the image json array
  state = {
    image
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const image = this.state.image.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ image });
  };

  // Map over this.state.image and render a imageCard component for each image object
  render() {
    return (
      <Wrapper>
        
        {this.state.image.map(image => (
          <ImageCard
            removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;



