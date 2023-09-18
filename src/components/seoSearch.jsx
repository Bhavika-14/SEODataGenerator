"use client"
require('dotenv').config()
import React,{ useState,useEffect } from 'react'
import PageData from './pageData'
import Loader from './loader'


const SEOSearch = ({id}) => {

  const [loading,setLoading]=useState(true)
  const [pageData,setPageData]=useState(null)
  
    useEffect(()=>{



        
        async function loadData(){

          let post_array = [{
            "id": id,
            "filters": [
              ["resource_type", "=", "html"],]}];


          const response = await fetch('https://api.dataforseo.com/v3/on_page/pages',
          {
            method:"POST",
            body:JSON.stringify(post_array),
            headers:{'Authorization' : `Basic ${process.env.NEXT_PUBLIC_AUTHORIZATION}`, 'Content-Type':'application/json'},
          }
          )

          var result=await response.json()
        
          setPageData(result.tasks[0].result[0].items[0])

          

          setLoading(false)
        }
    setTimeout(loadData,15000)

        

      
      
          
        
        
    },[]
    )
 
    


  return (
    <div>
    {loading && <Loader />}
    {!loading && 
        <div>
          
          <PageData info={pageData} />
        </div>
    }
    </div>
  )
}

export default SEOSearch