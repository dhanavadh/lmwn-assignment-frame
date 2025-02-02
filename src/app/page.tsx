"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import MenuBar from './Components/MenuBar'

export default function Home() {
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
          
            <div className="w-full h-[calc(100vh-84px)]">
              
              <div className='w-full h-[350px] top-0 bg-gradient-to-b from-[#920107] via-[#007A25] to-[#004716]  rounded-b-[20px]'>
                <div className="sticky top-0 flex justify-center h-[62px] z-30">
                  <img src="asset/Status_Bar_W.svg" className="absolute"></img>
                  <img src="asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                <div className="mx-4 z-10">
                  <div className="flex flex-col items-start mt-[18px]">
                  
                    {/* Hello Word */}
                    <div className="flex justify-between w-full items-center">
                    <div>
                      <p className="text-[16px] font-semibold text-white">สวัสดี โคนี่</p>
                      <div className="flex items-center mt-[2px]">
                      <p className="text-[18px] font-bold text-white drop-shadow-lg">มื้อนี้มีเปย์ ลดสูงสุด 70%</p>
                      <div className="flex items-center justify-center w-6 h-6 ml-[2px]">
                        <img src="/asset/icon/chevron_right.svg"></img>
                      </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-b from-[#FFFFFF] to-[#EEEEEE] rounded-[100%] shadow-md">
                      <img src="asset/icon/fav.svg" className="p-[9px]"></img>
                    </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center justify-between mt-[14px] bg-black bg-opacity-30 w-full h-[50px] rounded-lg">
                    <div className="flex items-center">
                      <img src="asset/icon/location_1.svg" className="mx-[14px] my-[15px] w-[24px]"></img>
                      <p className="text-[14px] text-white font-semibold max-w-[230px] truncate">อาคารมหาจักรีสิรินธร, ถนนพญาไท, แขวงวังใหม่</p>
                    </div>
                    <div>                      
                      <img src="asset/icon/chevron_right.svg" className="mx-[14px] my-[15px] w-[20px]"></img>
                    </div>
                    </div>

                    {/* Item Group */}
                    <div className="w-full">
                    <div className="grid grid-cols-2 gap-3 mt-4 w-full fill-">
                        <div className="flex items-center justify-between h-[80px] w-full bg-[#f9f9f9] rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => window.location.href = '/food'}>
                          <p className="ml-6 text-[14px] font-semibold">สั่งอาหาร</p>
                          <div className="flex flex-col items-center h-full justify-between">
                          <div className='flex items-start mt-[3px] px-1 py-[0.5px] bg-[#fe1f32] rounded-full'>
                            <a className="blinking-text">ลด ฿100</a>
                          </div>                                
                          <img src="/asset/menu/orderfood.png" className="h-[58px] pt-[2px] mx-[10px]"></img>
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-[80px] w-full bg-[#f9f9f9] rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={openModal}>
                          <p className="ml-6 text-[14px] font-semibold">เรียกรถ</p>
                          <div className="flex flex-col items-center h-full justify-between">
                          <a className="flex items-start mt-[3px] px-1 py-[0.5px] bg-[#ffe4e3] text-[#fe1f32] rounded-full text-[11px] font-semibold">ถูกชัวร์</a>
                          <img src="/asset/menu/drive.png" className="h-[58px] pt-[2px] rounded-lg"></img>
                          </div>
                        </div>                                                                                                                   
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4 w-full">
                        <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md" onClick={openModal}>
                          <div className="flex flex-col items-end h-full">
                          <a className="px-1 pb-[0.5px] mt-[8px] mb-[2px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                          <img src="/asset/menu/messenger.png" className="w-[54px] pt-[2px]"></img>
                          </div>
                        </div>
                        <p className="mt-[10px] text-[15px] font-semibold">แมสเซนเจอร์</p>
                        </div>                      
                        <div className="flex flex-col items-center" >
                        <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md "onClick={openModal}>
                          <div className="flex flex-col items-end h-full">
                          <a className="px-1 pb-[0.5px] mt-[8px] mb-[2px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                          <img src="/asset/menu/mart.png" className="w-[54px] pt-[2px]"></img>
                          </div>
                        </div>
                        <p className="mt-[10px] text-[15px] font-semibold" >สั่งของ</p>
                        </div>                      
                        <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-[80px] w-full bg-white rounded-lg shadow-md" onClick={openModal}>
                          <div className="flex flex-col items-end h-full">
                          <a className="px-1 pb-[0.5px] mt-[8px] mb-[8px] text-[#fe1f32] rounded-full text-[9px] bg-[#ffe4e3] font-semibold">ถูกชัวร์</a>
                          <img src="/asset/menu/coupon.png" className="w-[54px] pt-[2px]"></img>
                          </div>
                        </div>
                        <p className="mt-[10px] text-[15px] font-semibold">แพ็กเกจ</p>
                        </div>                                          
                    </div>
                    </div>

                    <div className="flex items-center justify-center h-[112px] w-full mt-[26px] bg-green-200 rounded-[5px]">
                    
                    </div>

                    <div className="flex items-start justify-start w-full h-[203px] bg-yellow-500 rounded-[5px] my-6 overflow-hidden ">
                    <img src="/asset/ads/image.png" className="w-full"></img>
                    </div>
                  </div>
                </div> 
              </div>
                         
                           
            </div>          
        </div>

      
        
      <MenuBar />
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
  );
}
