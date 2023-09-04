import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useRecipeDetails from '../hooks/useRecipeDetails';
import ReactMarkdown from 'react-markdown';


export default function RecipeReviewCard() {

  const {clickedRecipeData} = useRecipeDetails();

  return (
    <Card sx={{ maxWidth: "90vw", maxHeight: "100vh", marginTop: "4rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {clickedRecipeData?.title?.charAt(0).toUpperCase() ?? "?"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={clickedRecipeData?.title}
        subheader={clickedRecipeData?.chefName ? clickedRecipeData?.chefName : "Mystery Chef" }
      />
      <CardMedia
        component="img"
        height="194"
        image={`https:${clickedRecipeData?.imageUrl}`}
        alt={clickedRecipeData?.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <ReactMarkdown>
          {clickedRecipeData?.description}
          </ReactMarkdown>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}