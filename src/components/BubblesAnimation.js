import '../styles/bubblesAnimation.css';
import { bubbles } from '../data/data';

const BubblesAnimation = () => {

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble, index) => (
        <img 
            src={bubble.img}
            style={bubble.styles}
            key={index} 
            className="bubble" 
            alt='bubble'
        />
      ))}
    </div>
  );
};

export default BubblesAnimation;
