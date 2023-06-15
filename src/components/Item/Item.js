import { useEffect, useState } from 'react';
import './Item.scss';
import callIn from '../../utils/icons/call-in.svg';
import callOut from '../../utils/icons/call-out.svg';
import callSkip from '../../utils/icons/call-skip.svg'
import avatarMember from '../../utils/icons/avatar-member.svg'



const Item = ({ each }) => {
    const [calltype, setCallType] = useState(1);

    useEffect(() => {
        if (each.status == 'Дозвонился') {
            if (each.in_out == 0) {
                setCallType(callIn)
            }
            else if (each.in_out == 1) {
                setCallType(callOut)
            }
        } else {
            setCallType(callSkip)
        }
    }, [])


    return (
        <section className='item'>
            <div className='item__container'>
                <img src={calltype} alt='тип' className='item__type' />
                <span className='item__span-time'>{each.date.slice(11, 16)}</span>
                <img src={each.person_avatar || avatarMember} alt='сотрудник' className='item__member' />
                <span className='item__call'>{each.from_number}</span>
                <span className='item__source'>{each.source ? each.source : 'Нет даных'}</span>
                <span className='item__eval'>{each.errors}</span>
                <span className='item__duration'>{each.time}</span>
            </div>
        </section>
    )
}

export default Item;