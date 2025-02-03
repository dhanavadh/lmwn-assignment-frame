"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

const FoodPage = () => {

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
              
              <div className='w-full h-screen top-0 bg-gradient-to-b from-[#3BD28F] via-[#00BF62] to-[#00BC55]'>
                <div className="sticky top-0 flex justify-center h-[62px] z-30 bg-white">
                  <img src="asset/Status_Bar_trans.svg" className="absolute"></img>
                  <img src="asset/Dynamic_Island.svg" className="absolute my-[11px]"></img>
                </div> 
                {/* Header */}
                <div className="sticky top-[62px] bg-white w-full ">
                    <div className='px-4 flex justify-between items-center z-30'>
                        <div className='flex'>
                            <img src="asset/icon/chevron_left.svg" className="w-8 h-8 mr-3" onClick={() => window.location.href = '/'}></img>
                            <div className='flex items-center justify-center w-8 h-8 bg-[#C2F9DC] rounded-full p-1.5 flex-shrink-0'>
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
                <div className='flex px-4 bg-white'>
                    <div className="flex items-center justify-between my-[16px] bg-white w-full h-[40px] rounded-full shadow-all-lg">
                        <div className="flex items-center ">
                        <img src="asset/icon/search_green.svg" className="mx-[14px] my-[15px] w-[24px]"></img>
                        <p className="text-[13px] text-[#404040] max-w-[280px] truncate leading-3">🧧 Chester's แจกอั่งเปา รับฟรี! ถุงเชสตี้เรียกทรัพย์ 💰</p>
                        </div>
                    </div>
                </div>
                    

                <div className="mx-4 z-10">
                  <div className="flex flex-col items-start">                  
                    {/* Item Group */}
                    <div className="flex flex-col w-full gap-2 my-4">
                        <div className='flex items-center justify-between py-2 rounded-xl gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center justify-center'>
                                    <img src='asset/icon/Hungry_Moon_Sticker_by_LMWN.gif' className='w-36'></img>
                                </div>
                                <div className=''>                                    
                                    <p className='text-[18px] font-bold text-white tracking-tight leading-6'>กำลังหาคนสั่งข้าวด้วยกันอยู่ไหม?</p>
                                    <p className='text-[14px] text-white'>เลือกร้านที่สนใจแล้วแชร์ตะกร้ากับเหล่านักกินเพื่อสั่งแบบ<a>ไม่มีขั้นต่ำ!</a></p>
                                </div>
                                
                            </div>                            
                            <Link href='/order' className='text-[16px] text-center font-semibold px-1.5 py-1.5 bg-white rounded-lg text-[#00ae35] flex-shrink-0'>สั่งเลย</Link>
                        </div>
                        {/* <div className='grid grid-cols-2 gap-2'>
                            <div className='flex items-center gap-2 bg-white px-2 py-2 rounded-xl'>
                                <div className='flex items-center justify-center w-[60px] rounded-[100%]'>
                                    <img src='asset/icon/coupon.png' className='w-[60px]'></img>
                                </div>
                                <div>                                
                                    <p className='text-[14px] font-semibold'>เราคิดถึงคุณนะ!</p>
                                    <p className='text-[12px]'>ใส่โค้ด “LMMSSU” ลด 20%</p>
                                    <button className='flex mt-[5px] w-full bg-[#00AE35] justify-center text-white text-[14px] font-bold rounded-md py-1'>เก็บ</button>
                                </div>
                                
                            </div>    
                            <div className='flex items-center gap-2 bg-white px-2 py-2 rounded-xl'>
                                <div className='flex items-center justify-center w-[60px] rounded-[100%]'>
                                    <img src='asset/icon/coupon.png' className='w-[60px]'></img>
                                </div>
                                <div>                                
                                    <p className='text-[14px] font-semibold'>เราคิดถึงคุณนะ!</p>
                                    <p className='text-[12px]'>ใส่โค้ด “LMMSSU” ลด 20%</p>
                                    <button className='flex mt-[5px] w-full bg-[#00AE35] justify-center text-white text-[14px] font-bold rounded-md py-1'>เก็บ</button>
                                </div>
                                
                            </div>      
                                
                        </div>   */}
                    </div>                    
                  </div>
                </div> 

                <div className='flex bg-white rounded-t-lg px-4'>
                    <div className='flex w-full flex-row gap-2 mt-[34px] mb-4 border-b-[1px] border-neutral-300 pb-4'onClick={openModal}>
                        <div className='flex flex-col h-[80px] w-full bg-[#fef6d2] rounded-[16px] p-3'>
                            <p className='text-[14px] font-bold'>คูปองของฉัน</p>
                            <p className='text-[12px] mt-0.5'>พร้อมใช้ตอนนี้</p>
                        </div>
                        <div className='flex flex-col h-[80px] w-full bg-[#D4FFEB] rounded-[16px] p-3'onClick={openModal}>
                            <p className='text-[14px] font-bold'>เก็บโค้ดลดเพิ่ม</p>
                            <p className='text-[12px] mt-0.5 leading-4'>ลดสูงสุด ฿100* <br></br>ส่งฟรี* ร้านคุ้ม</p>
                            <p className='text-[12px]'></p>
                        </div>                    
                    </div>

                </div>
                
                <div className='grid w-full items-center'>
                    <div className='flex max-w-screen bg-white pl-4 overflow-x-auto scrollbar-hide gap-2 pb-4'>
                        <div className='whitespace-nowrap flex gap-[14px]'>
                            <div className='flex flex-col items-center'>
                                <div className='flex h-12 w-12 bg-zinc-300 rounded-xl' onClick={() => window.location.href = '/order'}>
                                  <img src='/asset/icon/nearme.png'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>ร้านใกล้บ้าน<br></br>ค่าส่งเริ่ม &0</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center justify-center h-12 w-12 bg-green-300 rounded-xl overflow-hidden' onClick={() => window.location.href = '/order'}>
                                  <img src='/asset/menu/mart.png' alt='Mart' className='w-10 h-10 object-fill'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>แชร์ตะกร้า<br></br>กับนักกิน</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center justify-center h-12 w-12 bg-green-300 rounded-xl overflow-hidden' onClick={openModal}>
                                  <img src='/asset/icon/discount_100.png' className='object-fill'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>ลด ฿100*<br></br>ไม่มีขั้นต่ำ</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center justify-center h-12 w-12 bg-green-300 rounded-xl overflow-hidden'onClick={openModal}>
                                  <img src='/asset/icon/cola.png' alt='Mart' className='object-fill'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>Coca-Cola<br></br>Discount</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center justify-center h-12 w-12 bg-green-300 rounded-xl overflow-hidden'onClick={openModal}>
                                  <img src='/asset/icon/foodie.png' alt='Mart' className='object-fill'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>ใส่ "FOODIE"<br></br>ลด ฿100*</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center justify-center h-12 w-12 bg-green-300 rounded-xl overflow-hidden'onClick={openModal}>
                                  <img src='/asset/icon/super_brand.png' alt='Mart' className='object-fill'></img>
                                </div>
                                <p className='flex mt-1 text-center text-[12px] leading-4'>แบรนด์ดัง ลด<br></br>แรง 7 วัน!</p>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className='flex items-center w-full justify-center bg-white pb-[30px]'>
                    <a className='w-4 h-[6px] bg-neutral-700 rounded-full'></a>
                    <a className='w-4 h-[6px] bg-neutral-300 rounded-full'></a>
                </div>
                <div className='flex items-center justify-center h-[112px] w-full px-4 overflow-hidden bg-white'>
                  <img src='/asset/banner/banner_3.png' alt='Mart' layout='fill' objectfit='contain' className='rounded-lg'></img>
                </div>
                <div className="flex items-start justify-start w-full h-[203px] rounded-[5px] py-6 overflow-hidden px-2 bg-white ">
                    <img src="/asset/ads/image.png" className="w-full rounded-[5px]"></img>
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

export default FoodPage