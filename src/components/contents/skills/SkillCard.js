import React from 'react';

function SkillCard(props) {

  return (
    <div className="col-sm-4 py-3">
      <div className="card">
        <img className="card-img-top" src="" alt="Skill"></img>
        <div className="card-body">
          <h5 className="card-title text-dark">{props.title}</h5>
          <p className="card-text text-dark">{props.desc}</p>
          <a href="#" class="btn btn-primary">Show Porfolio</a>
        </div>
      </div>
    </div>
  );

}

export default SkillCard;
