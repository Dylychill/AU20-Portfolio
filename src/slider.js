import React, {useState} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable';

const width= 200;

export default function Slider(){
    const [val, setVal] = useState(50) //start at 50% slider
    // on dragging the slider, updates position
    function onChange(e, position){
        const x = Math.round(position.x/width*100)
        setVal(x)
    }
    return <Wrap>
        <GreyBar />
        <BlueBar style={{width:val+'%'}}/>
        <Draggable
            axis="x"
            bounds={{left:0, right:width}}
            position={{x:val/100*width, y:0}}
            onDrag={onChange}
            onStop={onChange}
        >
            <Dot />
        </Draggable>
        <Number className="slider-number" style={{left:val/100*width-7}}>{val}</Number>
    </Wrap>
}

//below is the styled-components way of making new components. the backticks open up space for writing styles
const Wrap=styled.div`
    width:${width}px;
    height:32px;
    position:relative;
    margin-top:45px;
    opacity:0.85;
    transition: opacity 0.2s;
    &:hover{
        opacity:1;
    }
    &:hover .slider-number {
        visibility:visible;
    }
`
const GreyBar=styled.div`
    width:100%;
    height:6px;
    position:absolute;
    left: 0px;
    top:10px;
    background: grey;
    border-radius:3px;
`
const BlueBar=styled.div`
    width:100%;
    height:6px;
    position:absolute;
    left: 0px;
    top:10px;
    background: aqua;
    border-radius:3px;
`
const Dot=styled.div`
    height:14px;
    width:14px;
    margin-left:-7px;
    position:absolute;
    border-radius:10px;
    top:4px;
    background:white;
    border: 2px solid aqua;
    cursor:pointer;
`
const Number=styled.div`
    position:absolute;
    background:black;
    color:white;
    padding:3px;
    top:-20px;
    font-size:10px;
    border-radius:3px;
    visibility:hidden;
`
// Slider is made up of the overall space, the base bar in full width, the bar filled, and the bubble to drag
