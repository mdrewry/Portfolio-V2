import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  //main page
  main: {
    textAlign: "center",
  },
  ContactFormMain: {
    border: "solid",
  },
  FormInputWrapper: {
    flexDirection: "row",
  },
  SubmitButtonWrapper: {
    display: "flex",
    flexDirection: "row",
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
  ProjectsGridWrapper: {
    width: "75vw",
    marginTop: "50vh",
  },
  ProjectsGrid: {
    paddingBottom: "5vh",
  },
  ProjectMain: {
    border: "solid",
    padding: "10px",
    hover: "",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
  },
  ProjectInformation: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  ProjectImage: { height: "80px" },
  ProjectTitle: {
    fontSize: 20,
    textAlign: "left",
  },
  ProjectText: {
    fontSize: 12,
    textAlign: "left",
    flexGrow: 1,
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

export const theme = [
  {
    key: 0,
    primary: "#263238",
    secondary: "#455a64",
    highlight: "#D81159",
    textColor: "#FFFFFF",
  },
  {
    key: 1,
    primary: "#202040",
    secondary: "#543864",
    highlight: "#ff6363",
    textColor: "#FFFFFF",
  },
  {
    key: 2,
    primary: "#f6d186",
    secondary: "#fcf7bb",
    highlight: "#543864",
    textColor: "#000000",
  },
  {
    key: 3,
    primary: "#413c69",
    secondary: "#4a47a3",
    highlight: "#eab9c9",
    textColor: "#FFFFFF",
  },
  {
    key: 4,
    primary: "#1b262c",
    secondary: "#0f4c81",
    highlight: "#ed6663",
    textColor: "#FFFFFF",
  },
  {
    key: 5,
    primary: "#fd5e53",
    secondary: "#f9fcfb",
    highlight: "#21bf73",
    textColor: "#000000",
  },
  {
    key: 6,
    primary: "#12cad6",
    secondary: "#e4f9ff",
    highlight: "#fa163f",
    textColor: "#000000",
  },
  {
    key: 7,
    primary: "#f9f7f7",
    secondary: "#dbe2ef",
    highlight: "#3f72af",
    textColor: "#000000",
  },
  {
    key: 8,
    primary: "#222831",
    secondary: "#393e46",
    highlight: "#00adb5",
    textColor: "#FFFFFF",
  },
  {
    key: 9,
    primary: "#07689f",
    secondary: "#a2d5f2",
    highlight: "#ff7e67",
    textColor: "#000000",
  },
];
