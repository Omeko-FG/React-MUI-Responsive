import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"
import { Box} from '@mui/material'


const images = [
 "https://magaza.kantakademi.com/wp-content/uploads/2023/03/Sedef-Caglar.mov",
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
