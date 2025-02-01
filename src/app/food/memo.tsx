import React from 'react'

const memo = () => {
  return (
    <div>
        

        <div className="px-4 z-10">
                              <div className="flex flex-col items-start">                      
                                {/* Hello Word */}
                                <div className="top-[62px] bg-white w-full ">
                                    <div className='flex justify-between items-center z-30'>
                                        <div className='flex'>
                                            <img src="asset/icon/chevron_left.svg" className="w-8 h-8 mr-3" onClick={() => window.location.href = '/'}></img>
                                            <div className='flex items-center justify-center w-8 h-8 bg-[#C2F9DC] rounded-[100%] p-1.5'>
                                                <img src="asset/icon/location_24_green.svg" className=""></img>
                                            </div>
                                            <div className='flex flex-col ml-[8px]'>
                                                <p className='text-[11px]'>ที่อยู่จัดส่ง</p>
                                                <p className="text-[14px] text-[#00ae35] font-semibold max-w-[230px] truncate">อาคารมหาจักรีสิรินธร, ถนนพญาไท, แขวงวังใหม่</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center w-9 h-9">
                                        <img src="asset/icon/fav_black.svg" className="p-[9px]"></img>
                                        </div>
                                    </div>
                                </div>
            
                                {/* Search Bar */}
                                <div className="flex items-center justify-between my-[16px] bg-white w-full h-[40px] rounded-full shadow-all-lg">
                                    <div className="flex items-center ">
                                    <img src="asset/icon/search_green.svg" className="mx-[14px] my-[15px] w-[24px]"></img>
                                    <p className="text-[13px] text-[#404040] max-w-[300px] truncate leading-3">🧧 Chester's แจกอั่งเปา รับฟรี! ถุงเชสตี้เรียกทรัพย์ 💰</p>
                                    </div>
                                </div>
                              </div>
                            </div> 
                            {/* Item Group */}
                            <div className="flex flex-col gap-2 w-full px-4 py-4 bg-gradient-to-b from-[#3BD28F] via-[#00BF62] to-[#00BC55]">    
        
                                <div className='flex items-center justify-between bg-white px-4 py-2 rounded-xl gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center justify-center w-[60px] h-[60px] rounded-[100%]'>
                                            <img src='asset/icon/coupon.png' className='w-[60px]'></img>
                                        </div>
                                        <div>
                                            <a className='text-[12px] font-medium px-[7px] py-[1.5px] bg-[#FE1F32] text-white rounded-full'>เฉพาะคุณ</a>
                                            <p className='text-[18px] font-semibold'>เราคิดถึงคุณนะ!</p>
                                            <p className='text-[14px]'>ใส่โค้ด “LMMSSU” ลด 20%</p>
                                        </div>
                                        
                                    </div>
                                    <img src='asset/icon/expand_circle_right.svg' className='w-6 opacity-30'></img>
                                </div>
                                
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className='bg-white p-2 rounded-xl'>
                                            <p className='text-[18px] font-semibold'>เราคิดถึงคุณนะ!</p>
                                        </div>      
                                        <div className='bg-white p-2 rounded-xl'>
                                            <p className='text-[18px] font-semibold'>สินค้าแนะนำ</p>
                                        </div>      
                                    </div>                                        
                            </div>


    </div>
  )
}

export default memo