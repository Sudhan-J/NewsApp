import PublicIcon from "@mui/icons-material/Public";

export default function Header() {
  return (
    <>
      <div className="bg-white border border-b border-gray-100 h-[40px]">
        <div className="h-full flex items-center ml-2 text-3xl">
          <span>News</span>
          <PublicIcon />
        </div>
      </div>
    </>
  );
}