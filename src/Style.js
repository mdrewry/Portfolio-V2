import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import diagonalURL from "./Res/backgroundA.svg";
import diagonalURL2 from "./Res/backgroundB.svg";
export const appstyle = (currentTheme) => {
  const useStyles = makeStyles(() => ({
    //main page
    main: {
      textAlign: "center",
      position: "relative",
      backgroundColor: currentTheme.primary,
      minHeight: "400vh",
      overflow: "hidden",
    },
    sectionAWrapper: {
      width: "100%",
      backgroundImage: `url(${diagonalURL})`,
    },
    sectionBWrapper: {
      width: "100%",
      backgroundImage: `url(${diagonalURL2})`,
    },
    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    cardMain: {
      border: "solid",
      backgroundColor: currentTheme.primary,
      borderColor: currentTheme.highlight,
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        boxShadow: `1px 1px 10px 3px ${currentTheme.highlight}`,
      },
    },
    cardContent: {
      backgroundColor: currentTheme.secondary,
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
    },
    welcomeText: {
      fontSize: "25px",
      paddingLeft: "10px",
      paddingRight: "10px",
      color: currentTheme.textColor,
      fontFamily: "Monospace",
    },
    //TopNav
    pageHeader: {
      display: "flex",
      flexDirection: "row",
      position: "fixed",
      alignItems: "center",
      padding: "10px",
      zIndex: "300",
    },
    nav_spacer: {
      width: "50px",
      height: "50px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    nav_icon: {
      fontSize: 25,
      "&:hover": {
        fontSize: 40,
      },
    },
    headerButton: {
      color: currentTheme.textColor,
      "&:hover": {
        color: currentTheme.highlight,
      },
    },
    //ThemeSelector
    themeSelectorMain: {
      borderRadius: "10px",
      backgroundColor: currentTheme.secondary,
      borderColor: currentTheme.highlight,
      border: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    themeSelectorList: {
      marginTop: "5px",
    },
    themeName: {
      marginRight: "10px",
      color: currentTheme.textColor,
    },
    //AboutMe
    dialogTitle: {
      textAlign: "center",
      fontSize: 30,
      backgroundColor: currentTheme.primary,
      color: currentTheme.textColor,
      border: "solid",
      borderColor: currentTheme.highlight,
      borderBottom: "none",
      fontFamily: "Monospace",
    },
    aboutMeMain: {
      border: "solid",
      backgroundColor: currentTheme.primary,
      borderColor: currentTheme.highlight,
      borderTop: "none",
    },
    //Contact Form
    contactMeMain: {
      backgroundColor: currentTheme.primary,
      border: "solid",
      borderColor: currentTheme.highlight,
    },
    formField: {
      backgroundColor: currentTheme.secondary,
      marginBottom: "10px",
    },
    submitText: {
      color: currentTheme.textColor,
      fontSize: 15,
      marginRight: "10px",
    },
    submitButton: {
      marginTop: "10px",
      backgroundColor: currentTheme.highlight,
      color: currentTheme.textColor,
    },
    // ActionBar Stuff
    actionBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignSelf: "center",
      alignItems: "center",
    },
    actionIcon: {
      fontSize: "40px",
      color: currentTheme.highlight,
    },

    //Projects Stuff
    projectMain: {
      border: "solid",
      backgroundColor: currentTheme.primary,
      borderColor: currentTheme.highlight,
      height: "100%",
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        boxShadow: `1px 1px 10px 3px ${currentTheme.highlight}`,
      },
    },
    projectContent: {
      backgroundColor: currentTheme.secondary,
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
    },
    projectMedia: {
      width: "80px",
      paddingLeft: "80px",
    },
    projectTitle: {
      fontSize: 20,
      color: currentTheme.textColor,
      fontFamily: "Monospace",
    },
    projectLinkText: {
      fontSize: 14,
      color: currentTheme.textColor,
      marginLeft: "10px",
    },
    projectLinkIcon: {
      fontSize: "30px",
      color: currentTheme.highlight,
    },
    projectDivider: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    projectText: {
      fontSize: 14,
      color: currentTheme.textColor,
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
    techIconAvatar: {
      width: "40px",
      height: "40px",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
    },
    //Peers
    peerAvatar: {
      width: "40px",
      height: "40px",
      marginRight: "10px",
    },
    peerMain: {
      borderRadius: "10px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      backgroundColor: currentTheme.secondary,
      borderColor: currentTheme.highlight,
      border: "solid",
    },
    peerList: {
      marginTop: "5px",
    },
    peerTitle: {
      fontSize: "20px",
      fontFamily: "Monospace",
      color: currentTheme.highlight,
      whiteSpace: "nowrap",
    },
    peerTitleWrapper: { minWidth: "250px" },
    peerText: {
      fontSize: "20px",
      fontFamily: "Monospace",
      color: currentTheme.textColor,
      "&:hover": {
        color: currentTheme.highlight,
      },
    },
    //Misc
    rowCenter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    filler: {
      flexGrow: "1",
    },
    flex: {
      display: "flex",
    },
    noUnderlineText: {
      textDecoration: "none",
    },
    textColor: {
      color: currentTheme.textColor,
    },
    backgroundColorHighlight: {
      backgroundColor: currentTheme.highlight,
    },
    backgroundColorSecondary: {
      backgroundColor: currentTheme.secondary,
    },
  }));
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55B56A",
        light: "#EDF8F4",
        dark: "#028360",
      },
      info: {
        main: "#F4B425",
      },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          color: currentTheme.textColor,
          backgroundColor: currentTheme.secondary,
          fontSize: "15px",
          border: "solid",
          borderWidth: "2px",
          borderColor: currentTheme.highlight,
        },
      },
      MuiMenu: {
        root: {
          paddingTop: 0,
        },
        paper: {
          backgroundColor: currentTheme.secondary,
        },
      },
      MuiCard: {
        root: {
          borderRadius: "10px",
        },
      },
      MuiMenuItem: {
        root: {
          backgroundColor: currentTheme.secondary,
          border: "solid",
          borderRadius: "10px",
          borderWidth: "1px",
          borderColor: currentTheme.secondary,
          "&:hover": {
            borderColor: currentTheme.highlight,
            backgroundColor: currentTheme.primary,
          },
        },
      },
    },
    props: {},
  });
  return { useStyles, theme };
};
