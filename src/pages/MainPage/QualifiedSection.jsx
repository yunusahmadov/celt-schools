import React from 'react'
import QualifyCard from './QualifyCard'
import img1 from '../../images/KC_Icon_Teachers.svg'
import img2 from '../../images/KC_Icon_Support.svg'
import img3 from '../../images/KC_Icon_ClassSize.svg'

function QualifiedSection() {
  return (
<>
<div className="sec-title mb-50 text-center">
                <h2>Niyə CELT High School?</h2>     
            </div>
<div className='qualified'>
      
      <div className="container">
   
          <div className="qual-container">
          <QualifyCard
              qualImg={img1}
              qualTitle={'Beynəlxalq dərəcəli müəllimlər'}
              qual1={'Müəllimlərimizin ixtisas üzrə dərəcələri var.'}
              qual2={'Müəllimlərin hədəfi tələbəni məqsədinə çatdırmaqdır.'}
              qual3={'Müəllim hamısı yalnız ingilis dilində tədris edir.'}

          />
             <QualifyCard
              qualImg={img2}
              qualTitle={'İndividual yanaşma'}
              qual1={'Hər bir tələbəmizin hər dərsi raporlarnır və baş müəllimlər tərəfindən təhlil edilir.'}
              qual2={'Rəhbərlərimiz hər zaman tələbələrimizə xüsusi diqqət ayıraraq onların davamlı və disiplinli oxumasına kömək edir.'}
              qual3={'Tələbələrimiz hər mövzunu öyrəndikcə həm praktiki imtahanlar verirlər həm də hər mövzunun sonunda ona aid tam imtahan verirlər. Bu da bizə uğurla nəticəyə doğru etibarlı şəkildə addımlamağa icazə verir.'}
              // qualButton={'MORE ON THE CAT 4 TEST'}
          />
             <QualifyCard
              qualImg={img3}
              qualTitle={'VIP siniflər'}
              qual1={'Siniflərimiz VIP formatındadır. Hər sinifdə 2-3 tələbə olur. Müəllim bütün diqqətini tələbələrinin problemlərinin həll olunmasına ayrırı. Bu da daha yaxşı nəticələrə gətirirb çıxarır.'}
            />
          </div>
      </div>
  </div>
</>
  )
}

export default QualifiedSection