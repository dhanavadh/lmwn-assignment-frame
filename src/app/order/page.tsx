"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

const OrderPage = () => {

const [isOpen, setIsOpen] = useState(false)

function closeModal() {
setIsOpen(false)
}

function openModal() {
setIsOpen(true)
}
  return (
    <div className="flex flex-col justify-between items-center relative min-w-screen min-h-screen font-[family-name:var(--font-noto-sans-thai)]">
                                    
        <div className="flex flex-col justify-start overflow-x-auto scrollbar-hide">
          
            <div className="w-full h-[calc(100vh)]">
              
              <div className='w-full h-screen top-0'>
                <div className="sticky top-0 flex justify-center h-[62px] w-full z-30 bg-white">
                  <img src="asset/Status_Bar_trans.svg" className="absolute"></img>
                  <img src="asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] bg-white w-full border-b-[1px]">
                    <div className='px-4 flex flex-col items-start z-30'>
                        <div className='flex items-center mb-[6px]'>
                            <img src="asset/icon/chevron_left.svg" className="w-8 h-8 mr-3" onClick={() => window.location.href = '/food'}></img>                            
                            <p className='text-[16px] ml-1 font-semibold'>ร้านใกล้บ้าน ค่าส่งเริ่มต้น ฿0</p>                                
                        </div>
                        <div className='flex items-center my-[6px] px-1.5'>
                            <img src="asset/icon/location_24_green.svg" className="w-4 h-4" onClick={() => window.location.href = '/food'}></img>                            
                            <p className='text-[14px] ml-2'>ที่อยู่จัดส่ง: <a className='font-semibold'>อาคารมหาจักรีสิรินธร</a></p>                                
                        </div>
                        
                        
                    </div>
                    <div className='h-1 w-full bg-[#EEEEEE]'></div>
                    <div className='flex items-start py-[9px] px-4 gap-2'>
                        <div className='flex items-center justify-center px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED]'>
                            <img src='asset/icon/tune.svg' className='h-[21px]'></img>
                        </div>
                        <div>
                            <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED] text-[#00AA47]'>เปิดอยู่</p>
                        </div>
                        <div>
                            <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED] text-[#00AA47]'>แชร์ตะกร้า</p>
                        </div>
                        <div className='flex items-center gap-0.5 px-[6px] py-[2px] border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] text-[#7D7D7D]'>
                            <p className='text-[14px] font-semibold'>ราคา</p>
                            <img src='asset/icon/arrow_drop_down.svg' className='h-[21px]'></img>
                        </div>
                        <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] text-[#7D7D7D]'>สั่งไว้รับเลย</p>                            

                    </div>

                </div>
                {/* Search Bar */}
                <div className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                    <img src='asset/banner/kfc.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>KFC - The Seasons Mall</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D]'>4.5 (10427) | ฟาสต์ฟู้ด/จานด่วน/เบอร์เกอร์</p>
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
                        <img src='/asset/icon/moon-error.png' className='w-1/4'></img>
                        
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