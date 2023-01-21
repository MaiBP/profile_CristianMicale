import styles from "styled-components"

export const Container = styles.div`
        width: 100vw;
        height: 100vh;
         overflow: hidden;
        // margin: 0px 50px;
        // margin-top: 90px;
   
    align-items: center;
    align-content: center;
    text-align: center; 
    

    .swiper {
    margin: auto;
    /* border-radius: 20px; */
    width: 70%;
    height: 60%;

}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
        
}
 .swiper-slide img {
 display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
 }


`;
    
  



