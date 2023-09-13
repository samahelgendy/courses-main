import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getFeatured } from "../app/features/feature";
import { Vortex } from 'react-loader-spinner'
import FeaturedCard from '../components/FeaturedCard'

const Featured_products_component =()=> {
const feature_Service = useSelector((state) => state.Featured.features);
 const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getFeatured());
   },[]);
  return (
    <div className="w-full h-auto overflow-hidden lg:px-12 xs:px-4 flex flex-col justify-start items-center flex-wrap ">
      <h4 className="w-full h-10 mb-8 flex justify-start items-start text-purple-950 font-main-font text-xl font-bold ">
        المنتجات المميزة
      </h4>
      <div className="w-full lg:h-auto h-auto flex lg:justify-start justify-center items-center flex-wrap  ">
        {feature_Service.loading && (
          <div className="w-full h-auto flex justify-center items-center py-24">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        )}
        {!feature_Service.loading && feature_Service.length > 0 ? (
          feature_Service.map((serves) => (
            <FeaturedCard serves={serves} key={serves.id} />
          ))
        ) : (
          <p>not found </p>
        )}
      </div>
    </div>
  );
}

export default Featured_products_component;