import { TbSparkle } from "react-icons/tb";

const Stars = () => {
    return (
        <div className="flex items-center gap-15 2xl:-top-30 -top-20  2xl:-left-20 xl:-left-10 -left-8 absolute ">
            <TbSparkle className="animate-spin text-transparent scale-[250%] fill-purple-60 " style={{ animationDuration: '4s' }} />
            <TbSparkle className=" animate-bounce text-transparent scale-[200%] fill-purple-60 " />
            <TbSparkle className="animate-pulse text-transparent scale-[120%] fill-purple-60 " />
        </div>
    )
}

export default Stars