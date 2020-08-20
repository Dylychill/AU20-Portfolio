import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
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

  return <div className="alltabs" style={styles.tabs}>
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
}
const styles={
  tabs:{
    display:'flex',alignItems:'center',
    height:50,position:'relative'
  },
  tab:{
    height:'100%',display:'flex',alignItems:'center',justifyContent:'center',
    width:width,cursor:'pointer',fontSize:18
  },
  bar:{
    height:3,background:'#00ff00',position:'absolute',
    bottom:0,width:width,transition:'left 0.2s'
  }
}