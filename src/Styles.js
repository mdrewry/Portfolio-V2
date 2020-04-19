import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  //main page
  main: {
    height: "200vh",
    textAlign: "center",
  },
  WelcomeText: {
    fontSize: "25px",
    paddingTop: "38vh",
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
  ProjectMain: { borderColor: "#D81159", border: "solid" },
  ProjectImage: {
    width: "100px",
  },
  ProjectInformation: {
    position: "relative",
    height: "18vh",
  },
  ProjectVisuals: {
    height: "18vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProjectText: {
    fontSize: 13,
    textAlign: "left",
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
});

export default useStyles;
