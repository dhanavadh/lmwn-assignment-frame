"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

const ShareOrderPageCompleted = () => {

const [isOpen, setIsOpen] = useState(false)

function closeModal() {
setIsOpen(false)
}

function openModal() {
setIsOpen(true)
}
  return (
    <div className="flex flex-col justify-between items-center relative max-w-[375px] max-h-[812px] font-[family-name:var(--font-noto-sans-thai)]">
                                    
        <div className="flex flex-col justify-start overflow-x-auto scrollbar-hide">
          
            <div className="w-full h-[calc(100vh)]">
              
              <div className='w-[375px] h-screen top-0'>
                <div className="sticky top-0 flex justify-center h-[62px] w-full z-50 bg-white">
                  <img src="../../asset/Status_Bar_trans.svg" className="absolute"></img>
                  <img src="../../asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] bg-white w-full border-b-[1px] z-50">
                    <div className='px-4 flex flex-col items-start z-30'>
                        <div className='flex items-center mb-[6px]'>
                            <img src="../../asset/icon/chevron_left.svg" className="w-8 h-8 mr-3" onClick={() => window.location.href = '/order/store1'}></img>                            
                            <p className='text-[16px] ml-1 font-semibold'>Mixue - มี่เสวี่ย สุพรีม สามเสน</p>                                
                        </div>
                        <div className='flex items-center mt-[12px] mb-[5px]'>                            
                            <p className='text-[16px] font-semibold'>แชร์ตะกร้า</p>                                
                        </div>
                        
                        
                    </div>
                    <div className='h-1 w-full bg-[#EEEEEE]'></div>                    
                </div>
                {/* List Item */}
                
                <Link href='/order/store1/shareorder/orderitem' className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                    <img src='../../asset/icon/profile.png' className='h-16 w-16 rounded-full'></img>
                    <div className='flex flex-col w-3/4'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[16px] font-semibold tracking-tight'>Moon</p>
                            <p className='text-[16px] font-semibold text-[#00AA47]'>฿50.00</p>
                        </div>
                        <p className='text-[14px] font-semibold text-[#7D7D7D] tracking-tight'>รายการอาหารที่สั่ง</p>                        
                        <div className='flex justify-between items-start my-2'>
                            <div className='flex items-start gap-2'>
                                <p className='text-[12px] px-1.5 border-[1px] rounded-md font-semibold'>1</p>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] font-semibold'>ชานมไข่มุก</p>
                                    <p className='text-[12px] '>หวานปกติ, น้ำแข็งปกติ</p>
                                </div>
                            </div>
                            <p className='text-[12px] font-semibold'>฿50.00</p>
                        </div>
                        <div className='flex justify-between items-start my-0.5'>                                                                
                            <p className='text-[12px] '>ค่าอาหาร</p>
                            <p className='text-[12px] '>฿50.00</p>
                        </div>
                        <div className='flex justify-between items-start my-0.5'>                                                                
                            <p className='text-[13px] font-semibold text-[#00AA47]'>ส่วนต่างค่าอาหารขั้นต่ำ</p>
                            <p className='text-[13px] font-semibold text-[#00AA47]'>฿30.00</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='../../asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 958 m (30 นาที)</p>
                        </div>
                        <div className='flex items-center justify-end mt-1.5'>                            
                            <div className='flex items-center'>
                                <p className='text-[12px] text-[#404040] text-end font-semibold'>แชร์ตะกร้ากับ Moon</p>
                                <img src='../../asset/icon/chevron_right_black.svg' className='h-[16px]'></img>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/order/store1' className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                    <img src='../../asset/icon/profile_2.png' className='h-16 w-16 rounded-full'></img>
                    <div className='flex flex-col w-3/4'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[16px] font-semibold tracking-tight'>Cony</p>
                            <p className='text-[16px] font-semibold text-[#00AA47]'>฿45.00</p>
                        </div>
                        <p className='text-[14px] font-semibold text-[#404040] tracking-tight'>รายการอาหารที่สั่ง</p>                        
                        <div className='flex justify-between items-start my-2'>
                            <div className='flex items-start gap-2'>
                                <p className='text-[12px] px-1.5 border-[1px] rounded-md font-semibold text-[#7D7D7D]'>1</p>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] font-semibold '>สตรอว์เบอร์รี่ซันเดย์</p>
                                    <p className='text-[12px] '>รับวาฟเฟิลบด</p>
                                </div>
                            </div>
                            <p className='text-[12px] font-semibold'>฿45.00</p>
                        </div>
                        <div className='flex justify-between items-start my-0.5'>                                                                
                            <p className='text-[12px] '>ค่าอาหาร</p>
                            <p className='text-[12px] '>฿45.00</p>
                        </div>
                        <div className='flex justify-between items-start my-0.5'>                                                                
                            <p className='text-[13px] font-semibold text-[#00AA47]'>ส่วนต่างค่าอาหารขั้นต่ำ</p>
                            <p className='text-[13px] font-semibold text-[#00AA47]'>฿35.00</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='../../asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 958 m (30 นาที)</p>
                        </div>
                        <div className='flex items-center justify-end mt-1.5'>                            
                            <div className='flex items-center'>
                                <p className='text-[12px] text-[#404040] text-end font-semibold'>แชร์ตะกร้ากับ Moon</p>
                                <img src='../../asset/icon/chevron_right_black.svg' className='h-[16px]'></img>
                            </div>
                        </div>
                    </div>
                </Link>
    
                    
          


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
                        <img src='/../../asset/icon/moon-error.png' className='w-1/4'></img>
                        
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

export default ShareOrderPageCompleted