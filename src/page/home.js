import "../App.css";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UserInfo from '../component/userinfo';
import axios from "axios";
import { Link } from "react-router-dom";

class home extends Component {
    state = {
        userInfomation: null
    }
    componentDidMount() {
        axios
            .get("/getInfo")
            .then((res) => {
                this.setState({
                    userInfomation: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        let recentUserMarkUp = this.state.userInfomation ? (
            this.state.userInfomation.map((userInfo) => <UserInfo key={userInfo.email} userInfo={userInfo} />)
        ) : (
                <p>Loading ....</p>
            );
        return (
            <div>
                <Grid container >
                    <Grid item sm={8} xs={12}>
                        {recentUserMarkUp}
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default home;
