import { useNavigate } from "react-router-dom"

function Goback(){
    const navigate=useNavigate();
    console.log(navigate)
    const handleClick=()=>{
        navigate(-1); //lùi lại 1 bước đây là bước nhảy
    }
    return (
        <>
      <button onClick={handleClick}>Trở lại</button>
        </>
    )
} 
export default Goback