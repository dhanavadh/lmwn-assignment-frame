import React from 'react'

const FoodOrder = () => {
  return (
    <div className="flex flex-col justify-center bg-white border-t-[1px] border-neutral-300 h-[141px] ">
        <div className='h-4 mt-3'>
            <p className='text-[14px] px-4'>สั่งอีก ฿30 เพื่อประหยัดส่วนต่างค่าส่ง</p>
        </div>
              <div className="flex justify-between items-center flex-cols-4 h-[45px] mx-4 bg-[#00AA47] rounded-lg my-4 px-[14px]">
                <div className='flex items-center gap-3'>
                    <div className='bg-white rounded-md h-[22px] px-2.5 '>
                        <p className='text-[16px] font-bold text-[#00AA47]'>1</p>
                    </div>
                    <p className='text-[18px] font-bold text-white'>ตะกร้าของฉัน</p>
                </div>
                <p className='text-[18px] font-bold text-white'>฿50</p>
              </div>
              <div className="h-[34px]">
                <img src="/asset/Home_Indicator.svg" className="h-full w-full"></img>
                
              </div>
              
    </div>
    
  )
}

export default FoodOrder