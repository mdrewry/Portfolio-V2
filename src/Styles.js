import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  //main page
  main: {
    textAlign: "center",
  },
  WelcomeText: {
    fontSize: "25px",
    paddingTop: "38vh",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  //Icon Stuff
  IconBarMainWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "2vh",
    paddingBottom: "30vh",
  },
  IconBarMain: {
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignItems: "center",
  },

  //Projects Stuff
  ProjectsGridWrapper: { width: "75vw", marginTop: "50vh" },
  ProjectMain: {
    border: "solid",
    padding: "10px",
    hover: "",
  },
  CardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ProjectInformation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "28vh",
  },
  ProjectImage: { height: "80px" },
  ProjectTitle: {
    fontSize: 20,
    textAlign: "left",
  },
  ProjectText: {
    fontSize: 12,
    textAlign: "left",
  },
  TechStackTitle: {
    marginBottom: "10px",
    textAlign: "center",
  },
  TechStackMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  TechStackImage: {
    height: "40px",
    marginLeft: "10px",
  },
}));

export const theme = {
  light: {
    primary: "#81d4fa",
    secondary: "#b6ffff",
    highlight: "#ffee58",
    textColor: "#000000",
  },
  dark: {
    primary: "#222831",
    secondary: "#424277",
    highlight: "#D81159",
    textColor: "#FFFFFF",
  },
};
