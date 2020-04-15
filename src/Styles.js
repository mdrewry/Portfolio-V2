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
    marginTop: "50vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  Projects: {
    width: "80vh",
    padding: "20px",
    borderColor: "#D81159",
    border: "double",
  },
  ProjectsGrid: {},
  IndividualProject: {},
  ProjectMain: { backgroundColor: "#D81159" },
  ProjectImage: {
    width: "120px",
    float: "right",
  },
  ProjectText: {
    fontSize: 11,
    float: "left",
  },
});

export default useStyles;
