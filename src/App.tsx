import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import tokenApi from './tokenApi';
import delete_file from './delete_file';
import upload_file from './upload_file';

function App() {
  const regex = /code=(.*)/gm;

  const str = window.location.href;
  let code;
  let token_code="";
  const [check,setCheck]=useState(false)
  

  while ((code = regex.exec(str)) !== null) {
      if (code.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      code.forEach((match, groupIndex) => {
          // console.log(`Found match, group ${groupIndex}: ${match}`);
          token_code = match;
      });
  }
 
  


  return (
    <div className="App">
      <header className="App-header">

        {
          token_code === "" 
          ?<button className="btn btn-primary" type='button' onClick={() => authApi()}>Authenticate</button>
          :!check ?<button className="btn btn-primary" type='button' onClick={() => tokenApi(token_code,setCheck,check)}>Get Token</button>
          
        :
        <div>
        <button className="btn btn-primary" type='button' onClick={() => delete_file()}>Delete</button>
        <button className="btn btn-primary" type='button' onClick={() => upload_file()}>Upload</button>
          </div>
/* //         <div>
//         <h1>DigitalOcean</h1>
        
//         <p>Please select a file and submit the form to upload</p>
        
        
//           <label htmlFor="file">Upload a file</label>
//           <input type="file" name="upload" />
//           <input type="submit" className="button" />
        
//           var bucketName = 'myBucket';
//         s3.deleteBucket({ Bucket: bucketName }, function (err, data) { */}
//     if (!err) {
//         console.log(data) // successful response
//     } else {
//         console.log(err)  // an error ocurred
//     }
// });
//         </div>
        
      }
      </header>
      
    </div>
  );
}

export default App;


