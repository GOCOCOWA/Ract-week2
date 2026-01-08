import { useState } from 'react'
import axios from 'axios'

const url = 'https://ec-course-api.hexschool.io/v2';
const path = 'wawata'; 


function App() {
  const [data,setData]=useState({
    username:'',
    password:''

  })

          async function login(){
            console.log('longin');
        
           try{
            const res =await axios.post(`${url}/admin/signin`,data);
            console.log(res);
            const{token,expired}=res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}; `;


           }catch(err){
            console.dir(err.message);
           }
        }
        function eventHandler(e){
          const{value,name}=e.target;
          setData({
            ...data,
          [name]: value
          });

        }

  return (
    <>
      <div>
        {/* {
          JSON.stringify(data)
        } */}
        <input type="email" id="email" name='username' onChange={(e)=>{
          eventHandler(e)
        }}/>
        <input type="password" id="password" name='password' onChange={(e)=>{
          eventHandler(e)
        }}/>
        <button type="button" id="login" onClick={()=>login()}>登入</button>
    </div>
    <div>
        <button type="button" id="check">check</button>
        <button type="button" id="getProducts">取得</button>
    </div>
    
    </>
  )
}

export default App
