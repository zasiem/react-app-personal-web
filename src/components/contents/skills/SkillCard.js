import React from 'react';

function SkillCard(props) {

  return (
    <div className="col-sm-3 py-3">
      <div className="card">
        <img className="card-img-top" src="" alt="Skill"></img>
        <div className="card-body">
          <h5 className="card-title text-dark font-weight-bold">{props.title}</h5>
          <p className="card-text text-dark">{props.desc}</p>
          <button class="btn btn-info" onClick={props.action} >Show Porfolio</button>
        </div>
      </div>
    </div>
  );

}

export default SkillCard;
