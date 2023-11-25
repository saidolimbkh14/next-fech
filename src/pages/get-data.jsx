import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
    const malumot = await fetch("https://fakestoreapi.com/products")
     const data = await  malumot.json();


  return {
   props: {  api: data }
  }

}

const GetData = ({api}) => {
  return (
    <>
  <Head>
    <title>GetData Page</title>
    </Head>
    <div className="papa">
        {api?.map((el) =>  (
            <div className="card"  key={el.id}>
              <img src={el.image} alt="" />
              <h2>{el.title}</h2>
              <button>buy</button>
            </div>
        ))}
    </div>
  
    </>
  )
}

export default GetData