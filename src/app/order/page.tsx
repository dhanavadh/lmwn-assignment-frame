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
    <div className="flex flex-col justify-between items-center relative max-w-[375px] max-h-[812px] font-[family-name:var(--font-noto-sans-thai)]">
                                    
        <div className="flex flex-col justify-start overflow-x-auto scrollbar-hide">
          
            <div className="w-full h-[calc(100vh)]">
              
              <div className='w-full h-screen top-0'>
                <div className="sticky top-0 flex justify-center h-[62px] w-full z-50 bg-white">
                  <img src="asset/Status_Bar_trans.svg" className="absolute"></img>
                  <img src="asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] bg-white w-full border-b-[1px] z-50">
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
                    <div className='flex items-start py-[9px] px-4 gap-2 overflow-x-auto scrollbar-hide'>
                        <div className='flex items-center justify-center px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED] flex-shrink-0'>
                            <img src='asset/icon/tune.svg' className='h-[21px]'></img>
                        </div>
                        <div className='flex-shrink-0'>
                            <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED] text-[#00AA47]'>เปิดอยู่</p>
                        </div>
                        <div className='flex-shrink-0'>
                            <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#ACEEC8] rounded-lg bg-[#E6F7ED] text-[#00AA47]'>แชร์ตะกร้า</p>
                        </div>
                        <div className='flex items-center gap-0.5 px-[6px] py-[2px] border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] text-[#7D7D7D] flex-shrink-0'>
                            <p className='text-[14px] font-semibold'>ราคา</p>
                            <img src='asset/icon/arrow_drop_down.svg' className='h-[21px]'></img>
                        </div>
                        <p className='text-[14px] font-semibold px-[6px] py-[2px] border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] text-[#7D7D7D] flex-shrink-0'>สั่งไว้รับเลย</p>                            
                        <div className='flex items-center gap-0.5 px-[6px] py-[2px] border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] text-[#7D7D7D] flex-shrink-0'>
                            <p className='text-[14px] font-semibold'>ราคา</p>
                            <img src='asset/icon/arrow_drop_down.svg' className='h-[21px]'></img>
                        </div>
                    </div>

                </div>
                {/* List Item */}
                <Link href='/order/store1' className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                    <img src='asset/banner/ads3.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>Mixue - มี่เสวี่ย สุพรีม สามเสน</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>4.7 (67) | ชานมไข่มุก/ไอศกรีม</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 958 m (30 นาที)</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-0.5 bg-[#E6F7ED] px-[3px] py-[3px] rounded-full mr-[2px]'>
                                <div className='relative flex items-center justify-center h-[18px]'>
                                    <span className='absolute inline-flex h-3 w-3 bg-[#00AA47] rounded-full animate-ping z-0'></span>
                                    <img src="asset/icon/people.svg" className="inline-flex relative h-[18px] bg-[#00AA47] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                </div>  
                                <p className='text-[12px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#777777] rounded-[3px] font-semibold'>มีคนสนใจแชร์ตะกร้าอยู่ 2 คน</p>                                
                            </div>                            
                        </div>  
                        <div className='flex items-center justify-between mt-1.5'>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>มี่เสวี่ย สุพรีม สามเสน</p>
                            <div className='flex items-center'>
                                <p className='text-[12px] text-[#404040] text-end font-semibold'>ดูสาขาอื่น</p>
                                <img src='asset/icon/chevron_right_black.svg' className='h-[16px]'></img>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2' onClick={openModal}>
                    <img src='asset/banner/ads5.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>ราดหน้าบางโพ</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>4.8 (10763) | อาหารจานเดียว</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 2.9km (34 นาที)</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-0.5 bg-[#E6F7ED] px-[3px] py-[3px] rounded-full mr-[2px]'>
                                <div className='relative flex items-center justify-center h-[18px]'>
                                    <span className='absolute inline-flex h-3 w-3 bg-[#00AA47] rounded-full animate-ping z-0'></span>
                                    <img src="asset/icon/people.svg" className="inline-flex relative h-[18px] bg-[#00AA47] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                </div>  
                                <p className='text-[12px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#777777] rounded-[3px] font-semibold'>มีคนสนใจแชร์ตะกร้าอยู่ 2 คน</p>                                
                            </div>                            
                        </div>                    
                    </div>
                </div>

                <div className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2' onClick={openModal}>
                    <img src='asset/banner/ads4.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>บะหมี่หัวโต (ศรีย่าน)</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>4.ค (2560) | อาหารจีน/ก๋วยเตี๋ยว</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 594 m (33 นาที)</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-0.5 bg-[#E6F7ED] px-[3px] py-[3px] rounded-full mr-[2px]'>
                                <div className='relative flex items-center justify-center h-[18px]'>
                                    <span className='absolute inline-flex h-3 w-3 bg-[#00AA47] rounded-full animate-ping z-0'></span>
                                    <img src="asset/icon/people.svg" className="inline-flex relative h-[18px] bg-[#00AA47] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                </div>  
                                <p className='text-[12px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#777777] rounded-[3px] font-semibold'>มีคนสนใจแชร์ตะกร้าอยู่ 2 คน</p>                                
                            </div>                            
                        </div>                   
                    </div>
                </div>

                <div className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2' onClick={openModal}>
                    <img src='asset/banner/kfc.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>KFC - The Seasons Mall</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>4.5 (10427) | ฟาสต์ฟู้ด/จานด่วน/เบอร์เกอร์</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿9</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 2.2km (30 นาที)</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-0.5 bg-[#E6F7ED] px-[3px] py-[3px] rounded-full mr-[2px]'>
                                <div className='relative flex items-center justify-center h-[18px]'>
                                    <span className='absolute inline-flex h-3 w-3 bg-[#00AA47] rounded-full animate-ping z-0'></span>
                                    <img src="asset/icon/people.svg" className="inline-flex relative h-[18px] bg-[#00AA47] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                </div>  
                                <p className='text-[12px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#777777] rounded-[3px] font-semibold'>มีคนสนใจแชร์ตะกร้าอยู่ 2 คน</p>                                
                            </div>                            
                        </div>  
                        <div className='flex items-center justify-between mt-1.5'>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>The Seasons Mall</p>
                            <div className='flex items-center'>
                                <p className='text-[12px] text-[#404040] text-end font-semibold'>ดูสาขาอื่น</p>
                                <img src='asset/icon/chevron_right_black.svg' className='h-[16px]'></img>
                            </div>
                        </div>
                    </div>
                </div>
                
                                
                <div className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2' onClick={openModal}>
                    <img src='asset/banner/ads2.png' className='h-[105px] w-[105px] rounded-lg'></img>
                    <div className='flex flex-col w-3/4'>
                        <p className='text-[16px] font-semibold tracking-tight'>ลุงหนวดเก้าอี้แดง</p>
                        <div className='flex items-center gap-1'>
                            <img src='asset/icon/star.svg' className='h-4'></img>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'>4.7 (5370) | อาหารตามสั่ง</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-1 border-[1px] flex-shrink-0 px-[3px] py-[2px] rounded-md mr-[2px]'>
                                <img src='asset/icon/deliver.svg' className='h-[15px]'></img>
                                <p className='text-[12px] font-bold tracking-tight leading-[12px] px-1 py-[1.5px] bg-[#DE2E42] text-white rounded-[3px]'>฿0</p>
                            </div>
                            <p className='text-[12px] text-[#7D7D7D] tracking-tight'> | 1.7km (29 นาที)</p>
                        </div>
                        <div className='flex items-center my-0.5'>
                            <div className='flex items-center gap-0.5 bg-[#E6F7ED] px-[3px] py-[3px] rounded-full mr-[2px]'>
                                <div className='relative flex items-center justify-center h-[18px]'>
                                    <span className='absolute inline-flex h-3 w-3 bg-[#00AA47] rounded-full animate-ping z-0'></span>
                                    <img src="asset/icon/people.svg" className="inline-flex relative h-[18px] bg-[#00AA47] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                </div>  
                                <p className='text-[12px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#777777] rounded-[3px] font-semibold'>มีคนสนใจแชร์ตะกร้าอยู่ 2 คน</p>                                
                            </div>                            
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