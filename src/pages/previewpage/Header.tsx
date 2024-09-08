import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="h-[145px] w-[1000px] bg-white shadow-md">
    <header className="flex justify-between">
      <div>      
        <h1 className="text-2xl font-bold ml-1">Detail Task</h1>
       <div className="relative mt-[25px]">
      <input type="text" placeholder="search task" className="px-4 py-2 h-[32px] w-[300px] border border-gray-300 rounded-md focus:outline-none ml-1"
 />
      <span> <CiSearch  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" /> </span>
      </div>
      </div>
    <div>
    <div className="flex justify-end items-center ml-auto space-x-4">
  <button className="relative">
    <CiBellOn className="text-2xl" />
    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
      1
    </span>
  </button>

  <img
    src="https://images.unsplash.com/photo-1725663656850-7bc515816fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
    alt="Profile"
    className="w-10 h-10 rounded-full object-cover"
  />
</div>

    <div className="flex flex-row gap-2 mt-[15px]" >
      <button className="flex items-center justify-center w-[190px] h-[52px] gap-2 border border-gray-300 rounded-md px-4 py-2"><span><BiCategory /></span>Category</button>
      <button className="flex items-center justify-center w-[190px] h-[52px] gap-2 border border-gray-300 rounded-md px-4 py-2 mr-2"><span><RxHamburgerMenu /></span>Sort by deadline</button>
    </div>
    </div>
    </header>
    </div>
  )
}

export default Header