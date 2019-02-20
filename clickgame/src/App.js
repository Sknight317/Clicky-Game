import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import image from "./image.json";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


class App extends Component {
  // Setting this.state.image to the image json array
  state = {
    image,
    message: "",
    // Set the beginning score equal to zero
    score: 0,
    topScore: 0,
    clicked: [],
    move: "false"
  };

clickImage = id => {
  //Sets constant to the shuffle array function to shuffle images
 const shuffle = this.shuffleArray(image);
 this.setState({image: shuffle});
 const contains = this.state.clicked.includes(id)
 //If the id of the image that was just clicked has already been clicked
 if(!contains) {
    this.setState({
    //Merge the image that has just been clicked into the clicked array
    clicked: this.state.clicked.concat([id]),
    score: this.state.score + 1,
    message: "Correct!",
    move: "false" 
});
   
 }
 else {
this.endGame()
}//If the current score is greater than the top score; change the topscore to the number of the score
if (this.state.score > this.state.topScore) {
  this.setState({ topScore: this.state.score });
 }
}
endGame= () => {
//Empty the clicked array; tell the user they guessed incorrectly
   this.setState({score: 0,
                  clicked: [],
                  message: "You guessed incorrectly!",
                  move: "true"

  })
}
 //Function to rearrange the images
shuffleArray = (image) => {
  for (let i = image.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [image[i], image[j]] = [image[j], image[i]];
  }
  return image;
}


  // Map over this.state.image and render a imageCard component for each image object
  render() {
    return (
      
    <Wrapper>
       <Navbar
        score={this.state.score}
        message={this.state.message}
        topScore={this.state.topScore}
        />   
         
        <Header/>
      
        
      
      
        {this.state.image.map(image => (
          <ImageCard
            clickImage={this.clickImage}
            id={image.id}
            key={image.id}
            image={image.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    
    );
  }
}

export default App;
