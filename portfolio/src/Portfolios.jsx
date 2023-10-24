import Portfolio from "./Portfolio";

 const Portfolios = ({portfolioItems, categories ,filterPortfolio}) => {
    
  return (
        <section id="portfolio">
    <div className="pt-3">
        <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>

    </div>
{console.log(categories)}
    <div className="btn-container">
        {categories.map((category, index)=>{
        return(
            <button key={index} type="button" className="btn" onClick={()=> filterPortfolio(category)}>{category}</button>
        )
                })}
        
     </div>

    <div className="pb-12">

        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 grid gap-x-10 gap-y-7 mb-6">

            {portfolioItems.map((item) => {
                return(
                   <Portfolio key={item.id} {...item}/>
                )

            })}

          



        </div>
    </div>
</section>

  )
}

export default Portfolios;
