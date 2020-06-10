import React, { useState } from 'react';
import './App.css';
import Desc from './Desc/Desc';
import Header from './components/header/Header';
import Skills from './components/contents/skills/Skills';

function App() {

  //state - data yang disimpan ( array )
  const [appState, setAppState ]= useState({
    apps: [
    { id:'1', name: 'Bootstrap', show: false },
    { id:'2', name: 'React-Js', show: false },
    { id:'3', name: 'Laravel', show: false }
    ],
    showAll: false
  })

 //change show state handler
  const changeShowStateHandler = (event) => {
    let input = event.target.value;
    if (input == 1) {
      setAppState({
        apps: [
        { id:'1', name: 'Bootstrap', show: true },
        { id:'2', name: 'React-Js', show: false },
        { id:'3', name: 'Laravel', show: false }
        ]
      })
    } else if ( input == 2){
      setAppState({
       apps: [
       { id:'1', name: 'Bootstrap', show: false },
       { id:'2', name: 'React-Js', show: true },
       { id:'3', name: 'Laravel', show: false }
       ]
     })
    } else if ( input == 3) {
      setAppState({
        apps: [
        { id:'1', name: 'Bootstrap', show: false },
        { id:'2', name: 'React-Js', show: false },
        { id:'3', name: 'Laravel', show: true }
        ]
      })
    } else {

      if (appState.showAll) {
       setAppState({
        apps: [
        { id:'1', name: 'Bootstrap', show: false },
        { id:'2', name: 'React-Js', show: false },
        { id:'3', name: 'Laravel', show: false }
        ],
        showAll : false
      })

     }else {
       setAppState({
        apps: [
        { id:'1', name: 'Bootstrap', show: true },
        { id:'2', name: 'React-Js', show: true },
        { id:'3', name: 'Laravel', show: true }
        ],
        showAll : true
      })
     }

   }
 }

 //list
  let nameLists = (
    <div>
    {appState.apps.map((nameList, index) => {
      if (nameList.show) {
        return <Desc
        delete={() => deleteStateHandler(index)}
        apps={nameList.name}
        key={nameList.id}
        rename={(event) => renameStateHandler(event,nameList.id)}
        />
      }
    })}
    </div>
  );


  //delete handler
  const deleteStateHandler = (index) => {
    const tempState = [...appState.apps]; //save current state
    tempState.splice(index, 1); //hapus index
    setAppState({
      apps:tempState
    });
  }

  const renameStateHandler = (event, id) => {
    //get index
    const appIndex = appState.apps.findIndex(ai => {
      return ai.id === id;
    });

    //get row data of index
    const appList = {
      ...appState.apps[appIndex]
    };

    //rename it
    appList.name = event.target.value;

    //fetch into old state
    const appLists = [...appState.apps];
    appLists[appIndex] = appList;

    //fetch into old state
    setAppState({
      apps:appLists
    });

  }

//returning jsx
 return (
  <div className="App">
    <Header/>
    <Skills/>
    {/*<h1>React-App Project</h1>
    <div className="baris">
      <select className="form-control" onChange={changeShowStateHandler}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </select>

      <button className="btn btn-primary" onClick={changeShowStateHandler} value="all">Show All !</button>
    </div>
    {nameLists}*/}

  </div>
  );

}

export default App;
