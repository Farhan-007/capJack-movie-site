import Header from "./components/header"


const CommonContainer = ({children}) =>{
return(
    <>
    <Header/>
    {children}
    </>
)
}

export default CommonContainer