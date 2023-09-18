"use client"
require('dotenv').config()
import React,{ useState } from 'react'
import SEOSearch from './seoSearch'

const LinkInput = () => {

  const [url,seturl]=useState("")
  const [search,setSearch]=useState(false)
  const [task_id,setTaskID]=useState("")

  
    const copyIframeCode = () => {
      const iframeCodeElement = document.getElementById('iframeCode');
      const iframeCode = iframeCodeElement.innerText;
  
      const textarea = document.createElement('textarea');
      textarea.value = iframeCode;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
  
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
  
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
  
      alert('Iframe code copied to clipboard!');
    };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    let post_array=[{
        "target": url,
          "max_crawl_pages": 1,
          "location_name": 'India',
          "language_name": 'English',
          "tag": 'body',
          "html_code": 1,
          "css_code": 1,
          "js_code": 1,
          "enable_javascript":true,
          "load_resources":true,
          "enable_browser_rendering":true
    
      }]
  
      
          
          const response = await fetch('https://api.dataforseo.com/v3/on_page/task_post',
          
          {
            method:"POST",
            
            headers:{'Authorization' : `Basic ${process.env.NEXT_PUBLIC_AUTHORIZATION}`, 'Content-Type':'application/json'}
          ,
          body:JSON.stringify(post_array)
          }
          );
      
          var result = await response.json()
      // Result data
      console.log(result.tasks[0].id);
    
      setTaskID(result.tasks[0].id)
    
    

    

    setSearch(true)
    
  
}



  return (
    <div className='bg-white'>

      <div className='my-4 text-2xl font-bold text-center'>SEO Data Generator</div>
      
      <div className='flex justify-center text-black'>
        
        <div className='w-[75%] sm:w-[50%] my-4'>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-bold" htmlFor="link">Enter the URL here</label>
            </div>
            <div className='flex flex-wrap'>
            <div className='w-[75%]'>
            <input id="link" name="link" className='text-black my-2 w-[100%] border-solid border-2 p-1 rounded-md border-black' type='text' onChange={(e)=>seturl(e.target.value)} />
            </div>
            <button type='submit' className='mx-2 px-2 py-1 bg-blue-800 text-white font-bold rounded-lg'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      {search && <SEOSearch id={task_id} />}

      <div className='text-blue-900 text-center text-2xl p-2 mt-4'>
        Want to use this tool in your website, just copy the iframe code given below and use in your website!
      </div>
      <div id="iframeCode" className='text-black text-center mt-4'>
        &lt;iframe src="https://seodatagenerator-production-1536.up.railway.app/" width="600" height="400" frameborder="0"&gt;&lt;/iframe&gt;
      </div>
      <div className='text-center mt-2 mb-4'>
      <button onClick={copyIframeCode} className='py-1 px-4 bg-blue-500 text-white text-center font-bold rounded-md'>Copy</button>
      </div>
  

      
    </div>
  )
  }

export default LinkInput