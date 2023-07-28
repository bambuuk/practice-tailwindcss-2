import boraBora from '../asserts/borabora.jpg';
import boraBora2 from '../asserts/borabora2.jpg';
import maldives from '../asserts/maldives.jpg';
import maldives2 from '../asserts/maldives2.jpg';
import maldives3 from '../asserts/maldives3.jpg';
import keyWest from '../asserts/keywest.jpg';
import SelectCard from './SelectCard';

function Selects() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

      <SelectCard img={boraBora} text={'Antiqua'} />
      <SelectCard img={boraBora2} text={'Bora Bora'} />
      <SelectCard img={maldives} text={'Cozumel'} />
      <SelectCard img={maldives2} text={'Krit'} />
      <SelectCard img={maldives3} text={'Maldives'} />
      <SelectCard img={keyWest} text={'Key West'} />

    </div>
  )
}

export default Selects;