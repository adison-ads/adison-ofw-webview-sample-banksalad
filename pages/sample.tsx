import { Ofw } from 'adison-offerwall-webview-sdk';
import { useEffect, useState } from "react";

export default function Sample() {

  const [nativeAds, setNativeAds] = useState<NativeAd[]>([])

  useEffect(() => {
    Ofw.init({
      mode: 'development',
      android: 'ce8046d95280c9838832a6ac',
      ios: 'efe0a9981549cccbdcaf0f74',
    });

    Ofw.loadAds({
      tags: ['participate', 'join', 'install'],
      autofill: false,
      pagination: true,
    }, 10, 1)
      .then(ads => setNativeAds(ads))
      .catch(e => {
        console.error('failed to load ads: ' + e.message);
      });
  }, []);

  return (
   <main>
     <h1>
       샘플 페이지
     </h1>
     <div>
       <>
         {
           nativeAds.map(ad => {
             return (
               <div key={ad.id}>
                 <div>{ad.title} / {ad.subtitle} / {ad.reward}</div>
               </div>
             )
           })
         }
       </>
     </div>
    </main>
  );
}
