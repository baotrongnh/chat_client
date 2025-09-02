import ChatItem from '@/components/chat/ChatItem';
import { Input } from '@/components/ui/input';

export default function Chat() {
     return (
          <div className='container mx-auto px-4'>
               <div className='max-w-[500px] mx-auto pt-10'>
                    <div>
                         <Input type='text' placeholder='Search' />
                    </div>

                    <ChatItem
                         name='Nguyễn Huỳnh Bảo Trọng'
                         imageUrl='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/501125688_2148865672280301_3914720627613230405_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExvjDcv-3F2F4Y5_CJjHlo25r_BbfT7J_bmv8Ft9Psn8lxbOY7RO-qP09LTTejQeNTu3h3Al5au-SMzhlfHSJR&_nc_ohc=QsvxdeNlgkEQ7kNvwHS2Rul&_nc_oc=AdkiLioIlObe8In4vSmlIpkp9y7dejzMhI6m9uK1eojOEJSaOA8Ky85HF7__4600jFQ&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=zEK8jc-pjE7ooLs0A6Woag&oh=00_AfXgxNdKNjNShtpQPz5aslc_HccWlm-CoQDeyWr0HqgdMg&oe=68BCC7B5'
                         lastMessage='Xin chào....'
                         timeLastMessage='09:30 AM'
                         isRead={false}
                    />

                    <ChatItem
                         name='Nguyễn Huỳnh Bảo Trọng'
                         imageUrl='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/501125688_2148865672280301_3914720627613230405_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExvjDcv-3F2F4Y5_CJjHlo25r_BbfT7J_bmv8Ft9Psn8lxbOY7RO-qP09LTTejQeNTu3h3Al5au-SMzhlfHSJR&_nc_ohc=QsvxdeNlgkEQ7kNvwHS2Rul&_nc_oc=AdkiLioIlObe8In4vSmlIpkp9y7dejzMhI6m9uK1eojOEJSaOA8Ky85HF7__4600jFQ&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=zEK8jc-pjE7ooLs0A6Woag&oh=00_AfXgxNdKNjNShtpQPz5aslc_HccWlm-CoQDeyWr0HqgdMg&oe=68BCC7B5'
                         lastMessage='Xin chào....'
                         timeLastMessage='09:30 AM'
                         isRead={true}
                    />
               </div>
          </div>
     )
}
