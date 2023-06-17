const Portfolio =()=>{
    return(
        <>
            <div id="portfolio">
   <div class="container">
      <h1 class="sub-title">My Projects</h1>
      <div class="work-list">
         <div class="work">
            <img src="Best-Taxi-Apps.jpg" alt="the app taxi"/>
            <div class="layer">
               <h4 class="work-title">Taxiji</h4>
               <p class="work-description">This application aimed to help college student to save time by reserving a taxi at a specific time and a specific number of people.</p>
               <h5 class="titleS">Built with</h5>
               <ul class="work-tools">
                  <li>React</li>
                  <li>JavaScript</li>
               </ul>               
               <a href="/#"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
         <div class="work">
            <img src="book-store.jpg" alt="Book store application"/>
            <div class="layer">
               <h3>Book Store</h3>
               <p>The website aimed to help the librarian in the organization process and it helps the user to find the book easily.</p>
               <a href="/#"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
         <div class="work">
            <img src="personel-portfolio/work-3.png" alt="Portfolio application"/>
            <div class="layer">
               <h3>Online shopping App</h3>
               <p>The app connects you to the talented people around the world.</p>
               <a href="/#"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
         </div>
      </div>
      <a href="/#" class="btn">See more</a>
   </div>
</div>
        </>
    );
}
export default Portfolio;