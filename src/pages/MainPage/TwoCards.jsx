import React from 'react'
import TwoCardsElem from './TwoCardsElem'

function TwoCards() {
  return (
   <div className="container">
        <div className="sec-title mb-50 text-center">
                <h2>Beyəlxalq Məktəb Diplomları</h2>     
            </div>
        <div className="whole-container">
            <TwoCardsElem 
            cardBgImg={'cardBg1'}
            topText={'A level Diplomu'}
            firstText={'Oxford və ya Cambridge kimi universitetlər üçün A Level diplomu mütləqdir. '}
            secondText={'Ama bundan əlavə sizə Oxford imtahanı lazımdır. Biz Oxford Universitetinin rəsmi qəbul imtahanı mərkəziyik. '}
            thirdText={'Bizim özəl top universitetlərə qəbul hazırlığımız sizin uğurlu olmanızda önəmli rol oynayır.'}
            btnText={'CELT Kampusunu seç'}
            />
            <TwoCardsElem
            cardBgImg={'cardBg2'}
            topText={'HS Diplomu'}
            firstText={'HS diplomu sizə dünyanın bir çox universitetinə rahat qəbul olmanıza kömək edir.'}
            secondText={'HS diplomu alanlar çox zaman SAT və ya IELTS imtahanı almasına ehtiyac olmur və ya nəticə almaq çətin də olmur. Biz HS diplomu ilə bir başa qəbul olmağa hazırlayırıq.'}
            thirdText={'HS diplomunu 1 və ya 2 ilə bitirə bilərsiniz. Sizin ayırdığınız zamandan asılıdır.'}
            btnText={'CELT Kampusunu seç'}
            titleBg={'medical'}
            
            />
        </div>
   </div>
  )
}

export default TwoCards