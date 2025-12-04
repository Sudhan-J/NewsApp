import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export default function NewsCard() {
  return (
    <div>
      <Card sx={{ maxHeight: 250, maxWidth: 250}}>
        <CardActionArea>
          <CardMedia className="p-2 rounded-3xl"
            component={"img"}
            height={"10"}
            width={"100"}
            image="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
            alt="cars"
          />
          <div className="w-[200px]">
            <div className="p-2 text-xl font-bold line-clamp-3">
                News head line here sgsgsg gksyhsgs hjfsjfhgsdjh hjfsjfhgsdjhhjfsjfhgsdjhhjfsjfhgsdjhhjfsjfhgsdjhhjfsjfhgsdjhhjfsjfhgsdjhhjfsjfhgsdjh asdhgajhad asjdghas ajdsghajd 
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
