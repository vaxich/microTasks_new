import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { MetodMap } from './site/MetodMap';
import { Button, UniversalButton } from './site/Button';
import { MetodFilter } from './site/MetodFilter';
import { UniversalInput } from './site/UniversalInput/UniversalInput';
import {App2} from './dop7/App2';



function App() {

  const students = [
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]
  const Button1Foo = (subscriber:string, age:number) => {
    console.log(subscriber, age);
    
  }
  const Button2Foo = (subscriber:string) => {
    console.log(subscriber);
  }

  const Button3Foo = () => {
    console.log("stupid button" );
  }



let[a, setA] = useState(0);

const onClickHandler =() => {
  
  setA(++a);
  console.log(a);
  
}


  return (
    <div>
      {/* <Header title = {"New Header"}/>
      <Body titleForBody = "New Body"/>
      <Footer />
      <MetodMap students={students} />
      <Button />
      <UniversalButton name = "MyYoutubeCanel-1" callBack={ () => Button1Foo("Vasia" , 21)}/>
      <UniversalButton name = "MyYoutubeCanel-2" callBack={ () => Button2Foo("Ivan")}/>
      <UniversalButton name = "stupid button" callBack={Button3Foo}/>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={ () => {setA(0)}}>0</button>
      <MetodFilter /> */}
      {/* <UniversalInput /> */}
      <App2/>
    </div>

  );
}

export default App;
