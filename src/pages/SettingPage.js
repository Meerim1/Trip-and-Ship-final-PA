import React, { Component } from "react";
import { Layout, BackgroundWrapper } from "../components";

class SettingPage extends Component{
    render(){
        return(
            <Layout>
                <BackgroundWrapper>
                    <span>Settings</span>
                </BackgroundWrapper>
            </Layout>
        )
    }
};

export default SettingPage;
