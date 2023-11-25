import Head from 'next/head';
import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch("https://api.x-net.uz/products/") 
    const data = await res.json();
``

  return {
    props: { xnet: data}
  }

}

const Xnet = ({xnet}) => {
  return (
    <> 
      <Head>
        <title>GetData Page</title>
      </Head>
   
      <div className="papa">
        {xnet?.map((el) =>  (
            <div className="card"  key={el.id}>
              <img src={el.image} alt="" />
              <h2>{el.name}</h2>
              <h4>{el.desc}</h4>
              <p>{el.price}s'om</p>

              <button>buy</button>
            </div>
        ))}
    </div>

    </>
  )
}

export default Xnet