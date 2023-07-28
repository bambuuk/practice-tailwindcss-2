import boraBora from '../asserts/borabora.jpg';
import boraBora2 from '../asserts/borabora2.jpg';
import maldives from '../asserts/maldives.jpg';
import maldives2 from '../asserts/maldives2.jpg';
import keyWest from '../asserts/keywest.jpg';

function Destinations() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>On the caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={boraBora} alt="" />
        <img className='w-full h-full object-cover' src={boraBora2} alt="" />
        <img className='w-full h-full object-cover' src={maldives} alt="" />
        <img className='w-full h-full object-cover' src={maldives2} alt="" />
        <img className='w-full h-full object-cover' src={keyWest} alt="" />
      </div>
    </div>
  )
}

export default Destinations;