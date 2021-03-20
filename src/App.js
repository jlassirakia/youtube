
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function App() {

    const  user =[{ nom:'alex', commenter:'I came here to watch the ads unfortunately I kept getting interrupted by some guy gabbing on about JavaScript.'},{ nom:'Emma ', commenter:'That class let me know what is JavaScript. I will be learn this in my hard time. Thank you very much'},{ nom:'Nadia', commenter:'It s important to put console.log at the end'}];
  
    const images =[{description: 'React Bootstrap Tutorial ',url:'https://www.youtube.com/embed/7BKjxFmfwd4'},
  ,{description:'Login system using PHP with MYSQL database',url:'https://www.youtube.com/embed/N3AkSS5hXMA'}
  ,{description:'React Router Tutorial | React For Beginners',url:'https://www.youtube.com/embed/m7OWXtbiXX8'}
  ,{description:'JAVA - How To Design Login And Register Form In Java',url:'https://www.youtube.com/embed/-_X6PhkjpzU'}
  ,{description:'PHP CRUD Tutorial with MySQL & Bootstrap 4 (Create, Read,',url:'https://www.youtube.com/embed/NCwa_xi0Uuc'}];
    return(



      
    <div className="con">
      <container>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Rechercher</Navbar.Brand>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar>
<div class="row">

  <div class="col-sm-8"><iframe title="hello" width="950" height="480" m src="https://www.youtube.com/embed/W6NZfCO5SIk" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<p className="sous-titre" > <b>JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour </b></p> <br></br>
{ user.map(com =>  (
          <div> 
             <p  className="usern" > <b>{com.nom}:</b></p>
          <p className="userC">{com.commenter}</p> 
          </div>
        )
        )}</div>
 
  <div class="col-sm-4">
       

{
  images.map(imge=> (
    <div> <p className="userd"><b>{imge.description}:</b> </p>
   <div> <iframe title="hello" width="200" height="100" m src={imge.url}
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> </div>
    
    
  
      </div>
  
  
  ))
  }</div>
</div>


</container>
   </div>
   

   
  );
}

export default App;




