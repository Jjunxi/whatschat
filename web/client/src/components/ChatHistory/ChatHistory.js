import React, { Component } from "react";
import "./ChatHistory.css";
import { Spin, List, Avatar } from "antd";

import { connect } from "react-redux";
import { getMsgList } from "../../redux/chat.redux";
import { recvMsg } from "../../redux/chat.redux";


@connect(state => state.chat, { getMsgList, recvMsg })
class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.chatmsg.length) {
      this.props.getMsgList();
      this.props.recvMsg();
    }
  }

  render() {
    const userid = this.props.match.params.user;
    const msgs = this.props.chatmsg.filter(v=>(v.from===userid || v.to===userid));
    return (
      <div className="chat-frame">
        <Spin size="large" className="chat-frame-spin" spinning={false} />
        {/* 聊天记录 */}

        <List
          itemLayout="horizontal"
          dataSource={msgs}
          renderItem={item =>
            item.from === userid ? (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.create_time}
                  description={item.content}
                />
              </List.Item>
            ) : (
              <List.Item>{item.content}</List.Item>
            )
          }
        />

        
      </div>
    );
  }
}

export default ChatHistory;
