import React from "react";
import {Chip, ListItem, ListItemIcon, ListItemText, Typography, useTheme} from "@material-ui/core";
import {Agent} from "../../../../../../back/src/core/services/manager/types";
import {StoreState} from "../../../store";
import {Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {ReactComponent as BuildIcon} from "../icon/buildJob.svg"
import {ReactComponent as DeployIcon} from "../icon/deploymentJob.svg"
import "./AgentItem.scss"

type Props = {
    data: Agent
    type: "builder" | "production"
}


type StatusChipProps = ThemeType & {
    status: Agent["availability"]
}

function StatusChip({status, theme}: StatusChipProps) {

    const {palette} = useTheme();

    const texts: { [key in typeof status]: { label: string, color: string } } = {
        down: {label: "Down", color: palette.error[theme]},
        free: {label: "Available", color: palette.success[theme]},
        running: {label: "Working", color: palette.primary[theme]},
    }

    return <Chip label={texts[status].label} style={{backgroundColor: texts[status].color, fontWeight: "bold", fontSize: "90%"}}/>

}

const mapStateToProps = (state: StoreState) => ({
    theme: state.theme.current
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export const themeConnector = connect(mapStateToProps, mapDispatchToProps);
export type ThemeType = ConnectedProps<typeof themeConnector>;
const StatusChipWithStore = themeConnector(StatusChip)

export function AgentItem(props: Props) {
    return <ListItem className={"AgentItem"}>
        <ListItemIcon className={"Avatar"}>
            {props.type === "production" ? <DeployIcon width={48} height={48}/> : <BuildIcon width={48} height={48}/>}
        </ListItemIcon>
        <ListItemText
            primary={props.data.uri}
            secondary={<Typography>Status: <StatusChipWithStore status={props.data.availability}/></Typography>}
        />
    </ListItem>
}
