"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

const OrderPage = () => {

const [isOpen, setIsOpen] = useState(false)
const [show, setShow] = useState(false)

function closeModal() {
setIsOpen(false)
}

function openModal() {
setIsOpen(true)
}

const showTab = () => {
    if(window.scrollY >= 100){
        setShow(false)
    }else {
        setShow(true)
    }        

}
useEffect(() => {
  window.addEventListener('scroll', showTab);
})
  return (
    <div className="flex flex-col justify-between items-center relative max-w-[375px] max-h-[812px] font-[family-name:var(--font-noto-sans-thai)]">
                                    
        <div className="flex flex-col justify-start overflow-x-auto scrollbar-hide">
          
            <div className="w-full h-[calc(100vh)]">
              
              <div className='w-full h-screen top-0 '>
                <div className='relative top-0'>
                    <img src='../asset/banner/shop1/banner.png' className='absolute z-[-1] top-0 brightness-50 w-[375px]'></img>
                </div>
                <div className="sticky top-0 flex justify-center h-[62px] z-30">
                  <img src="../asset/Status_Bar_W.svg" className="absolute"></img>
                  <img src="../asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] w-full ">
                    <div className='px-4 flex justify-between items-center z-30 mt-1 mb-[70px]'>
                        <div className='flex'>
                            <img src="../asset/icon/chevron_left_weight.svg" className="w-8 h-8 bg-white rounded-full" onClick={() => window.location.href = '/order'}></img>
                        </div>
                        <div className="flex items-center gap-1.5">                            
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../asset/icon/group_add.svg" className="w-6 h-6"></img>
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../asset/icon/share.svg" className=""></img>
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../asset/icon/more_vert.svg" className=""></img>
                            </div>                            
                        </div>                        
                    </div>
                </div>
                {/* Search Bar */}
                <div className='flex flex-col px-4 items-start bg-white rounded-t-xl pt-4 justify-start'>
                    <div className='flex justify-between w-full mb-1'>
                        <div className='flex items-start'>
                            <div className='flex items-center gap-1'>
                                <p className='font-semibold text-[22px] text-[#404040] leading-7 tracking-tighter '>Mixue - มี่เสวี่ย สุพรีม สามเสน</p>                            
                                <div className='flex items-center justify-center w-5 h-5'>
                                    <img src="../asset/icon/chevron_right_black.svg" className=""></img>
                                </div>  
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full mr-1'>
                            <img src="../asset/icon/fav_black.svg" className=""></img>
                        </div> 
                    </div> 
                    <div className='flex gap-2 mb-3'>
                        <div className='flex items-center justify-center border-[1px] rounded-md px-1 py-[3px]'>
                            <img src='../asset/icon/star.svg' className='h-4 mr-1'></img>
                            <p className='text-[12px] text-[#404040] leading-tight'>4.7 (67)</p>
                            <img src='../asset/icon/chevron_right_light.svg' className='h-4'></img>
                        </div>
                        <div className='flex items-center justify-center border-[1px] rounded-md'>
                            <div className='flex items-center justify-center border-r-[1px] rounded-md px-1 py-[3px]'>
                                <img src='../asset/icon/deliver.svg' className='h-4 mr-1'></img>
                                <p className='text-[12px] text-[#404040]'>จัดส่ง</p>
                                <img src='../asset/icon/arrow_drop_down.svg' className='h-4'></img>
                            </div>
                            <p className='text-[12px] text-[#404040] px-1 leading-tight'>฿0 · 958 ม. (30 นาที)</p>
                        </div>

                    </div>
                    <Link href='/order/store1/shareorder' className='flex justify-between items-center bg-[#f2fff8] px-4 py-2 rounded-lg mb-3'>
                        <div className='flex items-center gap-3'>                            
                                <div className='flex items-center justify-center'>
                                    <img src='../asset/icon/wait.gif' className='w-20'></img>
                                </div>
                                <div className=''>                                    
                                    <p className='text-[16px] font-semibold tracking-tight leading-6'>2 คนกำลังรอแชร์ตะกร้ากับคุณ</p>
                                    <p className='text-[12px] font-semibold text-[#00ab47]'>ดูเมนูที่สนใจแล้วสั่งร่วมกันได้โดยไม่เสียค่าส่วนต่างขั้นต่ำ</p>
                                </div>
                        </div>
                        <div className='flex items-center justify-center w-8 h-8'>
                            <img src="../asset/icon/chevron_right_black.svg" className=""></img>
                        </div>
                    </Link>
                    <div className='flex gap-2 mb-3'>
                        <div className='flex items-center justify-center border-[1px] rounded-md px-2 py-1 gap-2'>    
                            <img src='../asset/icon/deliver.svg' className='h-5'></img>                            
                            <div className='flex flex-col border-r-[1px] border-dashed pr-2'>
                                <p className='text-[12px] font-semibold text-[#404040] leading-tight'>โค้ดส่งฟรี</p>
                                <a className='flex text-[10px] text-blue-500 bg-blue-50 px-1 py-0.5 rounded-md'>ไม่มีขั้นต่ำ</a>
                            </div>
                            <p className='flex items-center justify-center text-[10px] text-[#00ab47] bg-[#f2fff8] px-1 py-0.5 rounded-md'>ใช้</p>
                        </div>

                    </div>                    
                </div>
                <div className='h-2 bg-[#EEEEEE]'></div>
                            

                <div className='flex w-[375px] bg-white px-4 overflow-x-auto scrollbar-hide'>
                    <div className='flex whitespace-nowrap gap-4'>
                        <img src='../asset/icon/search.svg' className='py-2'></img>
                        <img src='../asset/icon/list.svg' className='py-2'></img>
                        <p className='font-medium text-[16px] text-[#00AB47] py-2 border-b-2 border-[#00AB47] '>เมนูดัง คนสั่งเยอะ</p>                        
                        <p className='text-[16px] text-[#6b6b6b] py-2 mx-1'>โปรโมชั่น</p>
                        <p className='text-[16px] text-[#6b6b6b] py-2 mx-1'>รีวิว</p>
                        <p className='text-[16px] text-[#6b6b6b] py-2 mx-1'>เมนูแนะนำ</p>
                        <p className='text-[16px] text-[#6b6b6b] py-2 mx-1'>นำมะนาว</p>                    
                    </div>
                </div> 

                <div className='flex flex-col px-4 bg-white pt-6'>
                    <p className='text-[18px] font-semibold mb-6'>เมนูดัง คนสั่งเยอะ</p>
                    <div className='flex justify-between mb-8'>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../asset/banner/shop1/menu1.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>น้ำมะนาว</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿30</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../asset/banner/shop1/menu2.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>สตรอว์เบอร์รี่ซันเดย์</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿45</p>
                        </div>
                    </div>
                    <div className='flex justify-between mb-8'>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../asset/banner/shop1/menu3.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>โอรีโอ้ซันเดย์</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿45</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../asset/banner/shop1/menu4.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>ชานมไข่มุก</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿50</p>
                        </div>
                    </div>
                </div>


              </div>
                         
                           
            </div>          
        </div>

      
        
      <>      
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
      
                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[16px] bg-white p-4 text-left align-middle shadow-xl transition-all font-[family-name:var(--font-noto-sans-thai)]">
                        <div className='flex gap-2 items-center my-2'>
                        <img src='/../asset/icon/moon-error.png' className='w-1/4'></img>
                        
                        <div className="">
                          <p className='text-[18px] font-semibold'>ยังไม่เปิดให้ใช้งาน</p>
                          <p className="text-[14px] text-gray-500">
                            เรากำลังพัฒนาหน้านี้อยู่ และพร้อมให้ทุกคนใช้งานในเร็ว ๆ นี้
                          </p>
                        </div>
                        </div>
      
                        <div className="mt-4">
                          <button
                            type="button"
                            className="flex justify-center rounded-[8px] border border-transparent bg-[#00B114] w-full py-2 text-[18px] font-semibold text-white hover:bg-[#00542D] focus:outline-none "
                            onClick={closeModal}
                          >
                            เข้าใจแล้ว
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
      </>
      </div>     
  )
}

export default OrderPage