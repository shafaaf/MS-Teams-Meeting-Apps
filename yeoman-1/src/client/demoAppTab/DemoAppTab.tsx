import * as React from "react";
import { Provider, Flex, Text, Button, Header, Input } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * Implementation of the demo app Tab content page
 */
export const DemoAppTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [text, setText] = useState<string>();
    const [entityId, setEntityId] = useState<string | undefined>();

    useEffect(() => {
        console.log("TEST - DemoAppTab - useEffect1: inTeams", inTeams);
        if (inTeams === true) {
            microsoftTeams.appInitialization.notifySuccess();
        } else {
            setEntityId("Not in Microsoft Teams");
        }
    }, [inTeams]);

    useEffect(() => {
        console.log("DemoAppTab - useEffect2: context", context);
        // microsoftTeams.initialize(() => {
        // console.log("after init");
        microsoftTeams.meeting.requestStartLiveStreaming((error) => {
            console.log("requestStartLiveStreaming error is: ", error);
        }, "rtmps://live-api-s.facebook.com:443/rtmp/", "FB-170896502041794-0-AbwxCMF3A2E-xvem");
        // });
        // microsoftTeams.meeting.getLiveStreamState((error, liveStreamState) => {
        //     console.log("getLiveStreamState error is: ", error);
        //     console.log("getLiveStreamState liveStreamState is: ", liveStreamState);
        // });
        if (context) {
            setEntityId(context.entityId);
        }
    }, [context]);

    // useEffect(() => {
    //     console.log("DemoAppTab - useEffect: text", text);
    //     console.log("DemoAppTab - full url: ", window.location.href);
    //
    //     microsoftTeams.meeting.getLiveStreamState((error, liveStreamState) => {
    //         console.log("getLiveStreamState error is: ", error);
    //         console.log("getLiveStreamState liveStreamState is: ", liveStreamState);
    //     });
    //     microsoftTeams.initialize(() => {
    //         console.log("after init 1");
    //         microsoftTeams.meeting.requestStartLiveStreaming((error) => {
    //             console.log("requestStartLiveStreaming error is: ", error);
    //         }, "rtmps://edgetee-upload-yyz1-1.xx.fbcdn.net:443/rtmp/", "FB-141144245017020-0-AbxRHCLhKFMZP_gh");
    //     });
    //     microsoftTeams.meeting.requestStartLiveStreaming((error) => {
    //         console.log("requestStartLiveStreaming error is: ", error);
    //     }, "rtmps://edgetee-upload-yyz1-1.xx.fbcdn.net:443/rtmp/", "FB-141144245017020-0-AbxRHCLhKFMZP_gh");
    // }, [text]);

    /**
     * The render() method to create the UI of the tab
     */
    return (
        <Provider theme={theme}>
            <Flex fill={true} column styles={{
                padding: ".8rem 0 .8rem .5rem"
            }}>
                <Flex.Item>
                    <Header content="This is your tab2" />
                </Flex.Item>
                <Flex.Item>
                    <div>
                        <div>
                            <Text content={entityId} />
                        </div>

                        <div>
                            <Button onClick={() => alert("It worked!")}>A sample button</Button>
                        </div>
                    </div>
                </Flex.Item>
                <Flex.Item styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Text size="smaller" content="(C) Copyright Shafaaf Comp" />
                </Flex.Item>
                {/* my code below */}
                <Input
                    placeholder="Enter a test value here to trigger useEffect for value"
                    fluid
                    clearable
                    value={text}
                    onChange={(e, data) => {
                        if (data) {
                            setText(data.value);
                        }
                    }}
                    required />
            </Flex>
        </Provider>
    );
};
