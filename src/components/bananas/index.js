import React, { useRef, useState, useEffect, useCallback } from 'react'

import { useTransition, animated } from 'react-spring'

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';




function Banana() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: 'red',fontSize:50,fontWeight:500 },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80, margin: 0 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#FFB400',fontSize:50,fontWeight:500 },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: "#FFB400", margin: 0 ,fontSize:50,fontWeight:500}, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: 'black', margin: 0 ,fontSize:50,fontWeight:500},
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Modern', 'Seo Friendly']), 2000))
    ref.current.push(setTimeout(() => set(['Perfect', 'Fast']), 5000))
    ref.current.push(setTimeout(() => set(['Awesome', 'Features']), 8000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
    


        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight, justifyContent: "center" }}>{item}</animated.div>
          </animated.div>
        ))}


     








</div>

  )
}

export default Banana