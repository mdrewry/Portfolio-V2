import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  //main page
  main: {
    width: "100hw",
    height: "100vh",
    backgroundColor: "#222831",
    textAlign: "center",
  },
  WelcomeText: {
    fontSize: "25px",
    paddingTop: "38vh",
  },

  //Icon Stuff
  IconBarMainWrapper: {
    width: "100hw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "2vh",
    paddingBottom: "20vh",
  },
  IconBarMain: {
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  IconImage: {
    height: "25px",
  },
});

export default useStyles;
