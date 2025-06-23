const Header = ({
  profileImage,
  toggleSidebar,
  handleImageClick,
  fileInputRef,
  handleImageChange,
}: any) => {
  const primaryColor = "#6D3871";

  return (
    <header className="sticky bg-gradient-to-r from-purple-400 to-purple-800 border-b border-gray-200 shadow-sm w-full m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-1 sm:gap-5">
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a
            href="/"
            className="text-lg text-white sm:text-3xl font-extrabold whitespace-nowrap"
          >
            B2B Dashboard
          </a>
        </div>

        {/* Right: Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-sm font-semibold text-white">Lora Piterson</span>
            <span className="text-xs text-white">UX/UI Designer</span>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 object-cover cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
