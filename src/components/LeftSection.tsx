type newsProp = {
    news:any
}


const LeftSection = (props:newsProp) => {
    console.log(props)
  return (
    <div className="w-9/12">
      {props?.news?.map((data:any)=>{
        return <>
        <a href={data?.url}><div className="flex mt-4">
            <div className="pr-5">
            <h1 className="font-bold text-3xl mt-3">{data?.title}</h1>
            <hr className="mt-4"/>
            <h1 className="mt-3 font-bold">{data?.author}</h1> 
            <hr className="mt-4"/>
            <h1 className="mt-3 font-bold">{data?.description}</h1>
            </div>
         <img src={data?.urlToImage} className="w-96 h-60"/>
        </div>
        </a>
        <hr className="mt-5"/>
        </>
      })}
    </div>
  )
}

export default LeftSection
