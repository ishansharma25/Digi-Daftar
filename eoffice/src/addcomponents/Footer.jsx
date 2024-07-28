import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer
      className={`flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ${
        theme === 'light' ? 'bg-[#f5f5f5] text-[#060606]' : 'bg-[#060606] text-[#f5f5f5]'
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-lg">
        <p className="text-md text-left">
          Address: Narayan Singh Saput Marg, Shivaji Market, Nagar Nigan Square, Indore, Madhya Pradesh 452007
        </p>
        <p className="text-md text-left flex-col gap-2">Contact: 0755-2704201, 2441419, 4926892</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <p className="text-xs">Copyright &copy; Indore 2024</p>
        {/* Uncomment if using navigation links
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
        */}
      </div>
    </footer>
  );
};

export default Footer;
