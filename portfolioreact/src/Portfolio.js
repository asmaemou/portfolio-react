const Portfolio =()=>{
    return(
        <>
            <div id="portfolio">
   <div className="container">
      <h1 className="sub-title">My Projects</h1>
      <div className="work-list">
         <div className="work">
            <img src="Best-Taxi-Apps.jpg" alt="the app taxi"/>
            <div className="layer">
               <h4 className="work-title">Taxiji</h4>
               <p className="work-description">This application aimed to help college student to save time by reserving a taxi at a specific time and a specific number of people.</p>
               <h5 className="titleS">Built with</h5>
               <ul className="work-tools">
                  <li>React</li>
                  <li>JavaScript</li>
               </ul>               
               <a href="/#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="work">
            <img src="book-store.jpg" alt="Book store application"/>
            <div className="layer">
               <h3>Book Store</h3>
               <p>The website aimed to help the librarian in the organization process and it helps the user to find the book easily.</p>
               <a href="/#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="work">
            <img src="personel-portfolio/work-3.png" alt="Portfolio application"/>
            <div className="layer">
               <h3>Online shopping App</h3>
               <p>The app connects you to the talented people around the world.</p>
               <a href="/#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
      </div>
      <a href="/#" className="btn">See more</a>
   </div>
</div>
        </>
    );
}
export default Portfolio;