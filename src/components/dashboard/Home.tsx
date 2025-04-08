import HomeNav from "../homenav";
import Footer from "../../footer";
import aboutbg from "../images/about.jpg";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <div>
        <div className="flex bg-[#D9D9D9] px-[90px] gap-[30px] w-full h-[500px]">
          <div className="py-[5%] px-[13px] w-[50%]">
            <p className=" text-[52px] text-[#8E6969] font-bold">
              Find Your Next Favorite For Less !
            </p>
          </div>
          <div className="mt-[10%] rounded-[10px] h-[200px] w-[700px] p-[70px] bg-[#fff]">
            {/* Search Bar */}
            <div className="flex flex-wrap gap-[10px]">
              <input
                type="text"
                placeholder="Search here..."
                className="border-2 w-[280px] border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
              />
              <button className="bg-[#8E6969] hover:bg-[#000000] hover:text-[#fff] text-center w-[140px] rounded-[5px] border-gray-400">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-[20px] justify-center items-center h-[400px] bg-[#737373]">
            <div className="flex flex-col ">
              <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]"></div>
              <p className="w-[200px] h-[30px] bg-[#]">Name</p>
            </div>
            <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]"></div>
            <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]"></div>
            <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]"></div>
            <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]"></div>
          </div>
        </div>
        <div className="h-[400px] flex flex-col md:flex-row">
          <div className="text-[18px] pt-[100px] text-[#282727] p-[20px] text-center font-bold">
            <p>
              Thrift-Store is a Nepal-based platform designed by a BCA student,
              offering users the ability to purchase second-hand clothes. This
              project reflects a sustainable fashion approach, promoting the
              reuse and recycling of garments. It caters to budget-conscious
              consumers or those interested in reducing their environmental
              impact by purchasing preloved clothing.
            </p>
          </div>
          <img
            src={aboutbg}
            className="h-[400px] object-cover"
            alt="About Background"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
