import { createContext, useContext, useState } from "react";

const toggleNavbarContext = createContext(false)
const setToggleNavbarContext = createContext(null)

export function ToggleNavbarProvider({children}){
	const [toggleNavbar, setToggleNavbar] = useState(false)
	
	return (
		<toggleNavbarContext.Provider value={toggleNavbar} >
			<setToggleNavbarContext.Provider value={setToggleNavbar} >
				{children}
			</setToggleNavbarContext.Provider>
		</toggleNavbarContext.Provider>
	)
}

export function useToggleNavbar(){
	return useContext(toggleNavbarContext)
}

export function useSetToggleNavbar(){
	return useContext(setToggleNavbarContext)
}