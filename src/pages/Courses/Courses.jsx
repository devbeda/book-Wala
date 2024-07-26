import React from 'react'
import list from '../../../public/list.json'
import Cards from '../../components/Cards';

function Courses() {
  console.log(list);
  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you 
            <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-9'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam nulla fugit voluptatem quae repellendus libero optio sapiente totam atque nam aliquid, adipisci ullam. Illum, nam praesentium. Odio aspernatur nemo ducimus.
          Maiores consequatur ipsa cupiditate inventore libero aperiam soluta rem, quod velit, neque eveniet illum porro consectetur quisquam voluptate explicabo eos nemo. Distinctio beatae dignissimos obcaecati ut deserunt nisi, numquam unde!
          Distinctio minus modi maiores quo aliquid, provident eos nemo odit minima neque, quidem unde, quia ullam animi debitis quos? Modi eaque dolore natus architecto corporis. Veniam voluptatibus beatae in consequuntur!</p>
        </div>
        <div className='mt-9 grid grid-cols-1 md:grid-cols-3'>
          {
             list.map((item)=> (
              <Cards  key={item.id} item={item} />
             ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courses