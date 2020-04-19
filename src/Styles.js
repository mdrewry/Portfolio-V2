import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //main page
  main: {
    height: "200vh",
    textAlign: "center",
  },
  WelcomeText: {
    fontSize: "25px",
    paddingTop: "38vh",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "#FFFFFF",
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
  },
  IconImage: {
    color: "#D81159",
  },

  ProjectButton: {},

  //Projects Stuff
  ProjectsGridWrapper: { width: "75vw", marginTop: "50vh" },
  ProjectMain: {
    borderColor: "#D81159",
    border: "solid",
    padding: "10px",
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
    color: "#FFFFFF",
  },
  ProjectText: {
    fontSize: 12,
    textAlign: "left",
    color: "#FFFFFF",
  },
  TechStackTitle: {
    marginBottom: "10px",
    textAlign: "center",
    color: "#FFFFFF",
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

export default useStyles;
