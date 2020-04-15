import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  //main page
  main: {
    width: "100hw",
    height: "180vh",
    backgroundColor: "#222831",
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
    height: "25px",
  },

  //Projects Stuff
  ProjectsWrapper: {
    marginTop: "30vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  Projects: {
    width: "120vh",
    padding: "20px",
    borderColor: "#D81159",
    border: "double",
  },
  ProjectsGrid: {},
  IndividualProject: {},
  ProjectMain: { borderColor: "#D81159", border: "solid" },
  ProjectImage: {
    width: "120px",
    float: "right",
  },
  ProjectInformation: {
    height: "225px",
  },
  ProjectText: {
    fontSize: 13,
    textAlign: "left",
    color: "#FFFFFF",
  },
  TechStackMainWrapper: {},
  TechStackMain: {
    width: "100px",
    float: "right",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  TechStackImage: {
    height: "40px",
    marginLeft: "10px",
  },
});

export default useStyles;
