
const Portfolio = ({title, desc, tags, image, category, url}) => {
  return (
   
    <div className="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] bg-transparent  border-2 box-container">
    <div className="overflow-hidden rounded-lg">

        <a href={url} target="_blank" rel="noreferrer">
            <img className=" portfolio-image rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" src={image} alt="{title}"/>
        </a>
    </div>
    <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
        {tags.map((tag, index)=>{
            return(
                <span className="tags" key={index}>{tag} </span>
            )

        })}
       
    </div>
    <h3 className="text-lg font-bold text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252] pb-2">
        <a href={url} rel="modal:open">{title}</a>

    </h3>
    <p className=" dark:text-grey">
        {desc}
    </p>
</div>
  )
}

export default Portfolio