import {Container} from "@mui/material";
import Page from '../components/Page';
import {styled} from '@mui/material/styles';

const RootStyle = styled('div')(({theme}) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function HomePage() {
  return (
    <Page title="Home Page">
      <RootStyle>
        <Container >
        </Container>
      </RootStyle>
    </Page>
  )
}