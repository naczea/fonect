import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import ModalPlans from "./ModalPlans";
import { Slide } from "react-reveal";
import Tada from "react-reveal/Tada";
import RubberBand from "react-reveal/RubberBand";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(3, 0, 5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  offer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "#FDBF14",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
  },
  percent: {
    marginLeft: theme.spacing(2),
  },
  olderPrice: {
    textDecoration: "line-through",
  },
  cardHover: {
    "&:hover": {
      border: "2px solid #325C8A",
    },
  },
}));

function Plans(props) {
  const { tiers } = props;
  const [plan, setPlan] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const togleModal = (hash, name) => {
    setOpenModal((prev) => !prev);
  };
  const onClickToggle = (hash, name) => {
    setPlan(`${hash} - Plan ${name}`);
    togleModal();
  };
  const promo = (price, percent) => {
    const aux = (1 - percent).toFixed(2);
    return (parseFloat(price) / parseFloat(aux)).toFixed(2);
  };
  const classes = useStyles();
  return (
    <div className="service">
      <CssBaseline />
      <Container maxWidth="md" component="main" className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
            className="titlePlans"
          >
            {`Planes ${props.name}`}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
            className="descriptionPlans"
          >
            {props.description}
          </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={4} alignItems="flex-start" justify="center">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Premium" ? 12 : 6}
              md={4}
            >
              <Card className={classes.cardHover}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{
                    align: "center",
                  }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Ideal" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Slide left>
                    <div className={classes.offer}>
                      <Typography className={classes.olderPrice}>
                        ${promo(tier.price, tier.percent)}
                      </Typography>
                      <Typography
                        component="h2"
                        variant="h6"
                        color="textPrimary"
                        className={classes.percent}
                      >
                        ahorra {tier.percent * 100}%
                      </Typography>
                    </div>
                  </Slide>
                  <div className={classes.cardPricing}>
                    <Tada>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${tier.price}
                        {tier.month ? (
                          <spam style={{ fontSize: 25 }}> {tier.month} </spam>
                        ) : null}
                      </Typography>
                    </Tada>
                  </div>
                  <ul>
                    {tier.description.map((line, i) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={i}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Grid
                    style={{ width: "100%" }}
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      onClick={() => onClickToggle(props.name, tier.title)}
                    >
                      {tier.buttonText}
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ModalPlans isOpen={openModal} togleModal={togleModal} plan={plan} />
    </div>
  );
}

export default Plans;
