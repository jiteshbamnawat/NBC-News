import nbc from "../assets/nbc.png"

type menuProp = {
    setMenu:any
}

const Navbar = (props:menuProp) => {
  return (
    <div className="flex items-center bg-blue-950 w-screen h-16 text-white">
      <img src={nbc} className="w-10 h-6 ml-3"/>
      <h1 className="font-bold text-3xl ml-2">NBC NEWS</h1>
      <h1 onClick={()=> props?.setMenu("POLITICS")} className="font-bold ml-7 cursor-pointer">POLITICS</h1>
      <h1 onClick={()=> props?.setMenu("U.S.NEWS")}  className="font-bold ml-7 cursor-pointer">U.S.NEWS</h1>
      <h1 onClick={()=> props?.setMenu("WORLD")}  className="font-bold ml-7 cursor-pointer">WORLD</h1>
      <h1  onClick={()=> props?.setMenu("BUSINESS")} className="font-bold ml-7 cursor-pointer">BUSINESS</h1>
      <h1 onClick={()=> props?.setMenu("NEWS TIPLINE")}  className="font-bold ml-7 cursor-pointer">NEWS TIPLINE</h1>
      <h1  onClick={()=> props?.setMenu("VIDEO")} className="font-bold ml-7 cursor-pointer">VIDEO</h1>
      <h1 onClick={()=> props?.setMenu("HEALTH")}  className="font-bold ml-7 cursor-pointer">HEALTH</h1>
      <h1 onClick={()=> props?.setMenu("LIVE")}  className="font-bold ml-7 cursor-pointer">LIVE</h1>
    </div>
  )
}

export default Navbar
