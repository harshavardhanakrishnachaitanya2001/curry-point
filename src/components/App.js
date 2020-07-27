import React, {useState} from 'react'
import styled from 'styled-components'
import CurryDetails from './CurryDetails'
const PageHeading=styled.h1`
text-align:center;
color:floralwhite;
`
const Body=styled.div`
background:black;
margin:0px;
padding:0px;
font-family:sans-serif;
`
const ReadUserInput=styled.form`
color:floralwhite;
`
function App(){
    const listOfVagetables=[];
    const [change,setChange]=useState('')
    function handleChange(event){
        setChange(event.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        listOfVagetables.push(change);
        alert(listOfVagetables)
    }
    return (
        <Body>
            <PageHeading>Curry Point</PageHeading>
            <ReadUserInput onSubmit={handleSubmit}>
                <label><b>Name of vegetable:</b></label>
                <input type="text" placeholder="Name a vegetable" name="nameOfVegetable" onChange={handleChange} />
                <button type="submit" onSubmit={handleSubmit}>Search</button>
            </ReadUserInput>
        </Body>
    )
}
export default App