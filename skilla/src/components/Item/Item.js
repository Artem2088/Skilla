import './Item.scss'
import type from '../../utils/icons/call-in.svg'
import avatarMember from '../../utils/icons/avatar-member.svg'

const Item = () => {
    return (
        <section className='item'>
            <div className='item__container'>
                <img src={type} alt='тип' className='item__type'/>
                <span className='item__span-time'>19:00</span>
                <img src={avatarMember} alt='сщтрудник' className='item__member'/>
                <span className='item__call'>+7 (987) 567-17-12</span>
                <span className='item__source'>Rabota.ru</span>
                <span className='item__eval'>Скрипт не использован</span>
                <span className='item__duration'>12:06</span>
            </div>
        </section> 
    )
}

export default Item;