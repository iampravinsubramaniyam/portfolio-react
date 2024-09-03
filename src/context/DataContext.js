import { createContext, useState, } from "react";

const DataContext = createContext({})


export const DataProvider = ({children}) =>{

    const [homeIconStyle,sethomeIconStyle] = useState({
        color: "rgb(14, 140, 157)"
    })
    const [aboutIconStyle,setaboutIconStyle] = useState({
        color: "black"
    })
    const [profileIconStyle,setProfileIconStyle] = useState({
        color: "black"
    })
    const [projectIconStyle,setProjectIconStyle] = useState({
        color: "black"
    })
    const [contactIconStyle,setContactIconStyle] = useState({
        color: "black"
    })

    const homeStatus = () => {
        sethomeIconStyle({color: "rgb(14, 140, 157)"})
        setaboutIconStyle({color: "black"})
        setProfileIconStyle({color: "black"})
        setProjectIconStyle({color: "black"})
        setContactIconStyle({color: "black"})
    }

    const aboutStatus = () =>{
        sethomeIconStyle({color: "black"})
        setaboutIconStyle({color: "rgb(14, 140, 157)"})
        setProfileIconStyle({color: "black"})
        setProjectIconStyle({color: "black"})
        setContactIconStyle({color: "black"})

    } 

    const profileStatus = () =>{
        sethomeIconStyle({color: "black"})
        setaboutIconStyle({color: "black"})
        setProfileIconStyle({color: "rgb(14, 140, 157)"})
        setProjectIconStyle({color: "black"})
        setContactIconStyle({color: "black"})
    }

    const projectStatus = () =>{
        sethomeIconStyle({color: "black"})
        setaboutIconStyle({color: "black"})
        setProfileIconStyle({color: "black"})
        setProjectIconStyle({color: "rgb(14, 140, 157)"})
        setContactIconStyle({color: "black"})
    }
    const contactStatus = () =>{
        sethomeIconStyle({color: "black"})
        setaboutIconStyle({color: "black"})
        setProfileIconStyle({color: "black"})
        setProjectIconStyle({color: "black"})
        setContactIconStyle({color: "rgb(14, 140, 157)"})
    }

    return(
        <DataContext.Provider value = {{
            homeIconStyle,aboutIconStyle,profileIconStyle,projectIconStyle,contactIconStyle,
            homeStatus,aboutStatus,profileStatus,projectStatus,contactStatus
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;