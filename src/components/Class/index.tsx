type Props = {
  name: string;
  description?: string;
  image: string;
}

const Class = ({name, description, image}: Props) => {
  const overlayStyles = `p-5 absolute z-30 hidden md:flex h-[380px] xs:max-w-[450px] sm:w-[480px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <div className='relative mx-5 inline-block h-[100%] xs:max-w-[450px] sm:w-[480px]  overflow-y-hidden'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img src={image} alt="class-image"  className='overflow-y-hidden'/>
    </div>
  )
}

export default Class