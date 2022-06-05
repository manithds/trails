
function HeaderOption({ Icon, title, selected }) {
  return <div className={`flex items-center 
  space-x-1 border-b-4 border-transparent 
  hover:text-[#564ED1] 
  hover:border-[#564ED1] pb-3 cursor-pointer ${
      selected && "text-[#00593F] border-[#00593F]"}`}>

      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
  </div>;
}

export default HeaderOption;