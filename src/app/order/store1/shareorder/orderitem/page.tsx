"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import FoodOrder from '@/app/Components/FoodOrder'

const OrderItemPage = () => {

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
                    <img src='../../../asset/banner/shop1/banner.png' className='absolute z-[-1] top-0 brightness-50 w-[375px]'></img>
                </div>
                <div className="sticky top-0 flex justify-center h-[62px] z-30">
                  <img src="../../../asset/Status_Bar_W.svg" className="absolute"></img>
                  <img src="../../../asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] w-full ">
                    <div className='px-4 flex justify-between items-center z-30 mt-1 mb-[70px]'>
                        <div className='flex'>
                            <img src="../../../asset/icon/chevron_left_weight.svg" className="w-8 h-8 bg-white rounded-full" onClick={() => window.location.href = '/order/store1/shareorder'}></img>
                        </div>
                        <div className="flex items-center gap-1.5">                            
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../../../asset/icon/group_add.svg" className="w-6 h-6"></img>
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../../../asset/icon/share.svg" className=""></img>
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full'>
                                <img src="../../../asset/icon/more_vert.svg" className=""></img>
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
                                    <img src="../../../asset/icon/chevron_right_black.svg" className=""></img>
                                </div>  
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 p-1.5 bg-white rounded-full mr-1'>
                            <img src="../../../asset/icon/fav_black.svg" className=""></img>
                        </div> 
                    </div> 
                    <div className='flex gap-2 mb-3'>
                        <div className='flex items-center justify-center border-[1px] rounded-md px-1 py-[3px]'>
                            <img src='../../../asset/icon/star.svg' className='h-4 mr-1'></img>
                            <p className='text-[12px] text-[#404040] leading-tight'>4.7 (67)</p>
                            <img src='../../../asset/icon/chevron_right_light.svg' className='h-4'></img>
                        </div>
                        <div className='flex items-center justify-center border-[1px] rounded-md'>
                            <div className='flex items-center justify-center border-r-[1px] rounded-md px-1 py-[3px]'>
                                <img src='../../../asset/icon/deliver.svg' className='h-4 mr-1'></img>
                                <p className='text-[12px] text-[#404040]'>จัดส่ง</p>
                                <img src='../../../asset/icon/arrow_drop_down.svg' className='h-4'></img>
                            </div>
                            <p className='text-[12px] text-[#404040] px-1 leading-tight'>฿0 · 958 ม. (30 นาที)</p>
                        </div>

                    </div>
                    <Link href='/summary' className='flex justify-between items-center bg-[#f2fff8] px-4 py-2 rounded-lg mb-3'>
                        <div className='flex items-center gap-3'>                            
                                <div className='flex items-center justify-center'>
                                    <img src='../../../asset/icon/wait.gif' className='w-20'></img>
                                </div>
                                <div className=''>                                    
                                    <p className='text-[16px] font-semibold tracking-tight leading-6'>คุณกำลังแชร์ตะกร้ากับ Moon</p>
                                    <p className='text-[12px] font-semibold text-[#00ab47]'>เลือกเมนูที่สนใจและดูคำสั่งซื้อได้ที่นี่</p>
                                </div>
                        </div>
                        <div className='flex items-center justify-center w-8 h-8'>
                            <img src="../../../asset/icon/chevron_right_black.svg" className=""></img>
                        </div>
                    </Link>
                    <div className='flex gap-2 mb-3'>
                        <div className='flex items-center justify-center border-[1px] rounded-md px-2 py-1 gap-2'>    
                            <img src='../../../asset/icon/deliver.svg' className='h-5'></img>                            
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
                        <img src='../../../asset/icon/search.svg' className='py-2'></img>
                        <img src='../../../asset/icon/list.svg' className='py-2'></img>
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
                        <div className='flex flex-col' onClick={openModal}>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../../../asset/banner/shop1/menu1.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>น้ำมะนาว</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿30</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../../../asset/banner/shop1/menu2.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>สตรอว์เบอร์รี่ซันเดย์</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿45</p>
                        </div>
                    </div>
                    <div className='flex justify-between mb-8'>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../../../asset/banner/shop1/menu3.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>โอรีโอ้ซันเดย์</p>
                            <p className='mt-[10px] text-[13px] font-semibold'>฿45</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='relative w-[165px] h-[165px] bg-blue-300 rounded-md'>
                                <img src='../../../asset/banner/shop1/menu4.png' className='object-cover w-full h-full'></img>
                            </div>
                            <p className='mt-2 text-[13px] font-semibold'>ชานมไข่มุก</p>
                            <div className='mt-[10px] flex items-start justify-between'>
                                <p className='text-[13px] font-semibold'>฿50</p>
                                <div className='relative bg-[#00AA47] rounded-full w-7 h-7 flex items-center justify-center'>
                                    <p className='text-[15px] font-semibold text-white absolute'>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


              </div>
                         
                           
            </div>          
        </div>

        <FoodOrder />

      
        
      <>      
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                {/* <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <div className="fixed inset-0 bg-white" />
                </Transition.Child> */}
      
                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex max-w-[375px] max-h-[812px] items-center justify-center text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                      <Dialog.Panel className="flex flex-col h-[812px] w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all font-[family-name:var(--font-noto-sans-thai)]">
                        <div className='mb-4'>
                            <div className='relative h-[150px] bg-blue-300 brightness-50'>
                                <img src='/../../../asset/banner/shop1/menu1.png' className='absolute inset-0 w-full h-full object-cover'></img>
                            </div>
                            <div className='mt-[59px] w-9 h-9 bg-white rounded-full absolute top-0 left-4 flex items-center justify-center' onClick={closeModal}>
                                <img src='/../../../asset/icon/close.svg'></img>
                            </div>
                            <div className='bg-white px-4 border-b-[1px]'>
                                <p className='py-[18px] font-semibold text-[20px]'>น้ำมะนาว</p>
                            </div>
                            <div className='overflow-y-auto h-[438px] scrollbar-hide'>
                                <div className='white-space-nowrap'>
                                <div className='border-b-[1px] pb-[14px]'>
                                    <div className='flex justify-between bg-white px-4'>
                                        <div>
                                            <p className='pt-[14px] font-semibold text-[16px]'>ท็อปปิ้ง</p>
                                            <p className=' text-[14px]'>เลือกสูงสุด 1 ข้อ</p>
                                        </div>
                                        <img src='/../../../asset/icon/arrow_drop_up.svg'></img>
                                    </div>
                                    <div className='flex mt-3 px-4 '>
                                        <div className='flex ml-1 flex-col gap-4 text-[14px] w-full'>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="checkbox" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    ไข่มุก
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                <input type="checkbox" checked readOnly className='accent-green-600 mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    วุ้นมะพร้าว
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="checkbox" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    เยลลี่พีช
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="checkbox" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    เยลลี่บราวน์ชูการ์
                                                </label>
                                                <p>฿0</p>
                                            </div>                                                       
                                        </div>

                                    </div>
                                </div>                        
                                <div className='border-b-[1px] pb-[14px]'>
                                    <div className='flex justify-between bg-white px-4'>
                                        <div>
                                            <p className='pt-[14px] font-semibold text-[16px]'>ความหวาน</p>
                                            <p className=' text-[14px]'>กรุณาเลือก 1 ข้อ</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='flex items-center px-1 py-0.5 bg-[#E6F7ED] rounded-full'>
                                                <img src='/../../../asset/icon/check_green.svg' className='h-4 w-4 mr-1'></img>
                                                <p className='text-[12px] text-[#00A837]'>ต้องระบุ</p>
                                            </div>
                                            <img src='/../../../asset/icon/arrow_drop_up.svg'></img>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 px-4 '>
                                        <div className='flex ml-1 flex-col gap-4 text-[14px] w-full'>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="radio" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    หวานปกติ (100%)
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                <input type="radio" checked readOnly className='accent-green-600 mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    หวาน (70%)
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="radio" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    หวาน (50%)
                                                </label>
                                                <p>฿0</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label className='flex items-center'>
                                                    <input type="radio" disabled readOnly className='mr-[9px] rounded-lg w-[16px] h-[16px]'/>
                                                    ไม่หวาน (0%)
                                                </label>
                                                <p>฿0</p>
                                            </div>                                                       
                                        </div>

                                    </div>
                                </div>
                                <div className='border-b-[1px] pb-[14px]'>
                                    <div className='flex justify-between bg-white px-4'>
                                        <div>
                                            <p className='pt-[14px] font-semibold text-[16px]'>รายละเอียดเพิ่มเติม</p>
                                            <p className=' text-[14px]'>กรุณาเลือก 1 ข้อ</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='flex items-center px-1 py-0.5 bg-[#E6F7ED] rounded-full'>
                                                <img src='/../../../asset/icon/check_green.svg' className='h-4 w-4 mr-1'></img>
                                                <p className='text-[12px] text-[#00A837]'>ต้องระบุ</p>
                                            </div>
                                            <img src='/../../../asset/icon/arrow_drop_up.svg'></img>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 px-4 '>
                                        <label className='flex items-center w-full text-[14px] h-[46px]'>
                                            <input type="text" disabled readOnly className='min-w-full h-full border-2 p-2 rounded-lg' placeholder='เช่น ไม่เอาผัก'/>                                            
                                        </label>

                                    </div>
                                </div>
                                </div>                        
                            </div>
                        </div>

      
                        <div className="px-4">
                            <div className='flex items-center justify-between gap-3 w-full pb-3'>
                                <div className='flex items-center justify-center gap-3 '>
                                    <div className='flex items-center justify-center h-9 w-9 rounded-full bg-[#EAEAEA] opacity-50'>
                                        <img src='/../../../asset/icon/rm.svg'></img>
                                    </div>
                                    <p className='text-[16px]'>1</p>
                                    <div className='flex items-center justify-center h-9 w-9 rounded-full bg-[#EAEAEA]'>
                                        <img src='/../../../asset/icon/add.svg'></img>
                                    </div>
                                </div>
                                <Link href='/order/store1/shareorder/orderitem_completed' className="flex justify-center rounded-[8px] border border-transparent bg-[#00B114] w-full py-2 text-[18px] font-semibold text-white hover:bg-[#00542D] focus:outline-none"
                                >
                                    <p>ใส่ตะกร้า</p>
                                </Link>                                                                
                            </div>
                          
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

export default OrderItemPage