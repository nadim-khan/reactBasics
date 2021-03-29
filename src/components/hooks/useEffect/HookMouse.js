import React ,{useState,useEffect}from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('Unmounting listeners')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            <h3>Example 2: useEffect - Mouse event</h3>
            <div className="sectionsA">X : {x} </div><br/> <div className="sectionsA">Y: X : {y}</div>
        </div>
    )
}

export default HookMouse
