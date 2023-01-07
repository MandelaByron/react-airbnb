import "./styles.css";
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

export default function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Card 
      img="https://images.unsplash.com/photo-1598623335306-5d0040e41f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXRobGV0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60agesc/"
      ratings="5"
      reviewCount={6}
      country="USA"
      title="No pain No gain. Zara's everyday workout routine."
      price={138}
      />
      
    </div>
  )
}
