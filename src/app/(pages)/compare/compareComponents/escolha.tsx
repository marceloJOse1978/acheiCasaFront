"use client"

import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "@/app/(components)/UI/button";
import { ChevronRight, ChevronLeft } from "lucide-react"
import classNames from "classnames"
interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={classNames("bg-white shadow-md rounded-lg", className)}>{children}</div>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={classNames("p-4", className)}>{children}</div>
}

export default function EscolhaImovel() {
  const [isOpen, setIsOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + 8 < properties.length) setStartIndex(startIndex + 8)
  }

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 8)
  }

  const properties = [
    "/img1.png", "/img2.jpg", "/img3.jpg", "/img4.jpg",
    "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"
  ]

  const PropertyCard = ({ image }: { image: string }) => (
    <Card className="rounded-2xl border-2 border-red-500 overflow-hidden hover:shadow-xl transition-all">
      <img src={image} alt="property" className="w-full h-40 object-cover" />
      <CardContent className="p-3">
        <p className="text-sm font-semibold text-gray-800">Sequele, Cacuaco</p>
        <p className="text-xs text-gray-500">15x20m</p>
        <p className="text-xs text-gray-500 mb-1">10-15 Dez</p>
        <div className="flex items-center justify-between">
          <span className="text-xs">★5,0</span>
          <span className="font-bold">1.500.000,00</span>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Button + */}
      <div className='min-w-[200px]'>
        <div
          onClick={() => setIsOpen(true)}
          className='w-[58px] h-[58px] bg-[#FF453A] flex items-center justify-center cursor-pointer rounded-lg mt-[130px] m-[37%]'
        >
          <span className='text-white text-[50px]'>+</span>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Escolha o Imóvel</h2>
                    <Button className="bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-full">Salvar</Button>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {properties.slice(startIndex, startIndex + 8).map((image, index) => (
                      <PropertyCard key={index} image={image} />
                    ))}
                  </div>

                  <div className="flex justify-end mt-6 gap-2">
                    <button onClick={handlePrev} className="p-2 rounded-full border">
                      <ChevronLeft size={15} />
                    </button>
                    <button onClick={handleNext} className="p-2 rounded-full border">
                      <ChevronRight size={15} />
                    </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
