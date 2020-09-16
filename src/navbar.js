import React, {Component, useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { MdDehaze } from 'react-icons/md';
const width = 100

export default function Navbar(props){
  const history = useHistory()
  const path = history.location.pathname.substring(1)
  const {tabs} = props
  const [selected,setSelected] = useState(path || (tabs ? tabs[0] : null)) // default is Home as first index
  let selIndex = tabs.indexOf(selected)
  if (selIndex < 0) selIndex=0
  // need above line to account for nonsense selected paths, 404 errors - else the bar will be in weird place
  const barLeft = selIndex*width
  const screenWidth = SizeOfScreen();
  const isMobile = screenWidth <= 500;
  const [show, setShow] = useState(false)
  // Get the current size of the screen, even on resize event. return the width
  function SizeOfScreen(){
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)    // initial values = screen size
    const [height,setHeight] = useState(window.innerHeight)
    useEffect(()=>{
      window.addEventListener('resize', e=>{ // listen for screen size change events
        setScreenWidth(e.target.innerWidth)
        setHeight(e.target.innerHeight)
      });
    },[])
    return screenWidth; // declare the dimensions of the div
  }

  if (!isMobile) {
    return <div className="nav-wrap">
      <div className="alltabs" style={styles.tabs}>
        {tabs.map((t,i)=>{
          return <div className="tab" key={i}
          onClick={()=> {
            setSelected(t)
            if(props.onSelect) props.onSelect(t)
          }}
          style={{
            ...styles.tab,
            fontWeight: t===selected ? 'bold' : 'normal'
          }}>
            {t}
          </div>
        })}
        <div className="bar" style={{
          ...styles.bar,
          left:barLeft,
          background:props.barColor || '#00FF00',
        }} />
      </div>
    </div>
  } else { //it's mobile time babeey!!
    return <div className="mobile-nav">
      <MdDehaze className="nav-icon" style={{height:"40px", right:"10px", width:"40px"}}
       onClick = {() => {setShow(!show)}}/>
      {show && <div className="mobile-tabs">
        {tabs.map((t,i)=>{
          return <div className="mobile-tab" key={i}
            onClick={()=> {
              setSelected(t)
              if(props.onSelect) props.onSelect(t)
            }}>
            {t}
          </div>
        })}
      </div>}
    </div>
  }
}

const styles={
  tabs:{
    display:'flex',alignItems:'center',
    height:50,position:'relative'
  },
  tab:{
    height:'100%',display:'flex',alignItems:'center',justifyContent:'center',
    cursor:'pointer',fontSize:18, width:width
  },
  bar:{
    height:3,background:'#11ABB0',position:'absolute',
    bottom:0,transition:'left 0.2s', width:width
  }
}
// #11ABB0
