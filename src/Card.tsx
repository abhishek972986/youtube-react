interface CardProps {
    title: string;
    image: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, image, description }) => {

  return (
    <div className="bg-white flex flex-col items-center- w-70 gap-2.5 rounded-2xl shadow-2xl p-5 ">
        <img src={image} alt="" className="w-50 h-50 mt-1.5"/>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{title}</h2>
        <h2>{description}</h2>

     
    </div>
  )
}

export default Card
