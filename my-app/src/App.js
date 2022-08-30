import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import Camera from './images/camera.jpg';
 import Notebook from './images/note.jpg'
 import Folder from './images/folder.png'
 import Plier from './images/plier.png'
 import graph from './images/graph.png';
 


function App() {
  return (
   
    <div class="main" >
      <ul>
        
        <li id="common" >Community</li>
        <li>Portolios</li>
        <li>Inspiration</li>
        <li>News</li>
        <li>Feature</li>
        <li>Jobs</li>





      </ul>
      <div className='card-container'>
      <Cards title="Services" subTitle=" Solicitudion description" description="Duis Vtae Semper Turps" logo={Plier} />
      <Cards title="Shared files" subTitle="Tempus Sapien" description={"Nunc vestibulum libero"} logo={Folder}/>
      <Cards title="Manage lists & Subscribers" subTitle="Aliquam Massa" description="Nam at rhnocus odio" logo={Notebook}/>
      <Cards title="videos & photos" subTitle="magna consectatur" description="integar risus sem maximums" logo={Camera}/>
    </div>
    <div className='line' >
      <Foo />
      <Sub />
      <Graph logo={graph} />
    </div>
    <div className='subscriibe'>
      <Footer />
      <Call />
      < Mail />
    </div>
    <div>
    
    </div>
    </div>

  
  );
}
export default App;

function Foo() {
  return (
    

    <div className='sub-content' >

      
      <h3>Committed to Our <span>Clients</span></h3>
      <p>---------------------------------------------------------</p>
  

    <p>loremLong sentences are a big communication issue,<br></br>
       especially in business andpersuasive writing. They cause the for<br></br>
        to take far longer to get the whole point of what youve written.<br></br>
    </p>
      
     
    </div>

    
  ) 
} 

function Sub(){
  return (
    <div className='count'>
      <h3><span>Solution</span>Solution for the Bottom line </h3>
      <p>------------------------------------------------------------------</p>
      <img src=''></img>
<p>loremLong sentences are a big communication issue,<br></br>
       especially in business andpersuasive writing. They cause the for<br></br>
        to take far longer to get the whole point of what youve written.<br></br>
    </p>
    </div>
  )
}

function Graph(){
  return (
   <div>
    
    <img src='./images'></img>
   </div>
  )
}

//footer

function Footer(){
  return (
    <div className='foot'>
      <h2><span>SUBSCRIBE</span></h2>
      <h6>GETNEWSLETTTERS</h6>
      <input></input>Subscribe
    </div>
  )
}

function Call(){
  return(
    <div className='foot'>
      <h2><span>FOLLOW US</span></h2>
      <h6>ON SOCIEL NETWORKS</h6>
      <p><span>@lorem</span> to take far longer to<br></br> get the whole point of what youve written
      </p>

    </div>
  )
}

function  Mail(){
    return(
      <div className='foot'>
         <h2><span>EMAIL</span></h2>
      <h6>ON SOCIEL NETWORKS</h6>
      <p><span>@lorem</span> to take far longer to<br></br> get the whole point of what youve written
      </p>
      </div>
    )

    
}