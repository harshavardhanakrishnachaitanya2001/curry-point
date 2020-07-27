import React, {useState} from 'react'
import styled from 'styled-components'
import Tomato from './Tomato'
import Beatroot from './Beatroot'
import Aloo from './Aloo'
import Carrot from './Carrot'
import Brinjal from './Brinjal'
import BottleGaurd from './BottleGaurd'
import Beans from './Beans'
import Bittergod from './Bittergod'
import Cabage from './Cabage'
import Caleeflower from './Caleeflower'
import Capsicum from './Capsicum'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
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
const Button=styled.button`
border:2px solid black;
font-size:25px;
margin-right:5px;
text-align:center;
`
const ReturnButton=styled(Button)`
float:right;
`
function App(){
    return (
        <Router>
            <Body>
                <PageHeading>Curry Point</PageHeading>
                <Link to="Tomato"><Button>Tomato</Button></Link>
                <Link to="/Beatroot"><Button>Beatroot</Button></Link>
                <Link to="/Aloo"><Button>Aloo</Button></Link>
                <Link to="/Carrot"><Button>Carrot</Button></Link>
                <Link to="/Brinjal"><Button>Brijal</Button></Link>
                <Link to="/BottleGaurd"><Button>Bottle gaurd</Button></Link>
                <Link to="Beans"><Button>Beans</Button></Link>
                <Link to="Cabage"><Button>Cabage</Button></Link>
                <Link to="Caleeflower"><Button>Caleeflower</Button></Link>
                <Link to="Capsicum"><Button>Capsicum</Button></Link>
                <Link to="/Bittergod"><Button>Bitter God</Button></Link><br /><br />
                <Link to="/Home"><ReturnButton>Back to Home</ReturnButton></Link>
                <Route path="/" exact/>
                <Route path="/Tomato" component={Tomato} />
                <Route path="/Beatroot" component={Beatroot}/>
                <Route path="/Aloo" component={Aloo}/>
                <Route path="/Carrot" component={Carrot}/>
                <Route path="/Brinjal" component={Brinjal}/>
                <Route path="/BottleGaurd" component={BottleGaurd}/>
                <Route path="/Beans" component={Beans}/>
                <Route path="/Cabage" component={Cabage}/>
                <Route path="/Caleeflower" component={Caleeflower}/>
                <Route path="/Capsicum" component={Capsicum}/>
                <Route path="/Bittergod" component={Bittergod}/>
            </Body>
        </Router>
    )
}
export default App