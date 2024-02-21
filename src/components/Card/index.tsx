
interface CardProps {
    img: string 
    title: string
    text: string
}

export function Card({img,title,text}: CardProps){
    return(

        <div className='w-[366px] bg-BgCard rounded-xl lg:w-auto' >

        <img src={img} alt="Image" className="w-[366px] h-[177px] object-cover"/>

        <div className='flex flex-col gap-6 p-6'>
          <span className='text-4xl font-bold'>{title}</span>
          <p>{text}</p>
        </div>

      </div>        
    )
}