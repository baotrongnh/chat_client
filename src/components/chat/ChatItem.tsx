import { ChatItemProps } from '@/types/chat';
import clsx from 'clsx';
import Image from 'next/image';

export default function ChatItem({ name, imageUrl, lastMessage, timeLastMessage, isRead }: ChatItemProps) {
     return (
          <div
               className={
                    clsx(
                         'border p-3 flex items-center hover:opacity-80 cursor-pointer ease-in duration-200',
                         isRead && 'bg-gray-100'
                    )}>
               <Image
                    src={imageUrl}
                    alt='avatar'
                    width={60}
                    height={60}
                    className='rounded-full'
               />
               <div className='pl-2.5 flex-1'>
                    <h1 className='font-medium text-[20px]'>{name}</h1>
                    <span className='text-gray-600'>{lastMessage}</span>
               </div>

               <div className=''>
                    <span className='text-gray-600'>{timeLastMessage}</span>
               </div>
          </div>
     )
}
