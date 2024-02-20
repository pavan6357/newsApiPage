import React from 'react';
import jsonData from './data.json';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


const DataComponent = () => {
   return (
    <div>
         {jsonData.map((item, index) => (
           <div class="card">
           <div class="card-body" key={index}>
               <h2><strong>Title:</strong> { item.title }</h2>
                 <p><strong>Published:</strong> { item.published }</p>
                 <p><strong>Country:</strong> {item.country}</p>
                 <p><strong>Region:</strong> {item.region}</p>
                 <p class="topic" id="topic"><strong>Topic:</strong> {item.topic}</p>
                     <a href={item.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                         Link to Source
                     </a>
           </div>
           <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </div>
        
         ))}
      </div>
   );
};

export default DataComponent;
