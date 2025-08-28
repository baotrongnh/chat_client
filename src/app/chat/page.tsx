import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Chat() {
     return (
          <div className='container mx-auto px-4'>
               <div className='max-w-[500px] mx-auto'>
                    <Input type='text' placeholder='Search' />
               </div>
          </div>
     )
}
