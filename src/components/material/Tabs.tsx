import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../../styles/components/material/Tabs.module.scss";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "theme.palette.background.paper",
        color: "#232C37",
        width: "100%",
        border: "none",
    },
    indicator: {
        "& .indicator": {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            "& > span": {
                maxWidth: 40,
                width: "100%",
                backgroundColor: "red",
            },
        },
    },
}));

export default function PokemonTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={`${classes.root} ${styles.contentContainer}`}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: classes.indicator,
                        flexContainer: "flexContainer",
                        indicator: "indicator",
                    }}
                    centered
                    variant="fullWidth"
                    TabIndicatorProps={{ children: <span /> }}
                >
                    <Tab
                        label={
                            <span className={styles.matTabLabels}>About</span>
                        }
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={
                            <span className={styles.matTabLabels}>
                                Base stats
                            </span>
                        }
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={
                            <span className={styles.matTabLabels}>
                                Evolution
                            </span>
                        }
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={styles.tabContainer}>
                        <div className={`${styles.infoTable}`}>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Height</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Height</span>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Weight</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Weight</span>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Abilities</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Abilities</span>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.breedingTitle}>Breeding</h3>
                        <div className={styles.infoTable}>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Gender</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Gender</span>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Egg Groups</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Egg Groups</span>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.firstColumn}>
                                    <span>Egg Cycle</span>
                                </div>
                                <div className={styles.secondColumn}>
                                    <span>Egg Cycle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
