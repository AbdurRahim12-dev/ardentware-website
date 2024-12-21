const Navbar = () => {
  return (
    <section className="container">
      <nav className="flex items-center justify-between pb-1">
        <div className="flex items-center">
          {/* <img src="https://via.placeholder.com/150" alt="logo" /> */}
          <h2 className="text-2xl">ARDENTWARE</h2>
          <ul className="flex items-center ml-8">
            {["Industries", "Services", "Products", "Resources"].map((item, index) => {
              return (
                <li key={index + 1} className="">
                  <a
                    href="#"
                    className="text-primary text-lg py-5 px-3 hover:bg-primary hover:text-white duration-500 font-semibold"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="relative">
            {/* <label htmlFor="Search" className="sr-only">
              Search
            </label> */}

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border border-primary/40 py-2.5 px-3 sm:text-lg focus:outline-primary"
            />

            <span className="absolute inset-y-0 end-0 grid w-12 place-content-center">
              <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
