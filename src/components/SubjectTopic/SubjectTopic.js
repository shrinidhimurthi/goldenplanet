import React from 'react';
import './SubjectTopic.css';
import icleaf from '../../assets/icleaf.png';

const SubjectTopic = () => {
  return (
    <div className="subject-topic-page">
      <div className="image-wrapper">
        {/* Render the exact image file without modifying it. The wrapper allows scrolling if image is larger than viewport. */}
        <img src={icleaf} alt="Subject Topic" className="icleaf-image" />
      </div>
    </div>
  );
};

export default SubjectTopic;
