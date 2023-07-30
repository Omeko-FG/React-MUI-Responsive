import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"
import { Box} from '@mui/material'


const images = [
  <iframe width="616" height="347" src="https://www.youtube.com/embed/Q8zw2Qt9u6c?list=PLf3cxVeAm439RsaHrGACExl3o060pM7W2" title="#5 - Routing: Dynamic Routes - Sıfırdan İleri Seviye Next.js v13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySjUEmBs9JfQpeUUpOjHQ667n62TGqSDfjw&usqp=CAU",
  "https://ronaffpirlanta.com/cdn/shop/products/4mm-14Ayar-Seftali-Rengi-Bombeli-Altin-Alyans_2_900x.jpg?v=1675366034",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySjUEmBs9JfQpeUUpOjHQ667n62TGqSDfjw&usqp=CAU",
 
];
function SliderbarS() {
  return (
    <Box marginLeft={{lg:9}}>
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <Box className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
export default SliderbarS;
