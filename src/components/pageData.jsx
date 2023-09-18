import React from 'react'

const PageData = ({info}) => {

  const checks=info.checks.seo_friendly_url
  console.log(checks)
  return (
    <div className='bg-white text-center text-black'>

      <div className='my-4 font-bold text-4xl'>Results</div>

    <div className='flex justify-center'>
    <div className='p-2 my-2 bg-blue-800 text-white rounded-full w-[75%] sm:w-[50%]'>
      <div className='font-bold'>On-Page Score</div>
      <div>{info.onpage_score}</div>
    </div>
    </div>

    <div className='flex justify-center'>
    <div className='p-2 bg-green-700 text-white my-4 rounded-md w-[75%]'>
      <div className='font-bold'>Title</div>
      <div>{info.meta.title}</div>
    </div>
    </div>

    <div className='flex justify-center'>
    <div className='p-2 bg-green-700 text-white my-4 rounded-md w-[75%]'>
      <div className='font-bold'>Description</div>
      <div>{info.meta.description}</div>
    </div>
    </div>
    
    <div className='flex justify-center'>
      <div className='w-[75%]'>
    <div className='flex justify-around my-4 flex-wrap'> 

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>Internal Links</div>
        <div>{info.meta.internal_links_count}</div>
      </div>

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>External Links</div>
        <div>{info.meta.external_links_count}</div>
      </div>

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>Inbound Links</div>
        <div>{info.meta.inbound_links_count}</div>
      </div>

    </div>

    <div className='flex justify-around sm:my-4 my-2 flex-wrap'>

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>Images Count</div>
        <div>{info.meta.images_count}</div>
      </div>

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>Scripts Count</div>
        <div>{info.meta.scripts_count}</div>
      </div>

      <div className='p-2 rounded-md text-white bg-yellow-500 my-2 px-8'>
        <div className='font-bold'>Plain Text Size</div>
        <div>{info.meta.content.plain_text_size}</div>
      </div>

    </div>
    
    </div>
    </div>




    <div className='flex justify-center'>
      <div className='w-[75%]'>

        <div className='grid sm:grid-cols-4 grid-cols-1 gap-4 my-4 flex-wrap'>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Duplicate Title</div>
            <div>{info.checks.duplicate_title && "True"}{!info.checks.duplicate_title && "False"}</div>  
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Duplicate Description</div>
            <div>{info.checks.duplicate_description && "True"}{!info.checks.duplicate_description && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Duplicate Content</div>
            <div>{info.checks.duplicate_content && "True"}{!info.checks.duplicate_content && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Is 4xx Code</div>
            <div>{info.checks.is_4xx_code && "True"}{!info.checks.is_4xx_code && "False"}</div>
          </div>

        </div> 

        <div className='grid sm:grid-cols-4 grid-cols-1 gap-4 my-4 flex-wrap'>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Is 5xx Code</div>
            <div>{info.checks.is_5xx_code && "True"}{!info.checks.is_5xx_code && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Low Character Count</div>
            <div>{info.checks.low_character_count && "True"}{!info.checks.low_character_count && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Low Content Rate</div>
            <div>{info.checks.low_content_rate && "True"}{!info.checks.low_content_rate && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>Low Readability Rate</div>
            <div>{info.checks.low_readability_rate && "True"}{!info.checks.low_readability_rate && "False"}</div>
          </div>
    
      </div>

      <div className='grid sm:grid-cols-4 grid-cols-1 gap-4 my-4 flex-wrap'>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>No Favicon</div>
            <div>{info.checks.no_favicon && "True"}{!info.checks.no_favicon && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>No Image Alt</div>
            <div>{info.checks.no_image_alt && "True"}{!info.checks.no_image_alt && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>No H1 Tag</div>
            <div>{info.checks.no_h1_tag && "True"}{!info.checks.no_h1_tag && "False"}</div>
          </div>

          <div className='p-2 rounded-md text-white bg-blue-500 my-2 px-8'>
            <div className='font-bold'>SEO Friendly URL</div>
            <div>{info.checks.seo_friendly_url && "True"}{!info.checks.seo_friendly_url && "False"}</div>
          </div>

      </div>

    </div>
  </div>
    

    {info.meta.htags &&<div> <div className='my-4 text-center text-2xl font-bold'>H Tags</div>
      {info.meta.htags.h1 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H1 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h1.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
      {info.meta.htags.h2 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H2 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h2.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
      {info.meta.htags.h3 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H3 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h3.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
      {info.meta.htags.h4 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H4 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h4.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
      {info.meta.htags.h5 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H5 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h5.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
      {info.meta.htags.h6 && <div className='flex justify-center text-white my-4'><div className='w-[75%] sm:w-[50%]'><div className='bg-red-400 rounded-lg py-4'><div className='font-bold text-white'>H6 Tags</div><div className='flex justify-center'><div className='text-left sm:w-[50%] w-[75%]'>{info.meta.htags.h6.map((tag,key)=><div className='sm:my-2 my-4' key={key}>{tag}</div>) }</div></div></div></div></div>}
 
    </div>}

    {info.page_timing && <div>
      <div className='my-4 text-center text-2xl font-bold'>Speed Insights </div>

      <div className='flex justify-center'>
      <div className='w-[75%]'>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 my-4 flex-wrap'>

      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'>
        <div className='font-bold'>Time to Secure Connection</div>
        <div>{info.page_timing.time_to_secure_connection} ms</div>
      </div>
      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'>
        <div className='font-bold'>Waiting Time</div>
        <div>{info.page_timing.waiting_time} ms</div>

      </div>
      
      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'> 
        <div className='font-bold'>Download Time</div>
        <div>{info.page_timing.download_time} ms</div>
      </div>

      </div>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 my-4 flex-wrap'>

      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'>
        <div className='font-bold'>Time to Interactive</div>
        <div>{info.page_timing.time_to_interactive} ms</div>
      </div>
      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'>
      <div className='font-bold'>DOM Complete</div>
      <div>{info.page_timing.dom_complete} ms</div>
      </div>
      <div className='p-2 rounded-md text-white bg-green-500 my-2 px-8'>
        <div className='font-bold'>Largest Contentful Paint</div>
        <div>{info.page_timing.largest_contentful_paint} ms</div>
      </div>

      </div>

      </div>
      </div>
      </div>}
    </div>
  )
}

export default PageData