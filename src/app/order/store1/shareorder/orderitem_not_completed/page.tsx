"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

const OrderItemNotCompletedPage = () => {

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
                  <img src="../../../asset/Status_Bar_trans.svg" className="absolute"></img>
                  <img src="../../../asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] bg-white w-full z-50">
                    <div className='px-4 flex flex-col items-start z-30'>
                        <div className='flex items-center mb-[6px]'>
                            <img src="../../../asset/icon/chevron_left.svg" className="w-8 h-8 mr-3" onClick={() => window.location.href = '/order/store1/shareorder/orderitem'}></img>                            
                            <p className='text-[16px] ml-1 font-semibold'>Mixue - มี่เสวี่ย สุพรีม สามเสน</p>                                
                        </div>                                                                        
                    </div>                    
                </div>
                {/* List Item */}
                <div className='flex flex-col px-4 items-start mt-[12px] mb-[5px]'>                            
                  <div className='flex justify-between w-full items-end mb-[10px]'>
                    <p className='text-[16px] font-semibold'>ที่อยู่การจัดส่ง</p>                                                                               
                    <p className='text-[14px] font-semibold text-[#00AA47]'>แก้ไข</p>                                                                               
                  </div>
                  <div className='flex items-center justify-between border-b-[1px] w-full pb-[6px]'>
                    <div className='flex items-center'>
                      <img src='../../../asset/icon/location_pin.svg' className=' mr-2'></img>
                      <div>
                        <p className='text-[12px] font-semibold'>อาคารมหาจักรีสิรินธร</p>
                        <p className='text-[12px]'>Tay · 099-999-9999</p>
                      </div>
                    </div>
                    <img src='../../../asset/icon/chevron_right_black.svg'></img>
                  </div>                    
                  <div className='flex items-center justify-between w-full py-[6px]'>
                    <div className='flex items-center'>
                      <img src='../../../asset/icon/note.svg' className=' mr-2'></img>
                      <div>
                        <p className='text-[12px] font-semibold'>รูปแบบการจัดส่ง</p>
                        <p className='text-[12px] font-semibold text-[#00AA47]'>ระบุโน้ตถึงไรเดอร์</p>
                      </div>
                    </div>
                    <img src='../../../asset/icon/chevron_right_black.svg'></img>
                  </div>       
                  <div className='flex items-center w-full gap-2 pb-6'>
                    <span className='w-[64px]'></span>
                    <div className='flex flex-col w-full border-[1px] rounded-md p-2'>
                      <div className='flex items-center justify-between mb-1.5'>
                        <img src='../../../asset/icon/table.svg'></img>
                        <p className='text-[12px] font-medium text-[#00AB47] bg-[#DCF7DF] rounded-lg px-1'>แนะนำ</p>
                      </div>
                      <p className='text-[12px] font-medium'>แขวน/วาง</p>
                      <p className='text-[12px] font-medium'>ไว้จุดที่ระบุ</p>
                    </div>
                    <div className='flex flex-col w-full border-[1px] rounded-md p-2'>
                      <div className='flex items-center justify-between mb-1.5'>
                        <img src='../../../asset/icon/hand_send.svg'></img>                      
                      </div>
                      <p className='text-[12px] font-medium'>ส่งถึงมือ/</p>
                      <p className='text-[12px] font-medium'>ออกมารับเอง</p>
                    </div>
                    <div className='flex flex-col w-full border-[1px] rounded-md p-2'>
                      <div className='flex items-center justify-between mb-1.5'>
                        <img src='../../../asset/icon/people_black.svg'></img>                        
                      </div>
                      <p className='text-[12px] font-medium'>ฝากไว้กับ</p>
                      <p className='text-[12px] font-medium'>คนที่ระบุ</p>
                    </div>
                  </div>             
                </div>
                <div className='h-2 bg-[#EEEEEE]'></div>

                <div className='flex flex-col px-4 items-start my-[20px]'>                            
                  <div className='flex w-full items-center gap-2 mb-[10px]'>
                    <p className='text-[16px] font-semibold'>ตัวเลือกการจัดส่ง</p>                                                                               
                    <img src='../../../asset/icon/info.svg'></img>                                                                      
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <div className='flex items-center justify-between w-full py-[8px] border-[1px] rounded-md p-2'>
                      <p className='text-[12px] font-medium'>ส่งตรงทันใจ · {'<'} 20 นาที</p>
                      <p className='text-[12px] font-medium'>฿26</p>
                    </div>
                    <div className='flex items-center justify-between w-full py-[8px] border-[1px] border-[#00ab47] rounded-md p-2 bg-[#f2fff8]'>
                      <p className='text-[12px] font-medium'>ส่งปกติ · 28 นาที</p>
                      <p className='text-[12px] font-medium'>฿10</p>
                    </div>
                  </div>
                </div>
                <div className='h-2 bg-[#EEEEEE]'></div>

                <div className='flex flex-col px-4 items-start mt-[20px]'>                            
                  <div className='flex w-full items-center justify-between gap-2 mb-[10px]'>
                    <p className='text-[16px] font-semibold'>รายการอาหารที่สั่ง</p>                                                                               
                    <p className='text-[14px] font-semibold text-[#00AA47]' onClick={() => window.location.href = '/order/store1/shareorder/orderitem'}>สั่งอาหารเพิ่ม</p>                                                                            
                                                          
                  </div>
                  {/* <div className='flex justify-between items-start my-2 w-full'>
                            <div className='flex items-start gap-2'>
                                <p className='text-[12px] px-1.5 border-[1px] rounded-md font-semibold'>1</p>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] font-semibold'>ชานมไข่มุก</p>
                                    <p className='text-[12px] '>หวานปกติ, น้ำแข็งปกติ</p>
                                </div>
                            </div>
                            <p className='text-[12px] font-semibold'>฿50.00</p>
                  </div>                   */}
                </div>
                
                <Link href='/order/store1/shareorder/orderitem' className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                    <div className='flex flex-col items-center gap-1 w-1/5'>
                      <img src='../../../asset/icon/profile.png' className='h-16 w-16 rounded-full'></img>
                      <p className='text-[14px] font-semibold text-[#00AA47]'>ยืนยันแล้ว</p>
                    </div>
                    <div className='flex flex-col w-4/5'>
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
                        <div className='flex justify-between items-start'>                                                                
                            <p className='text-[12px] '>ค่าอาหาร</p>
                            <p className='text-[12px] '>฿50.00</p>
                        </div>
                        <div className='flex justify-between items-start'>                                                                
                            <p className='text-[12px] '>ค่าจัดส่ง</p>
                            <p className='text-[12px] '>฿10.00</p>
                        </div>
                        <div className='flex justify-between items-start my-0.5'>                                                                
                            <p className='text-[13px] font-semibold text-[#00AA47]'>ทั้งหมด</p>
                            <p className='text-[13px] font-semibold text-[#00AA47]'>฿50.00</p>
                        </div>                        
                    </div>
                </Link>

                <Link href='/order/store1/shareorder/orderitem' className='flex px-4 bg-white border-b-[1px] border-[#EEEEEE] pb-[23px] pt-4 gap-2'>
                <div className='flex flex-col items-center gap-1 w-1/5'>
                      <img src='../../../asset/icon/profile_3.png' className='h-16 w-16 rounded-full'></img>
                      <p className='text-[14px] font-semibold text-[#7D7D7D]'>กำลังสั่ง</p>
                    </div>
                    <div className='flex flex-col w-4/5'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[16px] font-semibold tracking-tight'>Tay</p>
                            <p className='text-[16px] font-semibold text-[#00AA47]'>฿0.00</p>
                        </div>
                        <p className='text-[14px] font-semibold text-[#7D7D7D] tracking-tight'>ยังไม่มีรายการอาหารที่สั่ง</p>                                              
                    </div>
                </Link>

                <div className='h-2 bg-[#EEEEEE]'></div>

                <div className='flex flex-col px-4 items-start mt-[20px]'>                            
                  <div className='flex w-full items-center justify-between gap-2 mb-[10px]'>
                    <p className='text-[16px] font-semibold'>ชวนเพื่อนมาแชร์ตะกร้า</p>                                                                               
                    <p className='text-[14px] font-semibold text-[#00AA47]'>คัดลอกลิงก์</p>                                                                            
                                                          
                  </div>
                  <div className='flex justify-between items-start my-2 w-full'>
                  <div className='flex w-full justify-between items-center bg-[#f2fff8] px-4 py-2 rounded-lg mb-3 gap-2'>
                        <div className='flex items-center gap-2'>                            
                                <div className='flex items-center justify-center w-1/4'>
                                    <img src='../../../asset/icon/Hungry_Moon_Sticker_by_LMWN.gif' className='w-20'></img>
                                </div>
                                <div className='w-3/4'>                                    
                                    <p className='text-[16px] font-semibold tracking-tight'>ประหยัดส่วนต่างค่าอาหารขั้นต่ำกับใครก็ได้</p>
                                    <p className='text-[12px] font-semibold text-[#00ab47]'>การแชร์ตะกร้าจะคิดเงินค่าอาหารแยกกันและค่าจัดส่งคิดเฉลี่ยกัน</p>
                                </div>                                
                        </div>
                        <div className='text-[14px] text-center font-semibold px-2 py-1.5 bg-[#00ab47] rounded-lg text-white flex-shrink-0'>แชร์ลิงก์</div>
                    </div>
                  </div>                  
                </div>

                <div className='h-2 bg-[#EEEEEE]'></div>

                <div className='flex flex-col px-4 items-start mt-[20px]'>                            
                  <div className='flex w-full items-center justify-between gap-2 mb-[10px] border-b-[1px] pb-3'>
                    <p className='text-[16px] font-semibold'>คูปอง</p>                                                                               
                    <div className='flex items-center gap-0.5'>
                      <p className='text-[14px] '>ใช้คูปอง</p>   
                      <img src='../../../asset/icon/chevron_right_black.svg'></img>                                                                         
                    </div>
                                                          
                  </div>
                  <div className='flex w-full items-center justify-between gap-2 mb-[10px] pb-3'>
                    <p className='text-[16px] font-semibold'>ชำระเงินโดย</p>                                                                               
                    
                    <div className='flex items-center gap-0.5'>
                      
                      <img src='../../../asset/icon/visa.svg' className='w-8 mr-2'></img>
                      <p className='text-[14px] '>8641</p>   
                      <img src='../../../asset/icon/chevron_right_black.svg'></img>                                                                         
                    </div>
                                                          
                  </div>        
                </div>

                <div className='h-2 bg-[#EEEEEE]'></div>
                
    
                    
          


              </div>
                         
                           
            </div>          
        </div>

        <Link href='/order/store1/shareorder/orderitem' className="flex flex-col justify-center bg-white border-t-[1px] border-neutral-300 h-[141px] ">
          <div className="flex justify-center items-center flex-cols-4 h-[45px] mx-4 bg-[#00AA47] rounded-lg my-4 px-[14px] hover:bg-[#00542D] focus:outline-none">
            <p className='text-[18px] font-bold text-white'>สั่งอาหารเพิ่ม</p>
          </div>
          <div className="h-[34px]">
            <img src="/asset/Home_Indicator.svg" className="h-full w-full"></img>                
          </div>
              
        </Link>

      
        
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
                        <img src='/../../../asset/icon/moon-error.png' className='w-1/4'></img>
                        
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

export default OrderItemNotCompletedPage