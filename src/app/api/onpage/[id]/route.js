import { NextResponse } from "next/server";


export const GET=async({params})=>{


    const url=params.url

    const encoded=btoa('bhavikaaggarwal2002@gmail.com:107ae6f871825ef9')


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

    try {
      
      const response = await fetch('https://api.dataforseo.com/v3/on_page/task_post',
      
      {
        method:"POST",
        
        headers:{'Authorization' : `Basic ${encoded}`, 'Content-Type':'application/json'}
      ,
      body:JSON.stringify(post_array)
      }
      );
  
      var result = await response.json()

      
  // Result data
  console.log(result.tasks[0].id);

  const task_id=result.tasks[0].id

  const res = await fetch(`https://api.dataforseo.com/v3/on_page/summary/${task_id}`,
      
      {
        method:"GET",
        
        headers:{'Authorization' : `Basic ${encoded}`, 'Content-Type':'application/json'}
      ,
    
      }
      );
  
      var result = await res.json()
      console.log(result)

      return new NextResponse(result,{status:200})









    } catch (error) {
      console.log(error)
      return new NextResponse(error,{status:500})
    }
}