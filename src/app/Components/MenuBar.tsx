"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const MenuBar = () => {

const [isOpen, setIsOpen] = useState(false)

function closeModal() {
setIsOpen(false)
}

function openModal() {
setIsOpen(true)
}
  return (
    
    <>
    <div className="flex flex-col justify-center bg-white border-t-[1px] border-neutral-300 h-[84px] ">
              <div className="flex justify-center flex-cols-4 h-[50px] mx-4 gap-12">
                <div className="flex flex-col items-center pt-2">              
                  <img src="/asset/icon/home.svg" className="h-6"></img>
                  <p className="mt-2 text-[12px] font-medium text-[#00AE35]">หน้าแรก</p>
                </div>
                <div className="flex flex-col items-center pt-2">
                  <img src="/asset/icon/order.svg" className="h-6"></img>
                  <p className="mt-2 text-[12px] font-medium">คำสั่งซื้อ</p>
                </div>
                <div className="flex flex-col items-center pt-2" onClick={openModal}>
                  <img src="/asset/icon/noti.svg" className="h-6"></img>
                  <p className="mt-2 text-[12px] font-medium">กล่องข้อความ</p>
                </div>
                <div className="flex flex-col items-center pt-2" onClick={openModal}>
                  <img src="/asset/icon/other.svg" className="h-6"></img>
                  <p className="mt-2 text-[12px] font-medium">อื่นๆ</p>
                </div>
                
              </div>
              <div className="h-[34px]">
                <img src="/asset/Home_Indicator.svg" className="h-full w-full"></img>
                
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
    </>
  )
}

export default MenuBar