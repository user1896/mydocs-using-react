import { createContext, useContext, useState } from "react";

// Context state variable to toggle the left navbar
const toggleNavbarContext = createContext(false)
const setToggleNavbarContext = createContext(null)
// Context state variable to toggle which accordion to open
const accordionContext = createContext(0)
const setAccordionContext = createContext(null)

export function ToggleNavbarProvider({children}){
	const [toggleNavbar, setToggleNavbar] = useState(false)
	const [accordion, setAccordion] = useState(0)
	
	return (
		<toggleNavbarContext.Provider value={toggleNavbar} >
			<setToggleNavbarContext.Provider value={setToggleNavbar} >

				<accordionContext.Provider value={accordion} >
					<setAccordionContext.Provider value={setAccordion} >
						{children}
					</setAccordionContext.Provider>
				</accordionContext.Provider>

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

export function useAccordion(){
	return useContext(accordionContext)
}

export function useSetAccordion(){
	return useContext(setAccordionContext)
}