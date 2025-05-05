import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  // Load images from localStorage on initial render
  useEffect(() => {
    const storedBanner = localStorage.getItem("bannerImage");
    const storedProfile = localStorage.getItem("profileImage");

    setBannerUrl(
      storedBanner ||
        "https://uwm.edu/engineering/wp-content/uploads/sites/537/2021/02/banner-1500-400.jpg"
    );
    setProfileUrl(
      storedProfile ||
        "https://propose-sprl.be/img/placeholder/blogpost-placeholder-100x100.png"
    );
  }, []);

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setBannerUrl(base64);
        localStorage.setItem("bannerImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProfileUrl(base64);
        localStorage.setItem("profileImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img src={bannerUrl} alt="bg-Image" className="w-full h-60 object-cover" />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Channel logo"
          className="w-40 h-40 object-cover rounded-full border-4 border-white relative mt-2"
        />
        <button className="absolute ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Syed Farhan</h1>
          <p className="ml-[4rem]">1M views</p>
          <p className="mt-2 ml-[4rem]">
            This is a short Description of the YouTube Channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
